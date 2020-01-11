<?php
	require_once('vendor/autoload.php');

	add_action( 'wp_ajax_pafe_ajax_form_builder', 'pafe_ajax_form_builder' );
	add_action( 'wp_ajax_nopriv_pafe_ajax_form_builder', 'pafe_ajax_form_builder' );

	function find_element_recursive( $elements, $form_id ) {
		foreach ( $elements as $element ) {
			if ( $form_id === $element['id'] ) {
				return $element;
			}

			if ( ! empty( $element['elements'] ) ) {
				$element = find_element_recursive( $element['elements'], $form_id );

				if ( $element ) {
					return $element;
				}
			}
		}

		return false;
	}

	function replace_email($content, $fields, $payment_status = 'succeeded', $payment_id = '', $succeeded = 'succeeded', $pending = 'pending', $failed = 'failed' ) {
		$message = '';

		if (trim($content) == '[all-fields]') {
			if (!empty($fields)) {
				foreach ($fields as $field) {
					$message .= $field['label'] . ': ' . $field['value'] . '<br />';
				}
			}
		} else {
			if (!empty($fields)) {
				$message = $content;
				foreach ($fields as $field) {
					$search = '[field id="' . $field['name'] . '"]';
					$message = str_replace($search, $field['value'], $message);
				}
			}
		}

		$message = str_replace( [ "\r\n", "\n", "\r" ], '<br />', $message );

		if ($payment_status == 'succeeded') {
			$message = str_replace( '[payment_status]', $succeeded, $message );
		}

		if ($payment_status == 'pending') {
			$message = str_replace( '[payment_status]', $pending, $message );
		}

		if ($payment_status == 'failed') {
			$message = str_replace( '[payment_status]', $failed, $message );
		}

		if (!empty($payment_id)) {
			$message = str_replace( '[payment_id]', $payment_id, $message );
		}

		return $message;
	}

	function get_field_name_shortcode($content) {
		$field_name = str_replace('[field id="', '', $content);
		$field_name = str_replace('"]', '', $field_name);
		return trim($field_name);
	}

	function pafe_ajax_form_builder() {
		global $wpdb;
			if ( !empty($_POST['post_id'] && !empty($_POST['form_id'] && !empty($_POST['fields'] ) ) ) ) {
				$post_id = $_POST['post_id'];
				$form_id = $_POST['form_id'];
				$fields = stripslashes($_POST['fields']);
				$fields = json_decode($fields, true);
				$fields = array_unique($fields, SORT_REGULAR);

				$post_url = '';

				$message = '';
				$meta_content = '';

				$upload = wp_upload_dir();
				$upload_dir = $upload['basedir'];
				$upload_dir = $upload_dir . '/piotnet-addons-for-elementor';

				$attachment = array();

				if( !empty($_FILES) ) {
					foreach ($_FILES as $key=>$file) {
						
						for ($i=0; $i < count($file['name']); $i++) { 
							$file_extension = pathinfo( $file['name'][$i], PATHINFO_EXTENSION );
							$filename_goc = str_replace( '.' . $file_extension, '', $file['name'][$i]);
							$filename = $filename_goc . '-' . uniqid() . '.' . $file_extension;
							$filename = wp_unique_filename( $upload_dir, $filename );
							$new_file = trailingslashit( $upload_dir ) . $filename;

							if ( is_dir( $upload_dir ) && is_writable( $upload_dir ) ) {
								$move_new_file = @ move_uploaded_file( $file['tmp_name'][$i], $new_file );
								if ( false !== $move_new_file ) {
									// Set correct file permissions.
									$perms = 0644;
									@ chmod( $new_file, $perms );

									$file_url = $upload['baseurl'] . '/piotnet-addons-for-elementor/' . $filename;

									foreach ($fields as $key_field=>$field) {
										if ($key == $field['name']) {
											if ($fields[$key_field]['attach-files'] == 1) {
												$attachment[] = WP_CONTENT_DIR . '/uploads/piotnet-addons-for-elementor/' . $filename;
											} else {
												$fields[$key_field]['value'] = $fields[$key_field]['value'] . $file_url;
												if ( $i != (count($file['name']) - 1) ) {
													$fields[$key_field]['value'] = $fields[$key_field]['value'] . ' , ';
												}
											}
										}
									}
								}
							}
						}						
					} 
				}

				foreach ($fields as $key_field=>$field) {
					if (isset($fields[$key_field]['attach-files'])) {
						if ($fields[$key_field]['attach-files'] == 1) {
							if (isset($fields[$key_field])) {
								unset($fields[$key_field]);
							}
						}
					}
				}

				$elementor = \Elementor\Plugin::$instance;

				$meta = $elementor->db->get_plain_editor( $post_id );

				$form = find_element_recursive( $meta, $form_id );

				$widget = $elementor->elements_manager->create_element_instance( $form );
				$form['settings'] = $widget->get_active_settings();

				$body = array(); // Webhook

				$meta_data = array(); // Webhook

				$fields_data = array(); // Webhook

				if ( ! empty( $form['settings']['form_metadata'] ) ) {
					$form_metadata = $form['settings']['form_metadata'];
					$meta_content .= '<br>---<br><br>';
					foreach ($form_metadata as $meta) {
						if ($meta == 'date') {
							$meta_content .= __('Date','pafe') . ': ' . date_i18n( get_option( 'date_format' ) ) . '<br>';
							$meta_data['date']['title'] = __('Date','pafe');
							$meta_data['date']['value'] = date_i18n( get_option( 'date_format' ) );
						}
						if ($meta == 'time') {
							$meta_content .= __('Time','pafe') . ': ' . date_i18n( get_option( 'time_format' ) ) . '<br>';
							$meta_data['time']['title'] = __('Time','pafe');
							$meta_data['time']['value'] = date_i18n( get_option( 'time_format' ) );
						}
						if ($meta == 'page_url') {
							$meta_content .= __('Page URL','pafe') . ': ' . $_POST['referrer'] . '<br>';
							$meta_data['page_url']['title'] = __('Page URL','pafe');
							$meta_data['page_url']['value'] = $_POST['referrer'];
						}
						if ($meta == 'user_agent') {
							$meta_content .= __('User Agent','pafe') . ': ' . $_SERVER['HTTP_USER_AGENT'] . '<br>';
							$meta_data['user_agent']['title'] = __('User Agent','pafe');
							$meta_data['user_agent']['value'] = $_SERVER['HTTP_USER_AGENT'];
						}
						if ($meta == 'remote_ip') {
							$meta_content .= __('Remote IP','pafe') . ': ' . $_POST['remote_ip'] . '<br>';
							$meta_data['remote_ip']['title'] = __('Remote IP','pafe');
							$meta_data['remote_ip']['value'] = $_POST['remote_ip'];
						}
					}
				}

				if( in_array('webhook', $form['settings']['submit_actions']) && !empty($form['settings']['webhooks_advanced_data']) ) {
					if ($form['settings']['webhooks_advanced_data'] == 'yes') {
						$body['meta'] = $meta_data;
					}
				}

				$status = '';

				$payment_status = 'succeeded';
				$payment_id = '';

				if (!empty($_POST['stripeToken']) && !empty($_POST['amount'])) {

					\Stripe\Stripe::setApiKey(get_option('piotnet-addons-for-elementor-pro-stripe-secret-key'));

					$token = $_POST['stripeToken'];

					$customer_array = array( 
						"source" => $token,
					);

					if (!empty($_POST['description'])) {
						$customer_array['description'] = esc_sql( $_POST['description'] );
					}

					// Create Customer In Stripe
					$customer = \Stripe\Customer::create($customer_array);

					$fields_metadata = array();

					foreach ($fields as $field) {
						$fields_metadata[$field['name']] = $field['value'];
					}

					// Charge Customer
					$charge = \Stripe\Charge::create(array(
						"amount" => floatval($_POST['amount']) * 100,
						"currency" => strtolower($form['settings']['pafe_stripe_currency']),
						"description" => $form['settings']['form_id'],
						"customer" => $customer->id,
						"metadata" => $fields_metadata,
					));

					print_r($charge);

					$payment_status = $charge->status;
					$payment_id = $charge->id;

					// Webhook
					$fields_data['payment_id'] = $payment_id;
					$fields_data['payment_status'] = $payment_status;
				}

				// Webhook

				if( in_array('webhook', $form['settings']['submit_actions']) && !empty($form['settings']['webhooks'])) {
					foreach ($fields as $field) {
						$field_name = $field['name'];
						$fields_data[$field_name]['id'] = $field['name'];
						$fields_data[$field_name]['title'] = $field['label'];
						$fields_data[$field_name]['value'] = $field['value'];
					}

					$body['fields'] = $fields_data;

					$body['form']['id'] = $form['settings']['form_id'];

					$args = [
						'body' => $body,
					];

					$response = wp_remote_post( $form['settings']['webhooks'], $args );
				}

				// Recaptcha

				$recaptcha_check = 1;

				if (!empty($_POST['recaptcha'])) {

					// Build POST request:
				    $recaptcha_url = 'https://www.google.com/recaptcha/api/siteverify';
				    $recaptcha_secret = get_option('piotnet-addons-for-elementor-pro-recaptcha-secret-key');
				    $recaptcha_response = $_POST['recaptcha'];

					$recaptcha_request = [
						'body' => [
							'secret' => $recaptcha_secret,
							'response' => $recaptcha_response,
							'remoteip' => $_POST['remote_ip'],
						],
					];

					$recaptcha = wp_remote_post( 'https://www.google.com/recaptcha/api/siteverify', $recaptcha_request );

					$recaptcha = json_decode( wp_remote_retrieve_body( $recaptcha ) );

				    // Take action based on the score returned:
				    if ($recaptcha->score >= 0.5) {
				        // Verified - send email
				    } else {
				        // Not verified - show form error
				        $recaptcha_check = 0;
				    }
				}

				// Honeypot

				foreach ($fields as $key_field=>$field) {
					if ($fields[$key_field]['name'] == 'honeypot') {
						if (!empty($fields[$key_field]['value'])) {
							$recaptcha_check = 0;
						}
					}
				}

				if ($recaptcha_check == 1) {

					// Add to Form Database

					$my_post = array(
						'post_title'    => wp_strip_all_tags( 'Piotnet Addons Form Database ' . $form_id ),
						'post_status'   => 'publish',
						'post_type'		=> 'pafe-form-database',
					);

					$form_database_post_id = wp_insert_post( $my_post );

					if (!empty($form_database_post_id)) {

						$my_post_update = array(
							'ID'           => $form_database_post_id,
							'post_title'   => '#' . $form_database_post_id,
						);
						wp_update_post( $my_post_update );

						update_post_meta( $form_database_post_id, 'form_id', $form['settings']['form_id'] );
						update_post_meta( $form_database_post_id, 'form_id_elementor', $form_id );
						update_post_meta( $form_database_post_id, 'post_id', $post_id );

						foreach ($fields as $field) {
							update_post_meta( $form_database_post_id, $field['name'], $field['value'] );
						}

						if (!empty($charge)) {
							update_post_meta( $form_database_post_id, 'payment_id', $charge->id );
							update_post_meta( $form_database_post_id, 'payment_customer_id', $charge->customer );
							update_post_meta( $form_database_post_id, 'payment_description', $charge->description );
							update_post_meta( $form_database_post_id, 'payment_amount', $charge->amount );
							update_post_meta( $form_database_post_id, 'payment_currency', $charge->currency );
							update_post_meta( $form_database_post_id, 'payment_status', $charge->status );
						}

					}

					// End add to Form Database

					// Submit Post

					if( in_array('submit_post', $form['settings']['submit_actions']) ) {
						$sp_post_type = $form['settings']['submit_post_type'];
						$sp_post_taxonomy = $form['settings']['submit_post_taxonomy'];
						$sp_terms = $form['settings']['submit_post_terms_list'];
						$sp_term_slug = $form['settings']['submit_post_term_slug'];
						$sp_status = $form['settings']['submit_post_status'];
						$sp_title = get_field_name_shortcode( $form['settings']['submit_post_title'] );
						$sp_content = get_field_name_shortcode( $form['settings']['submit_post_content'] );
						$sp_term = get_field_name_shortcode( $form['settings']['submit_post_term'] );
						$sp_featured_image = get_field_name_shortcode( $form['settings']['submit_post_featured_image'] );
						$sp_custom_fields = $form['settings']['submit_post_custom_fields_list'];

						$post_title = $post_content = $post_tags = $post_term = $post_featured_image = '';

						foreach ($fields as $field) {
							if ($field['name'] == $sp_title) {
								$post_title = $field['value'];
							}
							if ($field['name'] == $sp_content) {
								$post_content = $field['value'];
							}
							if ($field['name'] == $sp_term) {
								$post_term = $field['value'];
							}
							if ($field['name'] == $sp_featured_image) {
								$post_featured_image = $field['value'];
							}
						}

						if ( !empty($post_title) ) {
							$submit_post = array(
								'post_type'		=> $sp_post_type,
								'post_status'   => $sp_status,
								'post_title'    => wp_strip_all_tags( $post_title ),
								'post_content'  => $post_content,
							);

							if (empty($_POST['edit'])) {
								$submit_post_id = wp_insert_post( $submit_post );
							} else {
								$submit_post_id = intval($_POST['edit']);

								$submit_post = array(
									'ID'            => $submit_post_id,
									'post_type'		=> $sp_post_type,
									'post_title'    => wp_strip_all_tags( $post_title ),
									'post_content'  => $post_content,
								);

								wp_update_post( $submit_post );
							}

							if (!empty($post_featured_image)) {
								$post_featured_image_array = explode(',', $post_featured_image);
								$post_featured_image_id = attachment_url_to_postid( $post_featured_image_array[0] );
								if (!empty($post_featured_image_id)) {
									set_post_thumbnail( $submit_post_id, intval( $post_featured_image_id ) );
								}
							}

							if (!empty($sp_post_taxonomy) && empty($sp_terms)) {
								$sp_post_taxonomy = explode('-', $sp_post_taxonomy);
								$sp_post_taxonomy = $sp_post_taxonomy[0];
								if (!empty($sp_term_slug)) {
									wp_set_object_terms( $submit_post_id, $sp_term_slug, $sp_post_taxonomy );
								}
								if (!empty($sp_term)) {
									wp_set_object_terms( $submit_post_id, $post_term, $sp_post_taxonomy );
								}
							}

							if (!empty($sp_terms)) {
								foreach ($sp_terms as $sp_terms_item) {
									$sp_post_taxonomy = explode('-', $sp_terms_item['submit_post_taxonomy']);
									$sp_post_taxonomy = $sp_post_taxonomy[0];
									$sp_term_slug = $sp_terms_item['submit_post_terms_slug'];
									$sp_term = get_field_name_shortcode( $sp_terms_item['submit_post_terms_field_id'] );
									$post_term = '';
									foreach ($fields as $field) {
										if ($field['name'] == $sp_term) {
											$post_term = $field['value'];
										}
									}
									// if (!empty($sp_term_slug)) {
									// 	wp_set_object_terms( $submit_post_id, $sp_term_slug, $sp_post_taxonomy );
									// }
									if (!empty($post_term)) {
										wp_set_object_terms( $submit_post_id, $post_term, $sp_post_taxonomy );
									}
								}
							}

							foreach ($sp_custom_fields as $sp_custom_field) {
								if ( !empty( $sp_custom_field['submit_post_custom_field'] ) ) {
									$custom_field_value = '';

									foreach ($fields as $field) {
										if ($field['name'] == get_field_name_shortcode( $sp_custom_field['submit_post_custom_field_id'] )) {
											$custom_field_value = $field['value'];
										}
									}

									if (!empty($custom_field_value)) {
										if (function_exists('update_field') && $form['settings']['submit_post_custom_field_source'] == 'acf_field') {
											update_field( $sp_custom_field['submit_post_custom_field'], $custom_field_value, $submit_post_id );
										} else {
											update_post_meta( $submit_post_id, $sp_custom_field['submit_post_custom_field'], $custom_field_value );
										}
									}
								}
							}

							update_post_meta( $submit_post_id, '_submit_button_id', $form_id );
							update_post_meta( $submit_post_id, '_submit_post_id', $post_id );

							$post_url = get_permalink( $submit_post_id );
						}							
					}

					// End Submit Post

					// Replace redirect

					$redirect = '';

					if (in_array("redirect", $form['settings']['submit_actions'])) {
						$redirect = replace_email($form['settings']['redirect_to'], $fields);
					}

					if (in_array("email", $form['settings']['submit_actions'])) {

						$to = replace_email($form['settings']['email_to'], $fields);

						if ( ! empty( $form['settings']['pafe_stripe_status_succeeded'] ) && ! empty( $form['settings']['pafe_stripe_status_pending'] ) && ! empty( $form['settings']['pafe_stripe_status_failed'] ) ) {
							$to = replace_email( $form['settings']['email_to'], $fields, $payment_status, $payment_id, $form['settings']['pafe_stripe_status_succeeded'], $form['settings']['pafe_stripe_status_pending'], $form['settings']['pafe_stripe_status_failed'] );
						}

						$subject = replace_email($form['settings']['email_subject'], $fields);

						if ( ! empty( $form['settings']['pafe_stripe_status_succeeded'] ) && ! empty( $form['settings']['pafe_stripe_status_pending'] ) && ! empty( $form['settings']['pafe_stripe_status_failed'] ) ) {
							$subject = replace_email($form['settings']['email_subject'], $fields, $payment_status, $payment_id, $form['settings']['pafe_stripe_status_succeeded'], $form['settings']['pafe_stripe_status_pending'], $form['settings']['pafe_stripe_status_failed'] );
						}

						$message = replace_email($form['settings']['email_content'], $fields);

						if ( ! empty( $form['settings']['pafe_stripe_status_succeeded'] ) && ! empty( $form['settings']['pafe_stripe_status_pending'] ) && ! empty( $form['settings']['pafe_stripe_status_failed'] ) ) {
							$message = replace_email($form['settings']['email_content'], $fields, $payment_status, $payment_id, $form['settings']['pafe_stripe_status_succeeded'], $form['settings']['pafe_stripe_status_pending'], $form['settings']['pafe_stripe_status_failed'] );
						}

						$reply_to = $form['settings']['email_reply_to'];
						if (empty($reply_to)) {
							$reply_to = $form['settings']['email_from'];
						}
						$reply_to = replace_email($reply_to, $fields);

						if ( ! empty( $form['settings']['email_from'] ) ) {
							$headers[] = 'From: ' . $form['settings']['email_from_name'] . ' <' . $form['settings']['email_from'] . '>';
							$headers[] = 'Reply-To: ' . $reply_to;
						}

						if ( ! empty( $form['settings']['email_to_cc'] ) ) {
							$headers[] = 'Cc: ' . $form['settings']['email_to_cc'];
						}

						if ( ! empty( $form['settings']['email_to_bcc'] ) ) {
							$headers[] = 'Bcc: ' . $form['settings']['email_to_bcc'];
						}

						$headers[] = 'Content-Type: text/html; charset=UTF-8';

						if (!empty($post_url)) {
							$subject = str_replace( '[post_url]', $post_url, $subject );
							$message = str_replace( '[post_url]', '<a href="' . $post_url . '">' . $post_url . '</a>', $message );
						}

						$status = wp_mail( $to, $subject, $message . $meta_content, $headers, $attachment );

						if ( ! empty( $form['settings']['email_to_bcc'] ) ) {
							$bcc_emails = explode( ',', $form['settings']['email_to_bcc'] );
							foreach ( $bcc_emails as $bcc_email ) {
								wp_mail( trim( $bcc_email ), $subject, $message . $meta_content, $headers, $attachment );
							}
						}

					}

					if (in_array("email2", $form['settings']['submit_actions'])) {

						// $to = replace_email($form['settings']['email_to_2'], $fields);

						// $subject = replace_email($form['settings']['email_subject_2'], $fields);

						// $message = replace_email($form['settings']['email_content_2'], $fields);

						$to = replace_email($form['settings']['email_to_2'], $fields);

						if ( ! empty( $form['settings']['pafe_stripe_status_succeeded'] ) && ! empty( $form['settings']['pafe_stripe_status_pending'] ) && ! empty( $form['settings']['pafe_stripe_status_failed'] ) ) {
							$to = replace_email( $form['settings']['email_to_2'], $fields, $payment_status, $payment_id, $form['settings']['pafe_stripe_status_succeeded'], $form['settings']['pafe_stripe_status_pending'], $form['settings']['pafe_stripe_status_failed'] );
						}

						$subject = replace_email($form['settings']['email_subject_2'], $fields);

						if ( ! empty( $form['settings']['pafe_stripe_status_succeeded'] ) && ! empty( $form['settings']['pafe_stripe_status_pending'] ) && ! empty( $form['settings']['pafe_stripe_status_failed'] ) ) {
							$subject = replace_email($form['settings']['email_subject_2'], $fields, $payment_status, $payment_id, $form['settings']['pafe_stripe_status_succeeded'], $form['settings']['pafe_stripe_status_pending'], $form['settings']['pafe_stripe_status_failed'] );
						}

						$message = replace_email($form['settings']['email_content_2'], $fields);

						if ( ! empty( $form['settings']['pafe_stripe_status_succeeded'] ) && ! empty( $form['settings']['pafe_stripe_status_pending'] ) && ! empty( $form['settings']['pafe_stripe_status_failed'] ) ) {
							$message = replace_email($form['settings']['email_content_2'], $fields, $payment_status, $payment_id, $form['settings']['pafe_stripe_status_succeeded'], $form['settings']['pafe_stripe_status_pending'], $form['settings']['pafe_stripe_status_failed'] );
						}

						$reply_to = $form['settings']['email_reply_to_2'];
						if (empty($reply_to)) {
							$reply_to = $form['settings']['email_from_2'];
						}
						$reply_to = replace_email($reply_to, $fields);

						if ( ! empty( $form['settings']['email_from_2'] ) ) {
							$headers[] = 'From: ' . $form['settings']['email_from_name_2'] . ' <' . $form['settings']['email_from_2'] . '>';
							$headers[] = 'Reply-To: ' . $reply_to;
						}

						if ( ! empty( $form['settings']['email_to_cc_2'] ) ) {
							$headers[] = 'Cc: ' . $form['settings']['email_to_cc_2'];
						}

						if ( ! empty( $form['settings']['email_to_bcc_2'] ) ) {
							$headers[] = 'Bcc: ' . $form['settings']['email_to_bcc_2'];
						}

						$headers[] = 'Content-Type: text/html; charset=UTF-8';

						if (!empty($post_url)) {
							$subject = str_replace( '[post_url]', $post_url, $subject );
							$message = str_replace( '[post_url]', '<a href="' . $post_url . '">' . $post_url . '</a>', $message );
						}

						$status = wp_mail( $to, $subject, $message, $headers, $attachment );

						if ( ! empty( $form['settings']['email_to_bcc_2'] ) ) {
							$bcc_emails = explode( ',', $form['settings']['email_to_bcc_2'] );
							foreach ( $bcc_emails as $bcc_email ) {
								wp_mail( trim( $bcc_email ), $subject, $message, $headers, $attachment );
							}
						}

					}

					foreach ($attachment as $attachment_item) {
						unlink($attachment_item);
					}

					echo $payment_status . ',' . $status . ',' . $payment_id . ',' . $post_url . ',' . $redirect;

				} // End $recaptcha_check = 1;
			}
		wp_die();
	}
?>