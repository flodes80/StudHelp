<?php

class PAFE_Multi_Step_Form extends \Elementor\Widget_Base {

	public function get_name() {
		return 'pafe-multi-step-form';
	}

	public function get_title() {
		return __( 'Multi Step Form', 'pafe' );
	}

	public function get_icon() {
		return 'eicon-counter';
	}

	public function get_categories() {
		return [ 'pafe-form-builder' ];
	}

	public function get_keywords() {
		return [ 'input', 'form', 'field', 'submit', 'step', 'multi', 'multi step', 'multi step form' ];
	}

	public function get_script_depends() {
		return [ 'pafe-multi-step-form-scripts' ];
	}

	public function get_stype_depends() {
		return [ 'pafe-multi-step-form' ];
	}

	public static function get_button_sizes() {
		return [
			'xs' => __( 'Extra Small', 'elementor' ),
			'sm' => __( 'Small', 'elementor' ),
			'md' => __( 'Medium', 'elementor' ),
			'lg' => __( 'Large', 'elementor' ),
			'xl' => __( 'Extra Large', 'elementor' ),
		];
	}

	protected function _register_controls() {
		$this->start_controls_section(
			'pafe_multi_step_form_section_content',
			[
				'label' => __( 'Multi Step Form', 'pafe' ),
				'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);

		$this->add_control(
			'form_id',
			[
				'label' => __( 'Form ID* (Required)', 'pafe' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'description' => __( 'Form ID have to be unique in this website.', 'pafe' ),
			]
		);

		$repeater = new \Elementor\Repeater();

		$repeater->add_control(
			'pafe_multi_step_form_item_title',
			[
				'label' => __( 'Step Title', 'pafe' ),
				'label_block' => true,
				'type' => \Elementor\Controls_Manager::TEXT,
			]
		);

		$repeater->add_control(
			'pafe_multi_step_form_item_shortcode',
			[
				'label' => __( 'Template Shortcode', 'pafe' ),
				'label_block' => true,
				'type' => \Elementor\Controls_Manager::TEXT,
			]
		);

		$this->add_control(
			'pafe_multi_step_form_list',
			array(
				'type'    => Elementor\Controls_Manager::REPEATER,
				'fields'  => array_values( $repeater->get_controls() ),
				'title_field' => '{{{ pafe_multi_step_form_item_title }}}',
			)
		);

		$this->end_controls_section();

		$this->start_controls_section(
			'section_scroll_to_top',
			[
				'label' => __( 'Scroll To Top', 'pafe' ),
			]
		);

		$this->add_control(
			'pafe_multi_step_form_scroll_to_top',
			[
				'label' => __( 'Enable', 'pafe' ),
				'type' => \Elementor\Controls_Manager::SWITCHER,
				'default' => '',
				'label_on' => 'Yes',
				'label_off' => 'No',
				'return_value' => 'yes',
			] 
		);

		$this->add_control(
			'pafe_multi_step_form_scroll_to_top_offset_desktop',
			[
				'label' => __( 'Desktop Negative Offset Top (px)', 'pafe' ),
				'type' => \Elementor\Controls_Manager::NUMBER,
				'default' => 0,
				'condition' => [
					'pafe_multi_step_form_scroll_to_top' => 'yes',
				],
			]
		);

		$this->add_control(
			'pafe_multi_step_form_scroll_to_top_offset_tablet',
			[
				'label' => __( 'Tablet Negative Offset Top (px)', 'pafe' ),
				'type' => \Elementor\Controls_Manager::NUMBER,
				'default' => 0,
				'condition' => [
					'pafe_multi_step_form_scroll_to_top' => 'yes',
				],
			]
		);

		$this->add_control(
			'pafe_multi_step_form_scroll_to_top_offset_mobile',
			[
				'label' => __( 'Mobile Negative Offset Top (px)', 'pafe' ),
				'type' => \Elementor\Controls_Manager::NUMBER,
				'default' => 0,
				'condition' => [
					'pafe_multi_step_form_scroll_to_top' => 'yes',
				],
			]
		);

		$this->end_controls_section();

		$this->start_controls_section(
			'section_button',
			[
				'label' => __( 'Button', 'elementor' ),
			]
		);

		$this->add_control(
			'button_type',
			[
				'label' => __( 'Type', 'elementor' ),
				'type' => \Elementor\Controls_Manager::SELECT,
				'default' => '',
				'options' => [
					'' => __( 'Default', 'elementor' ),
					'info' => __( 'Info', 'elementor' ),
					'success' => __( 'Success', 'elementor' ),
					'warning' => __( 'Warning', 'elementor' ),
					'danger' => __( 'Danger', 'elementor' ),
				],
				'prefix_class' => 'elementor-button-',
			]
		);

		$this->add_control(
			'button_prev',
			[
				'label' => __( 'Previous', 'pafe' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'dynamic' => [
					'active' => true,
				],
				'default' => __( 'Previous', 'pafe' ),
				'placeholder' => __( 'Previous', 'pafe' ),
			]
		);

		$this->add_control(
			'button_next',
			[
				'label' => __( 'Next', 'pafe' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'dynamic' => [
					'active' => true,
				],
				'default' => __( 'Next', 'pafe' ),
				'placeholder' => __( 'Next', 'pafe' ),
			]
		);

		$this->add_control(
			'button_submit',
			[
				'label' => __( 'Submit', 'pafe' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'dynamic' => [
					'active' => true,
				],
				'default' => __( 'Submit', 'pafe' ),
				'placeholder' => __( 'Submit', 'pafe' ),
			]
		);

		$this->add_control(
			'size',
			[
				'label' => __( 'Size', 'elementor' ),
				'type' => \Elementor\Controls_Manager::SELECT,
				'default' => 'sm',
				'options' => self::get_button_sizes(),
				'style_transfer' => true,
			]
		);

		$this->end_controls_section();
		
		$this->start_controls_section(
			'section_integration',
			[
				'label' => __( 'Actions After Submit', 'elementor-pro' ),
			]
		);

		
		$actions = [
			[
				'name' => 'email',
				'label' => 'Email'
			],
			[
				'name' => 'email2',
				'label' => 'Email 2'
			],
			[
				'name' => 'redirect',
				'label' => 'Redirect'
			],
			[
				'name' => 'webhook',
				'label' => 'Webhook'
			],
			[
				'name' => 'popup',
				'label' => 'Popup'
			],
			[
				'name' => 'open_popup',
				'label' => 'Open Popup'
			],
			[
				'name' => 'close_popup',
				'label' => 'Close Popup'
			],
			[
				'name' => 'submit_post',
				'label' => 'Submit Post'
			],
		];

		$actions_options = [];

		foreach ( $actions as $action ) {
			$actions_options[ $action['name'] ] = $action['label'];
		}

		$this->add_control(
			'submit_actions',
			[
				'label' => __( 'Add Action', 'elementor-pro' ),
				'type' => \Elementor\Controls_Manager::SELECT2,
				'multiple' => true,
				'options' => $actions_options,
				'render_type' => 'none',
				'label_block' => true,
				'default' => [
					'email',
				],
				'description' => __( 'Add actions that will be performed after a visitor submits the form (e.g. send an email notification). Choosing an action will add its setting below.', 'elementor-pro' ),
			]
		);

		$this->end_controls_section();

		$this->start_controls_section(
			'section_submit_post',
			[
				'label' => __( 'Submit Post', 'pafe' ),
				'condition' => [
					'submit_actions' => 'submit_post',
				],
			]
		);

		$post_types = get_post_types( [], 'objects' );
		$post_types_array = array();
		$taxonomy = array();
		foreach ( $post_types as $post_type ) {
	        $post_types_array[$post_type->name] = $post_type->label;
	        $taxonomy_of_post_type = get_object_taxonomies( $post_type->name, 'names' );
	        $post_type_name = $post_type->name;
	        if (!empty($taxonomy_of_post_type) && $post_type_name != 'nav_menu_item' && $post_type_name != 'elementor_library' && $post_type_name != 'elementor_font' ) {
	        	if ($post_type_name == 'post') {
	        		$taxonomy_of_post_type = array_diff( $taxonomy_of_post_type, ["post_format"] );
	        	}
	        	$taxonomy[$post_type_name] = $taxonomy_of_post_type;
	        }
	    }

	    $taxonomy_array = array();
	    foreach ($taxonomy as $key => $value) {
	    	foreach ($value as $key_item => $value_item) {
	    		$taxonomy_array[$value_item . '-' . $key] = $value_item . ' - ' . $key;
	    	}
	    }

		$this->add_control(
			'submit_post_type',
			[
				'label' => __( 'Post Type', 'pafe' ),
				'type' => \Elementor\Controls_Manager::SELECT,
				'options' => $post_types_array,
				'default' => 'post',
			]
		);

		$this->add_control(
			'submit_post_taxonomy',
			[
				'label' => __( 'Taxonomy', 'pafe' ),
				'type' => \Elementor\Controls_Manager::HIDDEN,
				'default' => 'category-post',
			]
		);

		$this->add_control(
			'submit_post_term_slug',
			[
				'label' => __( 'Term slug', 'pafe' ),
				'type' => \Elementor\Controls_Manager::HIDDEN,
				'description' => 'E.g news, [field id="term"]',
			]
		);

		$this->add_control(
			'submit_post_term',
			[
				'label' => __( 'Term Field ID', 'pafe' ),
				'type' => \Elementor\Controls_Manager::HIDDEN,
				'description' => __( 'E.g [field id="term"]', 'pafe' ),
			]
		);

		$repeater = new \Elementor\Repeater();

		$repeater->add_control(
			'submit_post_taxonomy',
			[
				'label' => __( 'Taxonomy', 'pafe' ),
				'type' => \Elementor\Controls_Manager::SELECT,
				'options' => $taxonomy_array,
				'default' => 'category-post',
			]
		);

		$repeater->add_control(
			'submit_post_terms_slug',
			[
				'label' => __( 'Term slug', 'pafe' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'description' => 'E.g news',
			]
		);

		$repeater->add_control(
			'submit_post_terms_field_id',
			[
				'label' => __( 'Terms Select Field ID', 'pafe' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'description' => __( 'E.g [field id="term"]', 'pafe' ),
			]
		);

		$this->add_control(
			'submit_post_terms_list',
			array(
				'type'    => Elementor\Controls_Manager::REPEATER,
				'fields'  => array_values( $repeater->get_controls() ),
				'title_field' => 'term',
				'label' => __( 'Terms', 'pafe' ),
			)
		);

		$this->add_control(
			'submit_post_status',
			[
				'label' => __( 'Post Status', 'pafe' ),
				'type' => \Elementor\Controls_Manager::SELECT,
				'options' => [
					'publish' => __( 'Publish', 'pafe' ),
					'pending' => __( 'Pending', 'pafe' ),
				],
				'default' => 'publish',
			]
		);

		$this->add_control(
			'submit_post_url_shortcode',
			[
				'label' => __( 'Post URL shortcode', 'pafe' ),
				'type' => \Elementor\Controls_Manager::RAW_HTML,
				'classes' => 'forms-field-shortcode',
				'raw' => '<input class="elementor-form-field-shortcode" value="[post_url]" readonly />',
			]
		);

		$this->add_control(
			'submit_post_title',
			[
				'label' => __( 'Title Field ID', 'pafe' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'description' => __( 'E.g [field id="title"]', 'pafe' ),
			]
		);

		$this->add_control(
			'submit_post_content',
			[
				'label' => __( 'Content Field ID', 'pafe' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'description' => __( 'E.g [field id="content"]', 'pafe' ),
			]
		);

		$this->add_control(
			'submit_post_featured_image',
			[
				'label' => __( 'Featured Image Field ID', 'pafe' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'description' => __( 'E.g [field id="featured_image_upload"]', 'pafe' ),
			]
		);

		$this->add_control(
			'submit_post_custom_field_source',
			[
				'label' => __( 'Custom Fields', 'pafe' ),
				'type' => \Elementor\Controls_Manager::SELECT,
				'options' => [
					'post_custom_field' => __( 'Post Custom Field', 'pafe' ),
					'acf_field' => __( 'ACF Field', 'pafe' ),
				],
				'default' => 'post_custom_field',
			]
		);

		$repeater = new \Elementor\Repeater();

		$repeater->add_control(
			'submit_post_custom_field',
			[
				'label' => __( 'Custom Field Slug', 'pafe' ),
				'label_block' => true,
				'type' => \Elementor\Controls_Manager::TEXT,
				'description' => __( 'E.g custom_field_slug', 'pafe' ),
			]
		);

		$repeater->add_control(
			'submit_post_custom_field_id',
			[
				'label' => __( 'Field ID', 'pafe' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'description' => __( 'E.g [field id="addition"]', 'pafe' ),
			]
		);

		$this->add_control(
			'submit_post_custom_fields_list',
			array(
				'type'    => Elementor\Controls_Manager::REPEATER,
				'fields'  => array_values( $repeater->get_controls() ),
				'title_field' => '{{{ submit_post_custom_field }}} - {{{ submit_post_custom_field_id }}}',
			)
		);

		$this->end_controls_section();

		$this->start_controls_section(
			'section_stripe',
			[
				'label' => __( 'Stripe Payment', 'pafe' ),
			]
		);

		$this->add_control(
			'pafe_stripe_enable',
			[
				'label' => __( 'Enable', 'pafe' ),
				'type' => \Elementor\Controls_Manager::SWITCHER,
				'default' => '',
				'label_on' => 'Yes',
				'label_off' => 'No',
				'return_value' => 'yes',
			]
		);

		$this->add_control(
			'pafe_stripe_currency',
			[
				'label' => __( 'Currency', 'pafe' ),
				'type' => \Elementor\Controls_Manager::SELECT,
				'options' => [
					'USD' => 'USD',
					'AED' => 'AED',
					'AFN' => 'AFN',
					'ALL' => 'ALL',
					'AMD' => 'AMD',
					'ANG' => 'ANG',
					'AOA' => 'AOA',
					'ARS' => 'ARS',
					'AUD' => 'AUD',
					'AWG' => 'AWG',
					'AZN' => 'AZN',
					'BAM' => 'BAM',
					'BBD' => 'BBD',
					'BDT' => 'BDT',
					'BGN' => 'BGN',
					'BIF' => 'BIF',
					'BMD' => 'BMD',
					'BND' => 'BND',
					'BOB' => 'BOB',
					'BRL' => 'BRL',
					'BSD' => 'BSD',
					'BWP' => 'BWP',
					'BZD' => 'BZD',
					'CAD' => 'CAD',
					'CDF' => 'CDF',
					'CHF' => 'CHF',
					'CLP' => 'CLP',
					'CNY' => 'CNY',
					'COP' => 'COP',
					'CRC' => 'CRC',
					'CVE' => 'CVE',
					'CZK' => 'CZK',
					'DJF' => 'DJF',
					'DKK' => 'DKK',
					'DOP' => 'DOP',
					'DZD' => 'DZD',
					'EGP' => 'EGP',
					'ETB' => 'ETB',
					'EUR' => 'EUR',
					'FJD' => 'FJD',
					'FKP' => 'FKP',
					'GBP' => 'GBP',
					'GEL' => 'GEL',
					'GIP' => 'GIP',
					'GMD' => 'GMD',
					'GNF' => 'GNF',
					'GTQ' => 'GTQ',
					'GYD' => 'GYD',
					'HKD' => 'HKD',
					'HNL' => 'HNL',
					'HRK' => 'HRK',
					'HTG' => 'HTG',
					'HUF' => 'HUF',
					'IDR' => 'IDR',
					'ILS' => 'ILS',
					'INR' => 'INR',
					'ISK' => 'ISK',
					'JMD' => 'JMD',
					'JPY' => 'JPY',
					'KES' => 'KES',
					'KGS' => 'KGS',
					'KHR' => 'KHR',
					'KMF' => 'KMF',
					'KRW' => 'KRW',
					'KYD' => 'KYD',
					'KZT' => 'KZT',
					'LAK' => 'LAK',
					'LBP' => 'LBP',
					'LKR' => 'LKR',
					'LRD' => 'LRD',
					'LSL' => 'LSL',
					'MAD' => 'MAD',
					'MDL' => 'MDL',
					'MGA' => 'MGA',
					'MKD' => 'MKD',
					'MMK' => 'MMK',
					'MNT' => 'MNT',
					'MOP' => 'MOP',
					'MRO' => 'MRO',
					'MUR' => 'MUR',
					'MVR' => 'MVR',
					'MWK' => 'MWK',
					'MXN' => 'MXN',
					'MYR' => 'MYR',
					'MZN' => 'MZN',
					'NAD' => 'NAD',
					'NGN' => 'NGN',
					'NIO' => 'NIO',
					'NOK' => 'NOK',
					'NPR' => 'NPR',
					'NZD' => 'NZD',
					'PAB' => 'PAB',
					'PEN' => 'PEN',
					'PGK' => 'PGK',
					'PHP' => 'PHP',
					'PKR' => 'PKR',
					'PLN' => 'PLN',
					'PYG' => 'PYG',
					'QAR' => 'QAR',
					'RON' => 'RON',
					'RSD' => 'RSD',
					'RUB' => 'RUB',
					'RWF' => 'RWF',
					'SAR' => 'SAR',
					'SBD' => 'SBD',
					'SCR' => 'SCR',
					'SEK' => 'SEK',
					'SGD' => 'SGD',
					'SHP' => 'SHP',
					'SLL' => 'SLL',
					'SOS' => 'SOS',
					'SRD' => 'SRD',
					'STD' => 'STD',
					'SZL' => 'SZL',
					'THB' => 'THB',
					'TJS' => 'TJS',
					'TOP' => 'TOP',
					'TRY' => 'TRY',
					'TTD' => 'TTD',
					'TWD' => 'TWD',
					'TZS' => 'TZS',
					'UAH' => 'UAH',
					'UGX' => 'UGX',
					'UYU' => 'UYU',
					'UZS' => 'UZS',
					'VND' => 'VND',
					'VUV' => 'VUV',
					'WST' => 'WST',
					'XAF' => 'XAF',
					'XCD' => 'XCD',
					'XOF' => 'XOF',
					'XPF' => 'XPF',
					'YER' => 'YER',
					'ZAR' => 'ZAR',
					'ZMW' => 'ZMW',
				],
				'default' => 'USD',
				'condition' => [
					'pafe_stripe_enable' => 'yes',
				],
			]
		);

		$this->add_control(
			'pafe_stripe_amount',
			[
				'label' => __( 'Amount', 'pafe' ),
				'type' => \Elementor\Controls_Manager::NUMBER,
				'description' => __( 'E.g 100, 1000', 'pafe' ),
				'condition' => [
					'pafe_stripe_enable' => 'yes',
					'pafe_stripe_amount_field_enable!' => 'yes',
				],
			]
		);

		$this->add_control(
			'pafe_stripe_amount_field_enable',
			[
				'label' => __( 'Amount Field Enable', 'pafe' ),
				'type' => \Elementor\Controls_Manager::SWITCHER,
				'default' => '',
				'label_on' => 'Yes',
				'label_off' => 'No',
				'return_value' => 'yes',
				'condition' => [
					'pafe_stripe_enable' => 'yes',
				],
			]
		);

		$this->add_control(
			'pafe_stripe_amount_field',
			[
				'label' => __( 'Amount Field', 'pafe' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'description' => __( 'E.g [field id="amount"]', 'pafe' ),
				'condition' => [
					'pafe_stripe_enable' => 'yes',
					'pafe_stripe_amount_field_enable' => 'yes',
				],
			]
		);

		$this->add_control(
			'pafe_stripe_customer_info_field',
			[
				'label' => __( 'Customer Info Field', 'pafe' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'description' => __( 'E.g [field id="email"]', 'pafe' ),
				'condition' => [
					'pafe_stripe_enable' => 'yes',
				],
			]
		);

		$this->add_control(
			'pafe_stripe_payment_note',
			[
				'label' => __( 'Payment ID shortcode', 'pafe' ),
				'type' => \Elementor\Controls_Manager::RAW_HTML,
				'classes' => 'forms-field-shortcode',
				'raw' => '<input class="elementor-form-field-shortcode" value="[payment_id]" readonly />',
				'condition' => [
					'pafe_stripe_enable' => 'yes',
				],
			]
		);

		$this->add_control(
			'pafe_stripe_status_note',
			[
				'label' => __( 'Payment Status shortcode', 'pafe' ),
				'type' => \Elementor\Controls_Manager::RAW_HTML,
				'classes' => 'forms-field-shortcode',
				'raw' => '<input class="elementor-form-field-shortcode" value="[payment_status]" readonly />',
				'condition' => [
					'pafe_stripe_enable' => 'yes',
				],
			]
		);

		$this->add_control(
			'pafe_stripe_status_succeeded',
			[
				'label' => __( 'Succeeded Status', 'pafe' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'default' => __( 'succeeded', 'pafe' ),
				'condition' => [
					'pafe_stripe_enable' => 'yes',
				],
			]
		);

		$this->add_control(
			'pafe_stripe_status_pending',
			[
				'label' => __( 'Pending Status', 'pafe' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'default' => __( 'pending', 'pafe' ),
				'condition' => [
					'pafe_stripe_enable' => 'yes',
				],
			]
		);

		$this->add_control(
			'pafe_stripe_status_failed',
			[
				'label' => __( 'Failed Status', 'pafe' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'default' => __( 'failed', 'pafe' ),
				'condition' => [
					'pafe_stripe_enable' => 'yes',
				],
			]
		);

		$this->add_control(
			'pafe_stripe_message_succeeded',
			[
				'label' => __( 'Succeeded Message', 'pafe' ),
				'label_block' => true,
				'type' => \Elementor\Controls_Manager::TEXT,
				'default' => __( 'Payment success', 'pafe' ),
				'condition' => [
					'pafe_stripe_enable' => 'yes',
				],
			]
		);

		$this->add_control(
			'pafe_stripe_message_pending',
			[
				'label' => __( 'Pending Message', 'pafe' ),
				'label_block' => true,
				'type' => \Elementor\Controls_Manager::TEXT,
				'default' => __( 'Payment pending', 'pafe' ),
				'condition' => [
					'pafe_stripe_enable' => 'yes',
				],
			]
		);

		$this->add_control(
			'pafe_stripe_message_failed',
			[
				'label' => __( 'Failed Message', 'pafe' ),
				'label_block' => true,
				'type' => \Elementor\Controls_Manager::TEXT,
				'default' => __( 'Payment failed', 'pafe' ),
				'condition' => [
					'pafe_stripe_enable' => 'yes',
				],
			]
		);

		$this->end_controls_section();

		$this->start_controls_section(
			'section_recaptcha',
			[
				'label' => __( 'reCAPTCHA V3', 'pafe' ),
			]
		);

		$this->add_control(
			'pafe_recaptcha_enable',
			[
				'label' => __( 'Enable', 'pafe' ),
				'type' => \Elementor\Controls_Manager::SWITCHER,
				'description' => __('To use reCAPTCHA, you need to add the Site Key and Secret Key in Dashboard > Piotnet Addons > reCAPTCHA.'),
				'default' => '',
				'label_on' => 'Yes',
				'label_off' => 'No',
				'return_value' => 'yes',
			]
		);

		$this->end_controls_section();

		$this->start_controls_section(
			'section_email',
			[
				'label' => 'Email',
				'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
				'condition' => [
					'submit_actions' => 'email',
				],
			]
		);

		$this->add_control(
			'email_to',
			[
				'label' => __( 'To', 'elementor-pro' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'default' => get_option( 'admin_email' ),
				'placeholder' => get_option( 'admin_email' ),
				'label_block' => true,
				'title' => __( 'Separate emails with commas', 'elementor-pro' ),
				'render_type' => 'none',
			]
		);

		/* translators: %s: Site title. */
		$default_message = sprintf( __( 'New message from "%s"', 'elementor-pro' ), get_option( 'blogname' ) );

		$this->add_control(
			'email_subject',
			[
				'label' => __( 'Subject', 'elementor-pro' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'default' => $default_message,
				'placeholder' => $default_message,
				'label_block' => true,
				'render_type' => 'none',
			]
		);

		$this->add_control(
			'email_content',
			[
				'label' => __( 'Message', 'elementor-pro' ),
				'type' => \Elementor\Controls_Manager::TEXTAREA,
				'default' => '[all-fields]',
				'placeholder' => '[all-fields]',
				'description' => __( 'By default, all form fields are sent via shortcode: <code>[all-fields]</code>. Want to customize sent fields? Copy the shortcode that appears inside the field and paste it above.', 'elementor-pro' ),
				'label_block' => true,
				'render_type' => 'none',
			]
		);

		// $site_domain = Utils::get_site_domain();

		$site_domain = get_option('siteurl'); 
		$site_domain = str_replace('http://', '', $site_domain);
		$site_domain = str_replace('https://', '', $site_domain);
		$site_domain = str_replace('www', '', $site_domain);

		$this->add_control(
			'email_from',
			[
				'label' => __( 'From Email', 'elementor-pro' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'default' => 'email@' . $site_domain,
				'render_type' => 'none',
			]
		);

		$this->add_control(
			'email_from_name',
			[
				'label' => __( 'From Name', 'elementor-pro' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'default' => get_bloginfo( 'name' ),
				'render_type' => 'none',
			]
		);

		$this->add_control(
			'email_reply_to',
			[
				'label' => __( 'Reply-To', 'elementor-pro' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'options' => [
					'' => '',
				],
				'render_type' => 'none',
			]
		);

		$this->add_control(
			'email_to_cc',
			[
				'label' => __( 'Cc', 'elementor-pro' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'default' => '',
				'title' => __( 'Separate emails with commas', 'elementor-pro' ),
				'render_type' => 'none',
			]
		);

		$this->add_control(
			'email_to_bcc',
			[
				'label' => __( 'Bcc', 'elementor-pro' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'default' => '',
				'title' => __( 'Separate emails with commas', 'elementor-pro' ),
				'render_type' => 'none',
			]
		);

		$this->add_control(
			'form_metadata',
			[
				'label' => __( 'Meta Data', 'elementor-pro' ),
				'type' => \Elementor\Controls_Manager::SELECT2,
				'multiple' => true,
				'label_block' => true,
				'separator' => 'before',
				'default' => [
					'date',
					'time',
					'page_url',
					'user_agent',
					'remote_ip',
				],
				'options' => [
					'date' => __( 'Date', 'elementor-pro' ),
					'time' => __( 'Time', 'elementor-pro' ),
					'page_url' => __( 'Page URL', 'elementor-pro' ),
					'user_agent' => __( 'User Agent', 'elementor-pro' ),
					'remote_ip' => __( 'Remote IP', 'elementor-pro' ),
				],
				'render_type' => 'none',
			]
		);

		// $this->add_control(
		// 	'email_content_type',
		// 	[
		// 		'label' => __( 'Send As', 'elementor-pro' ),
		// 		'type' => \Elementor\Controls_Manager::SELECT,
		// 		'default' => 'html',
		// 		'render_type' => 'none',
		// 		'options' => [
		// 			'html' => __( 'HTML', 'elementor-pro' ),
		// 			'plain' => __( 'Plain', 'elementor-pro' ),
		// 		],
		// 	]
		// );

		$this->end_controls_section();

		$this->start_controls_section(
			'section_email_2',
			[
				'label' => 'Email 2',
				'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
				'condition' => [
					'submit_actions' => 'email2',
				],
			]
		);

		$this->add_control(
			'email_to_2',
			[
				'label' => __( 'To', 'elementor-pro' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'default' => get_option( 'admin_email' ),
				'placeholder' => get_option( 'admin_email' ),
				'label_block' => true,
				'title' => __( 'Separate emails with commas', 'elementor-pro' ),
				'render_type' => 'none',
			]
		);

		/* translators: %s: Site title. */
		$default_message = sprintf( __( 'New message from "%s"', 'elementor-pro' ), get_option( 'blogname' ) );

		$this->add_control(
			'email_subject_2',
			[
				'label' => __( 'Subject', 'elementor-pro' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'default' => $default_message,
				'placeholder' => $default_message,
				'label_block' => true,
				'render_type' => 'none',
			]
		);

		$this->add_control(
			'email_content_2',
			[
				'label' => __( 'Message', 'elementor-pro' ),
				'type' => \Elementor\Controls_Manager::TEXTAREA,
				'default' => '[all-fields]',
				'placeholder' => '[all-fields]',
				'description' => __( 'By default, all form fields are sent via shortcode: <code>[all-fields]</code>. Want to customize sent fields? Copy the shortcode that appears inside the field and paste it above.', 'elementor-pro' ),
				'label_block' => true,
				'render_type' => 'none',
			]
		);

		$this->add_control(
			'email_from_2',
			[
				'label' => __( 'From Email', 'elementor-pro' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'default' => 'email@' . $site_domain,
				'render_type' => 'none',
			]
		);

		$this->add_control(
			'email_from_name_2',
			[
				'label' => __( 'From Name', 'elementor-pro' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'default' => get_bloginfo( 'name' ),
				'render_type' => 'none',
			]
		);

		$this->add_control(
			'email_reply_to_2',
			[
				'label' => __( 'Reply-To', 'elementor-pro' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'options' => [
					'' => '',
				],
				'render_type' => 'none',
			]
		);

		$this->add_control(
			'email_to_cc_2',
			[
				'label' => __( 'Cc', 'elementor-pro' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'default' => '',
				'title' => __( 'Separate emails with commas', 'elementor-pro' ),
				'render_type' => 'none',
			]
		);

		$this->add_control(
			'email_to_bcc_2',
			[
				'label' => __( 'Bcc', 'elementor-pro' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'default' => '',
				'title' => __( 'Separate emails with commas', 'elementor-pro' ),
				'render_type' => 'none',
			]
		);

		$this->end_controls_section();

		$this->start_controls_section(
			'section_redirect',
			[
				'label' => __( 'Redirect', 'elementor-pro' ),
				'condition' => [
					'submit_actions' => 'redirect',
				],
			]
		);

		$this->add_control(
			'redirect_to',
			[
				'label' => __( 'Redirect To', 'elementor-pro' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'placeholder' => __( 'https://your-link.com', 'elementor-pro' ),
				'label_block' => true,
				'render_type' => 'none',
				'classes' => 'elementor-control-direction-ltr',
			]
		);

		$this->end_controls_section();

		if ( defined('ELEMENTOR_PRO_VERSION') ) {
		    if ( version_compare( ELEMENTOR_PRO_VERSION, '2.4.0', '>=' ) ) {
		    	$this->start_controls_section(
					'section_popup',
					[
						'label' => __( 'Popup', 'elementor-pro' ),
						'condition' => [
							'submit_actions' => 'popup',
						],
					]
				);

				$this->add_control(
					'popup_action',
					[
						'label' => __( 'Action', 'elementor-pro' ),
						'type' => \Elementor\Controls_Manager::SELECT,
						'options' => [
							'' => __( 'Choose', 'elementor-pro' ),
							'open' => __( 'Open Popup', 'elementor-pro' ),
							'close' => __( 'Close Popup', 'elementor-pro' ),
						],
					]
				);

				$this->add_control(
					'popup_action_popup_id',
					[
						'label' => __( 'Popup', 'elementor-pro' ),
						'type' => \ElementorPro\Modules\QueryControl\Module::QUERY_CONTROL_ID,
						'label_block' => true,
						'filter_type' => 'popup_templates',
						'condition' => [
							'popup_action' => ['open','close'],
						],
					]
				);

				$this->end_controls_section();

				$this->start_controls_section(
					'section_popup_open',
					[
						'label' => __( 'Open Popup', 'elementor-pro' ),
						'condition' => [
							'submit_actions' => 'open_popup',
						],
					]
				);

				$this->add_control(
					'popup_action_popup_id_open',
					[
						'label' => __( 'Popup', 'elementor-pro' ),
						'type' => \ElementorPro\Modules\QueryControl\Module::QUERY_CONTROL_ID,
						'label_block' => true,
						'filter_type' => 'popup_templates',
					]
				);

				$this->end_controls_section();

				$this->start_controls_section(
					'section_popup_close',
					[
						'label' => __( 'Close Popup', 'elementor-pro' ),
						'condition' => [
							'submit_actions' => 'close_popup',
						],
					]
				);

				$this->add_control(
					'popup_action_popup_id_close',
					[
						'label' => __( 'Popup', 'elementor-pro' ),
						'type' => \ElementorPro\Modules\QueryControl\Module::QUERY_CONTROL_ID,
						'label_block' => true,
						'filter_type' => 'popup_templates',
					]
				);

				$this->end_controls_section();
	    	}
    	}

    	$this->start_controls_section(
			'section_webhook',
			[
				'label' => __( 'Webhook', 'elementor-pro' ),
				'condition' => [
					'submit_actions' => 'webhook',
				],
			]
		);

		$this->add_control(
			'webhooks',
			[
				'label' => __( 'Webhook URL', 'elementor-pro' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'placeholder' => __( 'https://your-webhook-url.com', 'elementor-pro' ),
				'label_block' => true,
				'separator' => 'before',
				'description' => __( 'Enter the integration URL (like Zapier) that will receive the form\'s submitted data.', 'elementor-pro' ),
				'render_type' => 'none',
			]
		);

		$this->add_control(
			'webhooks_advanced_data',
			[
				'label' => __( 'Advanced Data', 'elementor-pro' ),
				'type' => \Elementor\Controls_Manager::SWITCHER,
				'default' => 'no',
				'render_type' => 'none',
			]
		);

		$this->end_controls_section();

		$this->start_controls_section(
			'section_form_options',
			[
				'label' => __( 'Custom Messages', 'elementor-pro' ),
				'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);

		$this->add_control(
			'success_message',
			[
				'label' => __( 'Success Message', 'elementor-pro' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'default' => __( 'The form was sent successfully.', 'elementor-pro' ),
				'placeholder' => __( 'The form was sent successfully.', 'elementor-pro' ),
				'label_block' => true,
				'render_type' => 'none',
			]
		);

		$this->add_control(
			'error_message',
			[
				'label' => __( 'Error Message', 'elementor-pro' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'default' => __( 'An error occured.', 'elementor-pro' ),
				'placeholder' => __( 'An error occured.', 'elementor-pro' ),
				'label_block' => true,
				'render_type' => 'none',
			]
		);

		$this->add_control(
			'required_field_message',
			[
				'label' => __( 'Required Message', 'elementor-pro' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'default' => __( 'This field is required.', 'elementor-pro' ),
				'placeholder' => __( 'This field is required.', 'elementor-pro' ),
				'label_block' => true,
				'render_type' => 'none',
			]
		);

		$this->add_control(
			'invalid_message',
			[
				'label' => __( 'Invalid Message', 'elementor-pro' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'default' => __( "There's something wrong. The form is invalid.", "elementor-pro" ),
				'placeholder' => __( "There's something wrong. The form is invalid.", "elementor-pro" ),
				'label_block' => true,
				'render_type' => 'none',
			]
		);

		$this->end_controls_section();

		$this->start_controls_section(
			'section_conditional_logic',
			[
				'label' => __( 'Conditional Logic', 'pafe' ),
				'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);

		$this->add_control(
			'pafe_conditional_logic_form_enable',
			[
				'label' => __( 'Enable', 'pafe' ),
				'type' => \Elementor\Controls_Manager::SWITCHER,
				'default' => '',
				'description' => __( 'This feature only works on the frontend.', 'pafe' ),
				'label_on' => 'Yes',
				'label_off' => 'No',
				'return_value' => 'yes',
			]
		);

		$this->add_control(
			'pafe_conditional_logic_form_speed',
			[
				'label' => __( 'Speed', 'pafe' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'description' => __( 'E.g 100, 1000, slow, fast' ),
				'default' => 400,
				'condition' => [
					'pafe_conditional_logic_form_enable' => 'yes',
				],
			]
		);

		$this->add_control(
			'pafe_conditional_logic_form_easing',
			[
				'label' => __( 'Easing', 'pafe' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'description' => __( 'E.g swing, linear' ),
				'default' => 'swing',
				'condition' => [
					'pafe_conditional_logic_form_enable' => 'yes',
				],
			]
		);

		$repeater = new \Elementor\Repeater();

		$repeater->add_control(
			'pafe_conditional_logic_form_if',
			[
				'label' => __( 'Show this submit If', 'pafe' ),
				'label_block' => true,
				'type' => \Elementor\Controls_Manager::TEXT,
				'placeholder' => __( 'Field ID', 'pafe' ),
			]
		);

		$repeater->add_control(
			'pafe_conditional_logic_form_comparison_operators',
			[
				'label' => __( 'Comparison Operators', 'pafe' ),
				'type' => \Elementor\Controls_Manager::SELECT,
				'label_block' => true,
				'options' => [
					'not-empty' => __( 'not empty', 'pafe' ),
					'empty' => __( 'empty', 'pafe' ),
					'=' => __( 'equals', 'pafe' ),
					'!=' => __( 'not equals', 'pafe' ),
					'>' => __( '>', 'pafe' ),
					'>=' => __( '>=', 'pafe' ),
					'<' => __( '<', 'pafe' ),
					'<=' => __( '<=', 'pafe' ),
					'checked' => __( 'checked', 'pafe' ),
					'unchecked' => __( 'unchecked', 'pafe' ),
				],
			]
		);

		$repeater->add_control(
			'pafe_conditional_logic_form_type',
			[
				'label' => __( 'Type Value', 'pafe' ),
				'type' => \Elementor\Controls_Manager::SELECT,
				'label_block' => true,
				'options' => [
					'string' => __( 'String', 'pafe' ),
					'number' => __( 'Number', 'pafe' ),
				],
				'default' => 'string',
				'condition' => [
					'pafe_conditional_logic_form_comparison_operators' => ['=','!=','>','>=','<','<='],
				],
			]
		);

		$repeater->add_control(
			'pafe_conditional_logic_form_value',
			[
				'label' => __( 'Value', 'pafe' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'label_block' => true,
				'placeholder' => __( '50', 'pafe' ),
				'condition' => [
					'pafe_conditional_logic_form_comparison_operators' => ['=','!=','>','>=','<','<='],
				],
			]
		);

		$repeater->add_control(
			'pafe_conditional_logic_form_and_or_operators',
			[
				'label' => __( 'OR, AND Operators', 'pafe' ),
				'type' => \Elementor\Controls_Manager::SELECT,
				'label_block' => true,
				'options' => [
					'or' => __( 'OR', 'pafe' ),
					'and' => __( 'AND', 'pafe' ),
				],
				'default' => 'or',
			]
		);

		$this->add_control(
			'pafe_conditional_logic_form_list',
			array(
				'type'    => Elementor\Controls_Manager::REPEATER,
				'fields'  => array_values( $repeater->get_controls() ),
				'title_field' => '{{{ pafe_conditional_logic_form_if }}} {{{ pafe_conditional_logic_form_comparison_operators }}} {{{ pafe_conditional_logic_form_value }}}',
			)
		);

		$this->end_controls_section();

		$this->start_controls_section(
			'section_progress_bar_style',
			[
				'label' => __( 'Progress Bar', 'pafe' ),
				'tab' => \Elementor\Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name' => 'typography_step_number',
				'label' => 'Step Number',
				'scheme' => \Elementor\Scheme_Typography::TYPOGRAPHY_4,
				'selector' => '{{WRAPPER}} .pafe-multi-step-form__progressbar-item-step',
			]
		);

		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name' => 'typography_step_title',
				'label' => 'Step Title',
				'scheme' => \Elementor\Scheme_Typography::TYPOGRAPHY_4,
				'selector' => '{{WRAPPER}} .pafe-multi-step-form__progressbar-item-title',
			]
		);

		$this->add_control(
			'progress_bar_step_title_hide_desktop',
			[
				'label' => __( 'Hide Step Title On Desktop', 'elementor' ),
				'type' => \Elementor\Controls_Manager::SWITCHER,
				'default' => '',
				'label_on' => __( 'Hide', 'elementor' ),
				'label_off' => __( 'Show', 'elementor' ),
				'return_value' => 'elementor-hidden-desktop',
			]
		);

		$this->add_control(
			'progress_bar_step_title_hide_tablet',
			[
				'label' => __( 'Hide Step Title On Tablet', 'elementor' ),
				'type' =>\Elementor\ Controls_Manager::SWITCHER,
				'default' => '',
				'label_on' => __( 'Hide', 'elementor' ),
				'label_off' => __( 'Show', 'elementor' ),
				'return_value' => 'elementor-hidden-tablet',
			]
		);

		$this->add_control(
			'progress_bar_step_title_hide_mobile',
			[
				'label' => __( 'Hide Step Title On Mobile', 'elementor' ),
				'type' => \Elementor\Controls_Manager::SWITCHER,
				'default' => '',
				'label_on' => __( 'Hide', 'elementor' ),
				'label_off' => __( 'Show', 'elementor' ),
				'return_value' => 'elementor-hidden-phone',
			]
		);

		$this->add_responsive_control(
			'progress_bar_step_width',
			[
				'label' => __( 'Step Number Width', 'pafe' ),
				'type' => \Elementor\Controls_Manager::SLIDER,
				'size_units' => [ 'px' ],
				'range' => [
					'px' => [
						'min' => 1,
						'max' => 50,
					],
				],
				'default' => [
					'unit' => 'px',
					'size' => 20,
				],
				'selectors' => [
					'{{WRAPPER}} .pafe-multi-step-form__progressbar-item-step' => 'width: {{SIZE}}{{UNIT}}; line-height: {{SIZE}}{{UNIT}};',
				],
			]
		);

		$this->add_control(
			'progress_bar_border_radius',
			[
				'label' => __( 'Border Radius', 'elementor' ),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%' ],
				'selectors' => [
					'{{WRAPPER}} .pafe-multi-step-form__progressbar-item-step' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		$this->start_controls_tabs( 'tabs_progress_bar_style' );

		$this->start_controls_tab(
			'tab_progress_bar_normal',
			[
				'label' => __( 'Normal', 'elementor' ),
			]
		);

		$this->add_control(
			'progress_bar_step_number_color',
			[
				'label' => __( 'Step Number Color', 'elementor' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'default' => '',
				'selectors' => [
					'{{WRAPPER}} .pafe-multi-step-form__progressbar-item-step' => 'color: {{VALUE}};',
				],
			]
		);

		$this->add_control(
			'progress_bar_step_number_background_color',
			[
				'label' => __( 'Background Color', 'elementor' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'default' => '#ececec',
				'selectors' => [
					'{{WRAPPER}} .pafe-multi-step-form__progressbar-item-step' => 'background-color: {{VALUE}};',
					'{{WRAPPER}} .pafe-multi-step-form__progressbar-item-step-number::after' => 'background-color: {{VALUE}};',
				],
			]
		);

		$this->end_controls_tab();

		$this->start_controls_tab(
			'tab_progress_bar_active',
			[
				'label' => __( 'Active', 'pafe' ),
			]
		);

		$this->add_control(
			'progress_bar_step_number_color_active',
			[
				'label' => __( 'Step Number Color', 'elementor' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'default' => '',
				'selectors' => [
					'{{WRAPPER}} .active .pafe-multi-step-form__progressbar-item-step' => 'color: {{VALUE}};',
				],
			]
		);

		$this->add_control(
			'progress_bar_step_number_background_color_active',
			[
				'label' => __( 'Background Color', 'elementor' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'default' => '#27AE60',
				'selectors' => [
					'{{WRAPPER}} .active .pafe-multi-step-form__progressbar-item-step' => 'background-color: {{VALUE}};',
					'{{WRAPPER}} .pafe-multi-step-form__progressbar-item.active .pafe-multi-step-form__progressbar-item-step-number::after' => 'background-color: {{VALUE}};',
				],
			]
		);

		$this->end_controls_tab();

		$this->end_controls_tabs();

		$this->end_controls_section();

		$this->start_controls_section(
			'section_style',
			[
				'label' => __( 'Button', 'elementor' ),
				'tab' => \Elementor\Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name' => 'typography',
				'scheme' => \Elementor\Scheme_Typography::TYPOGRAPHY_4,
				'selector' => '{{WRAPPER}} a.elementor-button, {{WRAPPER}} .elementor-button',
			]
		);

		$this->start_controls_tabs( 'tabs_button_style' );

		$this->start_controls_tab(
			'tab_button_normal',
			[
				'label' => __( 'Normal', 'elementor' ),
			]
		);

		$this->add_control(
			'button_text_color',
			[
				'label' => __( 'Text Color', 'elementor' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'default' => '',
				'selectors' => [
					'{{WRAPPER}} a.elementor-button, {{WRAPPER}} .elementor-button' => 'color: {{VALUE}};',
				],
			]
		);

		$this->add_control(
			'background_color',
			[
				'label' => __( 'Background Color', 'elementor' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'scheme' => [
					'type' => \Elementor\Scheme_Color::get_type(),
					'value' => \Elementor\Scheme_Color::COLOR_4,
				],
				'selectors' => [
					'{{WRAPPER}} a.elementor-button, {{WRAPPER}} .elementor-button' => 'background-color: {{VALUE}};',
				],
			]
		);

		$this->end_controls_tab();

		$this->start_controls_tab(
			'tab_button_hover',
			[
				'label' => __( 'Hover', 'elementor' ),
			]
		);

		$this->add_control(
			'hover_color',
			[
				'label' => __( 'Text Color', 'elementor' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} a.elementor-button:hover, {{WRAPPER}} .elementor-button:hover, {{WRAPPER}} a.elementor-button:focus, {{WRAPPER}} .elementor-button:focus' => 'color: {{VALUE}};',
				],
			]
		);

		$this->add_control(
			'button_background_hover_color',
			[
				'label' => __( 'Background Color', 'elementor' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} a.elementor-button:hover, {{WRAPPER}} .elementor-button:hover, {{WRAPPER}} a.elementor-button:focus, {{WRAPPER}} .elementor-button:focus' => 'background-color: {{VALUE}};',
				],
			]
		);

		$this->add_control(
			'button_hover_border_color',
			[
				'label' => __( 'Border Color', 'elementor' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'condition' => [
					'border_border!' => '',
				],
				'selectors' => [
					'{{WRAPPER}} a.elementor-button:hover, {{WRAPPER}} .elementor-button:hover, {{WRAPPER}} a.elementor-button:focus, {{WRAPPER}} .elementor-button:focus' => 'border-color: {{VALUE}};',
				],
			]
		);

		$this->add_control(
			'hover_animation',
			[
				'label' => __( 'Hover Animation', 'elementor' ),
				'type' => \Elementor\Controls_Manager::HOVER_ANIMATION,
			]
		);

		$this->end_controls_tab();

		$this->end_controls_tabs();

		$this->add_group_control(
			\Elementor\Group_Control_Border::get_type(),
			[
				'name' => 'border',
				'selector' => '{{WRAPPER}} .elementor-button',
				'separator' => 'before',
			]
		);

		$this->add_control(
			'border_radius',
			[
				'label' => __( 'Border Radius', 'elementor' ),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%' ],
				'selectors' => [
					'{{WRAPPER}} a.elementor-button, {{WRAPPER}} .elementor-button' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		$this->add_group_control(
			\Elementor\Group_Control_Box_Shadow::get_type(),
			[
				'name' => 'button_box_shadow',
				'selector' => '{{WRAPPER}} .elementor-button',
			]
		);

		$this->add_responsive_control(
			'text_padding',
			[
				'label' => __( 'Padding', 'elementor' ),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', 'em', '%' ],
				'selectors' => [
					'{{WRAPPER}} a.elementor-button, {{WRAPPER}} .elementor-button' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
				'separator' => 'before',
			]
		);

		$this->end_controls_section();

		$this->start_controls_section(
			'section_messages_style',
			[
				'label' => __( 'Messages', 'elementor-pro' ),
				'tab' => \Elementor\Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name' => 'message_typography',
				'scheme' => \Elementor\Scheme_Typography::TYPOGRAPHY_3,
				'selector' => '{{WRAPPER}} .elementor-message',
			]
		);

		$this->add_control(
			'success_message_color',
			[
				'label' => __( 'Success Message Color', 'elementor-pro' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .elementor-message.elementor-message-success' => 'color: {{COLOR}};',
				],
			]
		);

		$this->add_control(
			'error_message_color',
			[
				'label' => __( 'Error Message Color', 'elementor-pro' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .elementor-message.elementor-message-danger' => 'color: {{COLOR}};',
				],
			]
		);

		$this->add_control(
			'inline_message_color',
			[
				'label' => __( 'Inline Message Color', 'elementor-pro' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .elementor-message.elementor-help-inline' => 'color: {{COLOR}};',
				],
			]
		);

		$this->end_controls_section();
	}

	public function create_popup_url($id,$action) {
		if ( defined('ELEMENTOR_PRO_VERSION') ) {
		    if ( version_compare( ELEMENTOR_PRO_VERSION, '2.4.0', '>=' ) ) {
		    	if($action == 'open' || $action == 'toggle') {
		    		$link_action_url = \ElementorPro\Modules\LinkActions\Module::create_action_url( 'popup:open', [
						'id' => $id,
						'toggle' => 'toggle' === $action,
					] );
		    	} else {
		    		$link_action_url = \ElementorPro\Modules\LinkActions\Module::create_action_url( 'popup:close' );
		    	}
		    	
				return $link_action_url;
			}
		}
    }

	protected function get_client_ip() {
	    $ipaddress = '';
	    if (getenv('HTTP_CLIENT_IP'))
	        $ipaddress = getenv('HTTP_CLIENT_IP');
	    else if(getenv('HTTP_X_FORWARDED_FOR'))
	        $ipaddress = getenv('HTTP_X_FORWARDED_FOR');
	    else if(getenv('HTTP_X_FORWARDED'))
	        $ipaddress = getenv('HTTP_X_FORWARDED');
	    else if(getenv('HTTP_FORWARDED_FOR'))
	        $ipaddress = getenv('HTTP_FORWARDED_FOR');
	    else if(getenv('HTTP_FORWARDED'))
	       $ipaddress = getenv('HTTP_FORWARDED');
	    else if(getenv('REMOTE_ADDR'))
	        $ipaddress = getenv('REMOTE_ADDR');
	    else
	        $ipaddress = 'UNKNOWN';
	    return $ipaddress;
	}

	protected function render() {
		$settings = $this->get_settings_for_display();
		if ( array_key_exists( 'pafe_multi_step_form_list',$settings ) ) {
			$list = $settings['pafe_multi_step_form_list'];	
			if( !empty($list[0]['pafe_multi_step_form_item_shortcode']) ) {
				$index = 0;

				$this->add_render_attribute( 'button', 'class', 'elementor-button' );
				$this->add_render_attribute( 'button', 'role', 'button' );

				if ( ! empty( $settings['button_css_id'] ) ) {
					$this->add_render_attribute( 'button', 'id', $settings['button_css_id'] );
				}

				if ( ! empty( $settings['size'] ) ) {
					$this->add_render_attribute( 'button', 'class', 'elementor-size-' . $settings['size'] );
				}

				if ( $settings['hover_animation'] ) {
					$this->add_render_attribute( 'button', 'class', 'elementor-animation-' . $settings['hover_animation'] );
				}

				if ( $settings['form_id'] ) {
					$this->add_render_attribute( 'button', 'data-pafe-form-builder-nav-form-id', $settings['form_id'] );
					$this->add_render_attribute( 'button-submit', 'data-pafe-form-builder-submit-form-id', $settings['form_id'] );
				}

				if ( !empty(get_option('piotnet-addons-for-elementor-pro-recaptcha-site-key')) && !empty(get_option('piotnet-addons-for-elementor-pro-recaptcha-secret-key')) && !empty($settings['pafe_recaptcha_enable']) ) {
					$this->add_render_attribute( 'button-submit', 'data-pafe-form-builder-submit-recaptcha', esc_attr( get_option('piotnet-addons-for-elementor-pro-recaptcha-site-key') ) );
				}

				if( !empty($settings['pafe_stripe_enable']) ) {

					$this->add_render_attribute( 'button', [
						'data-pafe-form-builder-stripe-submit' => '',
					] );

					if( !empty($settings['pafe_stripe_amount']) ) {
						$this->add_render_attribute( 'button', [
							'data-pafe-form-builder-stripe-amount' => $settings['pafe_stripe_amount'],
						] );
					}

					if( !empty($settings['pafe_stripe_currency']) ) {
						$this->add_render_attribute( 'button', [
							'data-pafe-form-builder-stripe-currency' => $settings['pafe_stripe_currency'],
						] );
					}

					if( !empty($settings['pafe_stripe_amount_field_enable']) && !empty($settings['pafe_stripe_amount_field']) ) {
						$this->add_render_attribute( 'button', [
							'data-pafe-form-builder-stripe-amount-field' => $settings['pafe_stripe_amount_field'],
						] );
					}

					if( !empty($settings['pafe_stripe_customer_info_field']) ) {
						$this->add_render_attribute( 'button', [
							'data-pafe-form-builder-stripe-customer-info-field' => $settings['pafe_stripe_customer_info_field'],
						] );
					}
				}
				
				if( !empty($_GET['edit']) ) {
					$post_id = intval($_GET['edit']);
					if( is_user_logged_in() && get_post($post_id) != null ) {
						if (!empty(get_post_meta($post_id,'_submit_button_id',true)) && !empty(get_post_meta($post_id,'_submit_post_id',true))) {
							if (current_user_can( 'edit_others_posts' ) || get_current_user_id() == get_post($post_id)->post_author) {
								$sp_post_id = get_post_meta($post_id,'_submit_post_id',true);
								$form_id = get_post_meta($post_id,'_submit_button_id',true);

								$elementor = \Elementor\Plugin::$instance;

								$meta = $elementor->db->get_plain_editor( $sp_post_id );

								$form = find_element_recursive( $meta, $form_id );

								if ( !empty($form)) {
									$this->add_render_attribute( 'button', [
										'data-pafe-form-builder-submit-post-edit' => intval($post_id),
									] );
								}
							}
						}
					}
				}

				$list_conditional = $settings['pafe_conditional_logic_form_list'];	
				if( !empty($settings['pafe_conditional_logic_form_enable']) && !empty($list_conditional[0]['pafe_conditional_logic_form_if']) && !empty($list_conditional[0]['pafe_conditional_logic_form_comparison_operators']) ) {
					$this->add_render_attribute( 'button-submit', [
						'data-pafe-form-builder-conditional-logic' => json_encode($list_conditional),
						'data-pafe-form-builder-conditional-logic-speed' => $settings['pafe_conditional_logic_form_speed'],
						'data-pafe-form-builder-conditional-logic-easing' => $settings['pafe_conditional_logic_form_easing'],
					] );
				}

				if( !empty($settings['pafe_multi_step_form_scroll_to_top'] ) ) {
					$this->add_render_attribute( 'button-submit', [
						'data-pafe-multi-step-form-scroll-to-top' => '',
						'data-pafe-multi-step-form-scroll-to-top-offset-desktop' => $settings['pafe_multi_step_form_scroll_to_top_offset_desktop'],
						'data-pafe-multi-step-form-scroll-to-top-offset-tablet' => $settings['pafe_multi_step_form_scroll_to_top_offset_tablet'],
						'data-pafe-multi-step-form-scroll-to-top-offset-mobile' => $settings['pafe_multi_step_form_scroll_to_top_offset_mobile'],
					] );
				}
		?>
			<div class="pafe-multi-step-form"<?php if( !empty($settings['pafe_multi_step_form_scroll_to_top'] ) ) : ?> data-pafe-multi-step-form-scroll-to-top data-pafe-multi-step-form-scroll-to-top-offset-desktop="<?php echo $settings['pafe_multi_step_form_scroll_to_top_offset_desktop']; ?>" data-pafe-multi-step-form-scroll-to-top-offset-tablet="<?php echo $settings['pafe_multi_step_form_scroll_to_top_offset_tablet']; ?>" data-pafe-multi-step-form-scroll-to-top-offset-mobile="<?php echo $settings['pafe_multi_step_form_scroll_to_top_offset_mobile']; ?>"<?php endif; ?>>
				<div class="pafe-multi-step-form__progressbar">
					<?php foreach ($list as $item) : $index++; ?>
						<div class="pafe-multi-step-form__progressbar-item<?php if($index == 1) : ?> active<?php endif; ?>">
							<div class="pafe-multi-step-form__progressbar-item-step-number">
								<div class="pafe-multi-step-form__progressbar-item-step"><?php echo $index; ?></div>
							</div>
							<div class="pafe-multi-step-form__progressbar-item-title<?php echo $settings['progress_bar_step_title_hide_desktop'] . ' ' . $settings['progress_bar_step_title_hide_tablet'] . ' ' . $settings['progress_bar_step_title_hide_mobile'] ; ?>"><?php echo $item['pafe_multi_step_form_item_title']; ?></div>
						</div>
					<?php endforeach; ?>
				</div>
				<?php $index = 0; ?>
				<div class="pafe-multi-step-form__content">
					<?php foreach ($list as $item) : $index++; ?>
						<div class="pafe-multi-step-form__content-item<?php if($index == 1) : ?> active<?php endif; ?>">
							<div class="pafe-multi-step-form__content-item-shortcode">
								<?php echo do_shortcode( $item['pafe_multi_step_form_item_shortcode'] ) ?>
							</div>
							<div class="pafe-multi-step-form__content-item-buttons">
								<?php if ($index != 1) : ?>
									<div class="pafe-multi-step-form__content-item-button">
										<a <?php echo $this->get_render_attribute_string( 'button' ); ?> data-pafe-form-builder-nav="prev">
											<span class="elementor-button-content-wrapper">
												<span class="elementor-button-text"><?php echo $settings['button_prev']; ?></span>
											</span>
										</a>
									</div>
								<?php endif; ?>
								<?php if ($index != count($list)) : ?>
									<div class="pafe-multi-step-form__content-item-button">
										<a <?php echo $this->get_render_attribute_string( 'button' ); ?> data-pafe-form-builder-nav="next">
											<span class="elementor-button-content-wrapper">
												<span class="elementor-button-text"><?php echo $settings['button_next']; ?></span>
											</span>
										</a>
									</div>
								<?php endif; ?>
								<?php if ($index == count($list)) : ?>
									<input type="hidden" name="post_id" value="<?php echo get_the_ID(); ?>" data-pafe-form-builder-hidden-form-id="<?php if ( $settings['form_id'] ) {echo $settings['form_id'];} ?>"/>
									<input type="hidden" name="form_id" value="<?php echo $this->get_id(); ?>" data-pafe-form-builder-hidden-form-id="<?php if ( $settings['form_id'] ) {echo $settings['form_id'];} ?>"/>
									<input type="hidden" name="remote_ip" value="<?php echo $this->get_client_ip(); ?>" data-pafe-form-builder-hidden-form-id="<?php if ( $settings['form_id'] ) {echo $settings['form_id'];} ?>"/>

									<?php if(in_array('redirect', $settings['submit_actions'])) : ?>
										<input type="hidden" name="redirect" value="<?php echo $settings['redirect_to']; ?>" data-pafe-form-builder-hidden-form-id="<?php if ( $settings['form_id'] ) {echo $settings['form_id'];} ?>"/>
									<?php endif; ?>

									<?php if(in_array('popup', $settings['submit_actions'])) : ?>
										<?php if(!empty( $settings['popup_action'] ) && !empty( $settings['popup_action_popup_id'] )) : ?>
											<a href="<?php echo $this->create_popup_url($settings['popup_action_popup_id'],$settings['popup_action']); ?>" data-pafe-form-builder-popup data-pafe-form-builder-hidden-form-id="<?php if ( $settings['form_id'] ) {echo $settings['form_id'];} ?>" style="display: none;"></a>
										<?php endif; ?>
									<?php endif; ?>

									<?php if(in_array('open_popup', $settings['submit_actions'])) : ?>
										<?php if(!empty( $settings['popup_action_popup_id_open'] )) : ?>
											<a href="<?php echo $this->create_popup_url($settings['popup_action_popup_id_open'],'open'); ?>" data-pafe-form-builder-popup-open data-pafe-form-builder-hidden-form-id="<?php if ( $settings['form_id'] ) {echo $settings['form_id'];} ?>" style="display: none;"></a>
										<?php endif; ?>
									<?php endif; ?>

									<?php if(in_array('close_popup', $settings['submit_actions'])) : ?>
										<?php if(!empty( $settings['popup_action_popup_id_close'] )) : ?>
											<a href="<?php echo $this->create_popup_url($settings['popup_action_popup_id_close'],'close'); ?>" data-pafe-form-builder-popup-close data-pafe-form-builder-hidden-form-id="<?php if ( $settings['form_id'] ) {echo $settings['form_id'];} ?>" style="display: none;"></a>
										<?php endif; ?>
									<?php endif; ?>
		
									<div class="pafe-multi-step-form__content-item-button">
										<a <?php echo $this->get_render_attribute_string( 'button' ); ?><?php echo $this->get_render_attribute_string( 'button-submit' ); ?>>
											<span class="elementor-button-content-wrapper">
												<span class="elementor-button-text"><?php echo $settings['button_submit']; ?></span>
											</span>
										</a>
									</div>
								<?php endif; ?>
							</div>
							<?php if ($index == count($list)) : ?>
								<?php if( !empty($settings['pafe_stripe_enable']) ) : ?>
									<div class="pafe-form-builder-alert pafe-form-builder-alert--stripe">
										<div class="elementor-message elementor-message-success" role="alert"><?php echo $settings['pafe_stripe_message_succeeded']; ?></div>
										<div class="elementor-message elementor-message-danger" role="alert"><?php echo $settings['pafe_stripe_message_failed']; ?></div>
										<div class="elementor-message elementor-help-inline" role="alert"><?php echo $settings['pafe_stripe_message_pending']; ?></div>
									</div>
								<?php endif; ?>
								<div class="pafe-form-builder-alert pafe-form-builder-alert--mail">
									<div class="elementor-message elementor-message-success" role="alert"><?php echo $settings['success_message']; ?></div>
									<div class="elementor-message elementor-message-danger" role="alert"><?php echo $settings['error_message']; ?></div>
									<!-- <div class="elementor-message elementor-help-inline" role="alert">Server error. Form not sent.</div> -->
								</div>
							<?php endif; ?>
						</div>
					<?php endforeach; ?>
				</div>
			</div>
		<?php
			}
		}
	}

}

?>