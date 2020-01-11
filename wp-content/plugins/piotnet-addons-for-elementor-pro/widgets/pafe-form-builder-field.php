<?php

class PAFE_Form_Builder_Field extends \Elementor\Widget_Base {

	public function get_name() {
		return 'pafe-form-builder-field';
	}

	public function get_title() {
		return __( 'Field', 'pafe' );
	}

	public function get_icon() {
		return 'fa fa-keyboard-o';
	}

	public function get_categories() {
		return [ 'pafe-form-builder' ];
	}

	public function get_keywords() {
		return [ 'input', 'form', 'field' ];
	}

	public function get_script_depends() {
		return [ 'pafe-form-builder' ];
	}

	public function get_stype_depends() {
		return [ 'pafe-form-builder-scripts' ];
	}

	protected function _register_controls() {

		$field_types = [
			'text' => __( 'Text', 'pafe' ),
			'email' => __( 'Email', 'pafe' ),
			'textarea' => __( 'Textarea', 'pafe' ),
			'url' => __( 'URL', 'pafe' ),
			'tel' => __( 'Tel', 'pafe' ),
			'radio' => __( 'Radio', 'pafe' ),
			'select' => __( 'Select', 'pafe' ),
			'terms_select' => __( 'Terms Select', 'pafe' ),
			'image_select' => __( 'Image Select', 'pafe' ),
			'checkbox' => __( 'Checkbox', 'pafe' ),
			'acceptance' => __( 'Acceptance', 'pafe' ),
			'number' => __( 'Number', 'pafe' ),
			'date' => __( 'Date', 'pafe' ),
			'time' => __( 'Time', 'pafe' ),
			'image_upload' => __( 'Image Upload', 'pafe' ),
			'upload' => __( 'File Upload', 'pafe' ),
			'password' => __( 'Password', 'pafe' ),
			'html' => __( 'HTML', 'pafe' ),
			'hidden' => __( 'Hidden', 'pafe' ),
			'range_slider' => __( 'Range Slider', 'pafe' ),
			'calculated_fields' => __( 'Calculated Fields', 'pafe' ),
			'stripe_payment' => __( 'Stripe Payment', 'pafe' ),
			'honeypot' => __( 'Honeypot', 'pafe' ),
		];

		if( get_option( 'pafe-features-submit-post', 2 ) == 2 || get_option( 'pafe-features-submit-post', 2 ) == 1 ) {
			$field_types['tinymce'] = __('TinyMCE', 'pafe');
		}

		if( get_option( 'pafe-features-select-autocomplete-field', 2 ) == 2 || get_option( 'pafe-features-select-autocomplete-field', 2 ) == 1 ) {
			$field_types['select_autocomplete'] = __( 'Select Autocomplete', 'pafe' );
		}

		if( get_option( 'pafe-features-address-autocomplete-field', 2 ) == 2 || get_option( 'pafe-features-address-autocomplete-field', 2 ) == 1 ) {
			$field_types['address_autocomplete'] = __( 'Address Autocomplete', 'pafe' );
		}

		$this->start_controls_section(
			'pafe_form_builder_field',
			[
				'label' => __( 'Field', 'pafe' ),
				'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);

		$this->add_control(
			'form_id',
			[
				'label' => __( 'Form ID* (Required)', 'pafe' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'description' => __( 'Form ID have to be unique in this website.', 'pafe' ),
				'render_type' => 'none',
			]
		);

		$this->add_control(
			'field_id',
			[
				'label' => __( 'Field ID* (Required)', 'pafe' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'description' => __( 'Field ID have to be unique in each form.', 'pafe' ),
				'render_type' => 'none',
			]
		);

		$this->add_control(
			'shortcode',
			[
				'label' => __( 'Shortcode', 'elementor-pro' ),
				'type' => \Elementor\Controls_Manager::RAW_HTML,
				'classes' => 'forms-field-shortcode',
				'raw' => '<input class="elementor-form-field-shortcode" readonly />',
			]
		);

		$this->add_control(
			'field_type',
			[
				'label' => __( 'Type', 'pafe' ),
				'type' => \Elementor\Controls_Manager::SELECT,
				'options' => $field_types,
				'default' => 'text',
				'description' => 'TinyMCE only works on the frontend.'
			]
		);

		if( get_option( 'pafe-features-address-autocomplete-field', 2 ) == 2 || get_option( 'pafe-features-address-autocomplete-field', 2 ) == 1 ) {
			$this->add_control(
				'google_maps',
				[
					'label' => __( 'Google Maps', 'pafe' ),
					'type' => \Elementor\Controls_Manager::SWITCHER,
					'description' => __( 'This feature only works on the frontend.', 'pafe' ),
					'label_on' => __( 'Show', 'elementor-pro' ),
					'label_off' => __( 'Hide', 'elementor-pro' ),
					'default' => '',
					'condition' => [
						'field_type' => 'address_autocomplete',
					],
				]
			);

			$this->add_responsive_control(
				'google_maps_height',
				[
					'label' => __( 'Height', 'pafe' ),
					'type' => \Elementor\Controls_Manager::SLIDER,
					'size_units' => [ 'px' ],
					'range' => [
						'px' => [
							'min' => 0,
							'max' => 1000,
						],
					],
					'default' => [
						'unit' => 'px',
						'size' => 200,
					],
					'selectors' => [
						'{{WRAPPER}} .pafe-form-builder-address-autocomplete-map' => 'height:{{SIZE}}{{UNIT}}',
					],
					'condition' => [
						'field_type' => 'address_autocomplete',
						'google_maps!' => '',
					],
				]
			);
		}

		$this->add_control(
			'field_label',
			[
				'label' => __( 'Label', 'pafe' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'default' => '',
			]
		);

		$this->add_control(
			'field_placeholder',
			[
				'label' => __( 'Placeholder', 'pafe' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'default' => '',
				'conditions' => [
					'terms' => [
						[
							'name' => 'field_type',
							'operator' => 'in',
							'value' => [
								'tel',
								'text',
								'email',
								'textarea',
								'number',
								'url',
								'password',
								'select_autocomplete',
								'address_autocomplete',
							],
						],
					],
				],
			]
		);

		$this->add_control(
			'file_sizes',
			[
				'label' => __( 'Max. File Size', 'pafe' ),
				'type' => \Elementor\Controls_Manager::SELECT,
				'condition' => [
					'field_type' => 'upload',
				],
				'options' => $this->get_upload_file_size_options(),
				'description' => __( 'If you need to increase max upload size please contact your hosting.', 'pafe' ),
			]
		);

		$this->add_control(
			'file_sizes_message',
			[
				'label' => __( 'Max. File Size Error Message', 'pafe' ),
				'label_block' => true,
				'type' => \Elementor\Controls_Manager::TEXT,
				'default' => __( 'File size must be less than 1MB', 'pafe' ),
				'condition' => [
					'field_type' => 'upload',
				],
			]
		);

		$this->add_control(
			'file_types',
			[
				'label' => __( 'Allowed File Types', 'elementor-pro' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'condition' => [
					'field_type' => 'upload',
				],
				'description' => __( 'Enter the allowed file types, separated by a comma (jpg, gif, pdf, etc).', 'pafe' ),
			]
		);

		$this->add_control(
			'file_types_message',
			[
				'label' => __( 'Allowed File Types Error Message', 'pafe' ),
				'label_block' => true,
				'type' => \Elementor\Controls_Manager::TEXT,
				'default' => __( 'Please enter a value with a valid mimetype.', 'pafe' ),
				'condition' => [
					'field_type' => 'upload',
				],
			]
		);

		$this->add_control(
			'allow_multiple_upload',
			[
				'label' => __( 'Multiple Files', 'pafe' ),
				'type' => \Elementor\Controls_Manager::SWITCHER,
				'condition' => [
					'field_type' => 'upload',
					'field_type' => 'image_upload',
				],
			]
		);

		// $this->add_control(
		// 	'max_files' => [
		// 		'label' => __( 'Max. Files', 'pafe' ),
		// 		'type' => \Elementor\Controls_Manager::NUMBER,
		// 		'condition' => [
		// 			'field_type' => 'upload',
		// 			'allow_multiple_upload' => 'yes',
		// 		],
		// 		'tab' => 'content',
		// 		'inner_tab' => 'form_fields_content_tab',
		// 		'tabs_wrapper' => 'form_fields_tabs',
		// 	],
		// );

		$this->add_control(
			'attach_files',
			[
				'label' => __( 'Attach files to email, not upload to uploads folder', 'pafe' ),
				'type' => \Elementor\Controls_Manager::SWITCHER,
				'condition' => [
					'field_type' => 'upload',
				],
			]
		);

		$this->add_control(
			'field_required',
			[
				'label' => __( 'Required', 'pafe' ),
				'type' => \Elementor\Controls_Manager::SWITCHER,
				'return_value' => 'true',
				'default' => '',
				'conditions' => [
					'terms' => [
						[
							'name' => 'field_type',
							'operator' => '!in',
							'value' => [
								'checkbox',
								'recaptcha',
								'hidden',
								'html',
								'honeypot',
							],
						],
					],
				],
			]
		);

		$this->add_control(
			'mark_required',
			[
				'label' => __( 'Required Mark', 'elementor-pro' ),
				'type' => \Elementor\Controls_Manager::SWITCHER,
				'label_on' => __( 'Show', 'elementor-pro' ),
				'label_off' => __( 'Hide', 'elementor-pro' ),
				'default' => '',
				'condition' => [
					'field_label!' => '',
				],
			]
		);

		$this->add_control(
			'field_options',
			[
				'label' => __( 'Options', 'pafe' ),
				'type' => \Elementor\Controls_Manager::TEXTAREA,
				'default' => '',
				'description' => __( 'Enter each option in a separate line. To differentiate between label and value, separate them with a pipe char ("|"). For example: First Name|f_name', 'pafe' ),
				'conditions' => [
					'terms' => [
						[
							'name' => 'field_type',
							'operator' => 'in',
							'value' => [
								'select',
								'select_autocomplete',
								'image_select',
								'checkbox',
								'radio',
							],
						],
					],
				],
			]
		);

		$this->add_control(
			'field_taxonomy_slug',
			[
				'label' => __( 'Taxonomy Slug', 'pafe' ),
				'label_block' => true,
				'type' => \Elementor\Controls_Manager::TEXT,
				'default' => __( 'category', 'pafe' ),
				'description' => __('E.g: category, post_tag','pafe'),
				'condition' => [
					'field_type' => 'terms_select',
				],
			]
		);

		$this->add_control(
			'allow_multiple',
			[
				'label' => __( 'Multiple Selection', 'pafe' ),
				'type' => \Elementor\Controls_Manager::SWITCHER,
				'return_value' => 'true',
				'conditions' => [
					'terms' => [
						[
							'name' => 'field_type',
							'operator' => 'in',
							'value' => [
								'select',
								'image_select',
								'terms_select',
							],
						],
					],
				],
			]
		);

		$this->add_control(
			'select_size',
			[
				'label' => __( 'Rows', 'pafe' ),
				'type' => \Elementor\Controls_Manager::NUMBER,
				'min' => 2,
				'step' => 1,
				'conditions' => [
					'terms' => [
						[
							'name' => 'field_type',
							'operator' => 'in',
							'value' => [
								'select',
								'select_autocomplete',
								'terms_select',
								'image_select',
							],
						],
						[
							'name' => 'allow_multiple',
							'value' => 'true',
						],
					],
				],
			]
		);

		$this->add_control(
			'inline_list',
			[
				'label' => __( 'Inline List', 'pafe' ),
				'type' => \Elementor\Controls_Manager::SWITCHER,
				'return_value' => 'elementor-subgroup-inline',
				'default' => '',
				'conditions' => [
					'terms' => [
						[
							'name' => 'field_type',
							'operator' => 'in',
							'value' => [
								'checkbox',
								'radio',
							],
						],
					],
				],
			]
		);

		$this->add_control(
			'field_html',
			[
				'label' => __( 'HTML', 'pafe' ),
				'type' => \Elementor\Controls_Manager::TEXTAREA,
				'dynamic' => [
					'active' => true,
				],
				'conditions' => [
					'terms' => [
						[
							'name' => 'field_type',
							'value' => 'html',
						],
					],
				],
			]
		);

		$this->add_control(
			'rows',
			[
				'label' => __( 'Rows', 'pafe' ),
				'type' => \Elementor\Controls_Manager::NUMBER,
				'default' => 4,
				'conditions' => [
					'terms' => [
						[
							'name' => 'field_type',
							'value' => 'textarea',
						],
					],
				],
			]
		);

		$this->add_control(
			'recaptcha_size',
			[
				'label' => __( 'Size', 'pafe' ),
				'type' => \Elementor\Controls_Manager::SELECT,
				'default' => 'normal',
				'options' => [
					'normal' => __( 'Normal', 'pafe' ),
					'compact' => __( 'Compact', 'pafe' ),
				],
				'conditions' => [
					'terms' => [
						[
							'name' => 'field_type',
							'value' => 'recaptcha',
						],
					],
				],
			]
		);

		$this->add_control(
			'recaptcha_style',
			[
				'label' => __( 'Style', 'pafe' ),
				'type' => \Elementor\Controls_Manager::SELECT,
				'default' => 'light',
				'options' => [
					'light' => __( 'Light', 'pafe' ),
					'dark' => __( 'Dark', 'pafe' ),
				],
				'conditions' => [
					'terms' => [
						[
							'name' => 'field_type',
							'value' => 'recaptcha',
						],
					],
				],
			]
		);

		$this->add_control(
			'css_classes',
			[
				'label' => __( 'CSS Classes', 'pafe' ),
				'type' => \Elementor\Controls_Manager::HIDDEN,
				'default' => '',
				'title' => __( 'Add your custom class WITHOUT the dot. e.g: my-class', 'pafe' ),
			]
		);

		$this->add_control(
			'field_value',
			[
				'label' => __( 'Default Value', 'pafe' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'default' => '',
				'dynamic' => [
					'active' => true,
				],
				'conditions' => [
					'terms' => [
						[
							'name' => 'field_type',
							'operator' => 'in',
							'value' => [
								'text',
								'email',
								'textarea',
								'url',
								'tel',
								'radio',
								'select',
								'select_autocomplete',
								'terms_select',
								'image_select',
								'number',
								'date',
								'time',
								'hidden',
								'address_autocomplete',
							],
						],
					],
				],
			]
		);

		$this->add_control(
			'field_min',
			[
				'name' => 'field_min',
				'label' => __( 'Min. Value', 'elementor-pro' ),
				'type' => \Elementor\Controls_Manager::NUMBER,
				'conditions' => [
					'terms' => [
						[
							'name' => 'field_type',
							'operator' => 'in',
							'value' => [
								'number',
							],
						],
					],
				],
			]
		);

		$this->add_control(
			'field_max',
			[
				'label' => __( 'Max. Value', 'elementor-pro' ),
				'type' => \Elementor\Controls_Manager::NUMBER,
				'conditions' => [
					'terms' => [
						[
							'name' => 'field_type',
							'operator' => 'in',
							'value' => [
								'number',
							],
						],
					],
				],
			]
		);

		$this->add_control(
			'acceptance_text',
			[
				'label' => __( 'Acceptance Text', 'elementor-pro' ),
				'type' => \Elementor\Controls_Manager::TEXTAREA,
				'conditions' => [
					'terms' => [
						[
							'name' => 'field_type',
							'operator' => 'in',
							'value' => [
								'acceptance',
							],
						],
					],
				],
			]
		);

		$this->add_control(
			'checked_by_default',
			[
				'label' => __( 'Checked by Default', 'elementor-pro' ),
				'type' => \Elementor\Controls_Manager::SWITCHER,
				'conditions' => [
					'terms' => [
						[
							'name' => 'field_type',
							'operator' => 'in',
							'value' => [
								'acceptance',
							],
						],
					],
				],
			]
		);

		$this->add_control(
			'min_date',
			[
				'label' => __( 'Min. Date', 'elementor-pro' ),
				'type' => \Elementor\Controls_Manager::DATE_TIME,
				'label_block' => false,
				'picker_options' => [
					'enableTime' => false,
				],
				'dynamic' => [
					'active' => true,
				],
				'conditions' => [
					'terms' => [
						[
							'name' => 'field_type',
							'operator' => 'in',
							'value' => [
								'date',
							],
						],
					],
				],
			]
		);

		$this->add_control(
			'min_date_current',
			[
				'label' => __( 'Set Current Date for Min. Date', 'pafe' ),
				'type' => \Elementor\Controls_Manager::SWITCHER,
				'default' => '',
				'label_on' => 'Yes',
				'label_off' => 'No',
				'return_value' => 'yes',
				'conditions' => [
					'terms' => [
						[
							'name' => 'field_type',
							'operator' => 'in',
							'value' => [
								'date',
							],
						],
					],
				],
			]
		);

		$this->add_control(
			'max_date',
			[
				'name' => 'max_date',
				'label' => __( 'Max. Date', 'elementor-pro' ),
				'type' => \Elementor\Controls_Manager::DATE_TIME,
				'label_block' => false,
				'picker_options' => [
					'enableTime' => false,
				],
				'dynamic' => [
					'active' => true,
				],
				'conditions' => [
					'terms' => [
						[
							'name' => 'field_type',
							'operator' => 'in',
							'value' => [
								'date',
							],
						],
					],
				],
			]
		);

		$this->add_control(
			'max_date_current',
			[
				'label' => __( 'Set Current Date for Max. Date', 'pafe' ),
				'type' => \Elementor\Controls_Manager::SWITCHER,
				'default' => '',
				'label_on' => 'Yes',
				'label_off' => 'No',
				'return_value' => 'yes',
				'conditions' => [
					'terms' => [
						[
							'name' => 'field_type',
							'operator' => 'in',
							'value' => [
								'date',
							],
						],
					],
				],
			]
		);

		$this->add_control(
			'use_native_date',
			[
				'label' => __( 'Native HTML5', 'elementor-pro' ),
				'type' => \Elementor\Controls_Manager::SWITCHER,
				'conditions' => [
					'terms' => [
						[
							'name' => 'field_type',
							'operator' => 'in',
							'value' => [
								'date',
							],
						],
					],
				],
			]
		);

		$this->add_control(
			'use_native_time',
			[
				'label' => __( 'Native HTML5', 'elementor-pro' ),
				'type' => \Elementor\Controls_Manager::SWITCHER,
				'conditions' => [
					'terms' => [
						[
							'name' => 'field_type',
							'operator' => 'in',
							'value' => [
								'time',
							],
						],
					],
				],
			]
		);

		$this->add_control(
			'pafe_range_slider_field_options',
			[
				'label' => __( 'Range Slider Options', 'pafe' ),
				'label_block' => true,
				'type' => \Elementor\Controls_Manager::TEXTAREA,
				'default' => 'skin: "round", type: "double", grid: true, min: 0, max: 1000, from: 200, to: 800, prefix: "$"',
				'description' => 'Demo: <a href="http://ionden.com/a/plugins/ion.rangeSlider/demo.html" target="_blank">http://ionden.com/a/plugins/ion.rangeSlider/demo.html</a>',
				'condition' => [
					'field_type' => 'range_slider',
				]
			]
		);

		// $element->add_group_control(
		// 	\Elementor\Group_Control_Typography::get_type(),
		// 	[
		// 		'name' => 'pafe_calculated_fields_form_typography',
		// 		'label' => __( 'Typography', 'pafe' ),
		// 		'scheme' => \Elementor\Scheme_Typography::TYPOGRAPHY_1,
		// 		'selector' => '{{WRAPPER}} .pafe-calculated-fields-form',
		// 	]
		// );

		$this->add_control(
			'pafe_calculated_fields_form_calculation',
			[
				'label' => __( 'Calculation', 'pafe' ),
				'label_block' => true,
				'type' => \Elementor\Controls_Manager::TEXT,
				'description' => __( 'E.g [field id="quantity"]*[field id="price"]+10', 'pafe' ),
				'condition' => [
					'field_type' => 'calculated_fields',
				]
			]
		);

		$this->add_control(
			'pafe_calculated_fields_form_before',
			[
				'label' => __( 'Before Content', 'pafe' ),
				'label_block' => true,
				'type' => \Elementor\Controls_Manager::TEXT,
				'description' => __( 'E.g $', 'pafe' ),
				'condition' => [
					'field_type' => 'calculated_fields',
				]
			]
		);

		$this->add_control(
			'pafe_calculated_fields_form_after',
			[
				'label' => __( 'After Content', 'pafe' ),
				'label_block' => true,
				'type' => \Elementor\Controls_Manager::TEXT,
				'description' => __( 'E.g $', 'pafe' ),
				'condition' => [
					'field_type' => 'calculated_fields',
				]
			]
		);

		$this->add_control(
			'pafe_image_select_field_gallery',
			[
				'label' => __( 'Add Images', 'pafe' ),
				'type' => \Elementor\Controls_Manager::GALLERY,
				'default' => [],
				'condition' => [
					'field_type' => 'image_select',
				]
			]
		);

		$this->end_controls_section();

		// Image Select Style

		$this->start_controls_section(
			'section_style_image_select',
			[
				'label' => __( 'Image Select', 'pafe' ),
				'tab' => \Elementor\Controls_Manager::TAB_STYLE,
				'condition' => [
					'field_type' => 'image_select',
				]
			]
		);

		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name' => 'pafe_image_select_field_typography',
				'label' => __( 'Typography', 'pafe' ),
				'scheme' => \Elementor\Scheme_Typography::TYPOGRAPHY_1,
				'selector' => '{{WRAPPER}} .image_picker_selector .thumbnail p',
			]
		);

		$this->add_responsive_control(
			'pafe_image_select_field_text_align',
			[
				'label' => __( 'Text Align', 'pafe' ),
				'type' => \Elementor\Controls_Manager::CHOOSE,
				'options' => [
					'left' => [
						'title' => __( 'Left', 'elementor' ),
						'icon' => 'fa fa-align-left',
					],
					'center' => [
						'title' => __( 'Center', 'elementor' ),
						'icon' => 'fa fa-align-center',
					],
					'right' => [
						'title' => __( 'Right', 'elementor' ),
						'icon' => 'fa fa-align-right',
					],
				],
				'selectors' => [
					'{{WRAPPER}} .image_picker_selector .thumbnail p' => 'text-align: {{VALUE}};',
				],
			]
		);

		$this->add_responsive_control(
			'pafe_image_select_field_item_width',
			[
				'label' => __( 'Item Width (%)', 'pafe' ),
				'type' => \Elementor\Controls_Manager::NUMBER,
				'default' => 25,
				'min' => 1,
				'max' => 100,
				'selectors' => [
					'{{WRAPPER}} ul.thumbnails.image_picker_selector li' => 'width: {{VALUE}}% !important;',
				],
			]
		);

		$columns_margin = is_rtl() ? '-{{SIZE}}{{UNIT}} -{{SIZE}}{{UNIT}} -{{SIZE}}{{UNIT}} -{{SIZE}}{{UNIT}};' : '-{{SIZE}}{{UNIT}} -{{SIZE}}{{UNIT}} -{{SIZE}}{{UNIT}} -{{SIZE}}{{UNIT}};';
		$columns_padding = is_rtl() ? '{{SIZE}}{{UNIT}} !important;' : '{{SIZE}}{{UNIT}} !important;';

		$this->add_responsive_control(
			'pafe_image_select_field_item_spacing',
			[
				'label' => __( 'Item Spacing', 'pafe' ),
				'type' => \Elementor\Controls_Manager::SLIDER,
				'size_units' => [ 'px', '%' ],
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 100,
					],
					'%' => [
						'min' => 0,
						'max' => 100,
					],
				],
				'default' => [
					'unit' => 'px',
					'size' => 10,
				],
				'selectors' => [
					'{{WRAPPER}} ul.thumbnails.image_picker_selector li' => 'padding:' . $columns_padding,
					'{{WRAPPER}} ul.thumbnails.image_picker_selector' => 'margin: ' . $columns_margin,
				],
			]
		);

		$this->add_responsive_control(
			'pafe_image_select_field_item_border_radius',
			[
				'label' => __( 'Item Border Radius', 'pafe' ),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%' ],
				'selectors' => [
					'{{WRAPPER}} ul.thumbnails.image_picker_selector .thumbnail' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		$this->add_responsive_control(
			'pafe_image_select_field_image_border_radius',
			[
				'label' => __( 'Image Border Radius', 'pafe' ),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%' ],
				'selectors' => [
					'{{WRAPPER}} ul.thumbnails.image_picker_selector .image_picker_image' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		$this->add_responsive_control(
			'pafe_image_select_field_image_padding',
			[
				'label' => __( 'Input Padding', 'pafe' ),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', 'em', '%' ],
				'selectors' => [
					'{{WRAPPER}} .image_picker_image' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		$this->add_responsive_control(
			'pafe_image_select_field_label_padding',
			[
				'label' => __( 'Input Padding', 'pafe' ),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', 'em', '%' ],
				'selectors' => [
					'{{WRAPPER}} ul.thumbnails p' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		$this->start_controls_tabs('pafe_image_select_field_normal_active');

		$this->start_controls_tab(
			'pafe_image_select_field_normal',
			[
				'label' => __( 'Normal', 'elementor' ),
			]
		);

		$this->add_control(
			'pafe_image_select_field_border_normal',
			[
				'label' => __( 'Item Border Type', 'pafe' ),
				'type' => \Elementor\Controls_Manager::SELECT,
				'options' => [
					'' => __( 'None', 'elementor' ),
					'solid' => _x( 'Solid', 'Border Control', 'elementor' ),
					'double' => _x( 'Double', 'Border Control', 'elementor' ),
					'dotted' => _x( 'Dotted', 'Border Control', 'elementor' ),
					'dashed' => _x( 'Dashed', 'Border Control', 'elementor' ),
					'groove' => _x( 'Groove', 'Border Control', 'elementor' ),
				],
				'selectors' => [
					'{{WRAPPER}} ul.thumbnails.image_picker_selector .thumbnail' => 'border-style: {{VALUE}};',
				],
			]
		);

		$this->add_responsive_control(
			'pafe_image_select_field_border_width_normal',
			[
				'label' => __( 'Item Border Width', 'pafe' ),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'selectors' => [
					'{{WRAPPER}} ul.thumbnails.image_picker_selector .thumbnail' => 'border-width: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
				'condition' => [
					'pafe_image_select_field_border_normal!' => '',
				],
			]
		);

		$this->add_control(
			'pafe_image_select_field_border_color_normal',
			[
				'label' => __( 'Item Border Color', 'pafe' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'default' => '',
				'selectors' => [
					'{{WRAPPER}} ul.thumbnails.image_picker_selector .thumbnail' => 'border-color: {{VALUE}};',
				],
				'condition' => [
					'pafe_image_select_field_border_normal!' => '',
				],
			]
		);

		$this->add_control(
			'pafe_image_select_field_background_color_normal',
			[
				'label' => __( 'Background Color', 'pafe' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'default' => '',
				'selectors' => [
					'{{WRAPPER}} ul.thumbnails.image_picker_selector .thumbnail' => 'background-color: {{VALUE}};',
				],
			]
		);

		$this->add_control(
			'pafe_image_select_field_text_color_normal',
			[
				'label' => __( 'Text Color', 'pafe' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'default' => '',
				'selectors' => [
					'{{WRAPPER}} ul.thumbnails.image_picker_selector .thumbnail p' => 'color: {{VALUE}};',
				],
			]
		);

		$this->end_controls_tab();

		$this->start_controls_tab(
			'pafe_image_select_field_active',
			[
				'label' => __( 'Active', 'elementor' ),
			]
		);

		$this->add_control(
			'pafe_image_select_field_border_active',
			[
				'label' => __( 'Item Border Type', 'pafe' ),
				'type' => \Elementor\Controls_Manager::SELECT,
				'options' => [
					'' => __( 'None', 'elementor' ),
					'solid' => _x( 'Solid', 'Border Control', 'elementor' ),
					'double' => _x( 'Double', 'Border Control', 'elementor' ),
					'dotted' => _x( 'Dotted', 'Border Control', 'elementor' ),
					'dashed' => _x( 'Dashed', 'Border Control', 'elementor' ),
					'groove' => _x( 'Groove', 'Border Control', 'elementor' ),
				],
				'selectors' => [
					'{{WRAPPER}} ul.thumbnails.image_picker_selector .thumbnail.selected' => 'border-style: {{VALUE}};',
				],
			]
		);

		$this->add_responsive_control(
			'pafe_image_select_field_border_width_active',
			[
				'label' => __( 'Item Border Width', 'pafe' ),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'selectors' => [
					'{{WRAPPER}} ul.thumbnails.image_picker_selector .thumbnail.selected' => 'border-width: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
				'condition' => [
					'pafe_image_select_field_border_active!' => '',
				],
			]
		);

		$this->add_control(
			'pafe_image_select_field_border_color_active',
			[
				'label' => __( 'Item Border Color', 'pafe' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'default' => '',
				'selectors' => [
					'{{WRAPPER}} ul.thumbnails.image_picker_selector .thumbnail.selected' => 'border-color: {{VALUE}};',
				],
				'condition' => [
					'pafe_image_select_field_border_active!' => '',
				],
			]
		);

		$this->add_control(
			'pafe_image_select_field_background_color_active',
			[
				'label' => __( 'Background Color', 'pafe' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'default' => '',
				'selectors' => [
					'{{WRAPPER}} ul.thumbnails.image_picker_selector .thumbnail.selected' => 'background-color: {{VALUE}};',
				],
			]
		);

		$this->add_control(
			'pafe_image_select_field_text_color_active',
			[
				'label' => __( 'Text Color', 'pafe' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'default' => '',
				'selectors' => [
					'{{WRAPPER}} ul.thumbnails.image_picker_selector .thumbnail.selected p' => 'color: {{VALUE}};',
				],
			]
		);

		$this->end_controls_tab();
		$this->end_controls_tabs();

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
			'pafe_conditional_logic_form_action',
			[
				'label' => __( 'Action', 'pafe' ),
				'label_block' => true,
				'type' => \Elementor\Controls_Manager::SELECT2,
				'multiple' => true,
				'options' => [
					'show' => 'Show this field',
					'set_value' => 'Set Value',
				],
				'default' => [
					'show',
				],
			]
		);

		$repeater->add_control(
			'pafe_conditional_logic_form_set_value',
			[
				'label' => __( 'Value', 'pafe' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'description' => __( 'E.g 10, John, unchecked, checked', 'pafe' ),
				'condition' => [
					'pafe_conditional_logic_form_action' => 'set_value',
				],
			]
		);

		$repeater->add_control(
			'pafe_conditional_logic_form_set_value_for',
			[
				'label' => __( 'Set Value For', 'pafe' ),
				'label_block' => true,
				'type' => \Elementor\Controls_Manager::TEXT,
				'placeholder' => __( 'Field ID', 'pafe' ),
				'condition' => [
					'pafe_conditional_logic_form_action' => 'set_value',
				],
			]
		);

		$repeater->add_control(
			'pafe_conditional_logic_form_if',
			[
				'label' => __( 'If', 'pafe' ),
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
			'section_style_piotnet_form_calculated_fields',
			[
				'label' => __( 'Calculated Fields', 'pafe' ),
				'tab' => \Elementor\Controls_Manager::TAB_STYLE,
				'condition' => [
					'field_type' => 'calculated_fields',
				]
			]
		);

		$this->add_control(
			'calculated_fields_color',
			[
				'label' => __( 'Text Color', 'elementor-pro' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .pafe-calculated-fields-form' => 'color: {{VALUE}};',
				],
				'scheme' => [
					'type' => \Elementor\Scheme_Color::get_type(),
					'value' => \Elementor\Scheme_Color::COLOR_3,
				],
				'condition' => [
					'field_type' => 'calculated_fields',
				]
			]
		);

		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name' => 'calculated_fields_typography',
				'selector' => '{{WRAPPER}} .pafe-calculated-fields-form',
				'scheme' => \Elementor\Scheme_Typography::TYPOGRAPHY_3,
				'condition' => [
					'field_type' => 'calculated_fields',
				]
			]
		);

		$this->end_controls_section();

		$this->start_controls_section(
			'section_style_piotnet_form_label',
			[
				'label' => __( 'Label', 'pafe' ),
				'tab' => \Elementor\Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_control(
			'heading_label',
			[
				'label' => __( 'Label', 'elementor-pro' ),
				'type' => \Elementor\Controls_Manager::HEADING,
				'separator' => 'before',
			]
		);

		$this->add_control(
			'label_spacing',
			[
				'label' => __( 'Spacing', 'elementor-pro' ),
				'type' => \Elementor\Controls_Manager::SLIDER,
				'default' => [
					'size' => 0,
				],
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 60,
					],
				],
				'selectors' => [
					'body.rtl {{WRAPPER}} .elementor-labels-inline .elementor-field-group > label' => 'padding-left: {{SIZE}}{{UNIT}};',
					// for the label position = inline option
					'body:not(.rtl) {{WRAPPER}} .elementor-labels-inline .elementor-field-group > label' => 'padding-right: {{SIZE}}{{UNIT}};',
					// for the label position = inline option
					'body {{WRAPPER}} .elementor-labels-above .elementor-field-group > label' => 'padding-bottom: {{SIZE}}{{UNIT}};',
					// for the label position = above option
				],
			]
		);

		$this->add_control(
			'label_color',
			[
				'label' => __( 'Text Color', 'elementor-pro' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .elementor-field-group > label, {{WRAPPER}} .elementor-field-subgroup label' => 'color: {{VALUE}};',
				],
				'scheme' => [
					'type' => \Elementor\Scheme_Color::get_type(),
					'value' => \Elementor\Scheme_Color::COLOR_3,
				],
			]
		);

		$this->add_control(
			'mark_required_color',
			[
				'label' => __( 'Mark Color', 'elementor-pro' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'default' => '',
				'selectors' => [
					'{{WRAPPER}} .elementor-mark-required .elementor-field-label:after' => 'color: {{COLOR}};',
				],
				'condition' => [
					'mark_required' => 'yes',
				],
			]
		);

		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name' => 'label_typography',
				'selector' => '{{WRAPPER}} .elementor-field-group > label',
				'scheme' => \Elementor\Scheme_Typography::TYPOGRAPHY_3,
			]
		);

		$this->end_controls_section();

		$this->start_controls_section(
			'section_style_piotnet_form_field',
			[
				'label' => __( 'Field', 'pafe' ),
				'tab' => \Elementor\Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_control(
			'field_text_color',
			[
				'label' => __( 'Text Color', 'elementor-pro' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .elementor-field-group .elementor-field' => 'color: {{VALUE}};',
				],
				'scheme' => [
					'type' => \Elementor\Scheme_Color::get_type(),
					'value' => \Elementor\Scheme_Color::COLOR_3,
				],
			]
		);

		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name' => 'field_typography',
				'selector' => '{{WRAPPER}} .elementor-field-group .elementor-field, {{WRAPPER}} .elementor-field-subgroup label',
				'scheme' => \Elementor\Scheme_Typography::TYPOGRAPHY_3,
			]
		);

		$this->add_control(
			'field_background_color',
			[
				'label' => __( 'Background Color', 'elementor-pro' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'default' => '#ffffff',
				'selectors' => [
					'{{WRAPPER}} .elementor-field-group:not(.elementor-field-type-upload) .elementor-field:not(.elementor-select-wrapper)' => 'background-color: {{VALUE}};',
					'{{WRAPPER}} .elementor-field-group .elementor-select-wrapper select' => 'background-color: {{VALUE}};',
				],
				'separator' => 'before',
			]
		);

		$this->add_responsive_control(
			'input_padding',
			[
				'label' => __( 'Input Padding', 'pafe' ),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', 'em', '%' ],
				'selectors' => [
					'{{WRAPPER}} .elementor-field-group:not(.elementor-field-type-upload) .elementor-field:not(.elementor-select-wrapper)' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
				'condition' => [
					'field_type!' => 'checkbox',
				],
			]
		);

		$this->add_control(
			'input_placeholder_color',
			[
				'label' => __( 'Input Placeholder Color', 'pafe' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'default' => '',
				'selectors' => [
					'{{WRAPPER}} .elementor-field-group:not(.elementor-field-type-upload) .elementor-field:not(.elementor-select-wrapper)::placeholder' => 'color: {{VALUE}}; opacity: 1;',
					'{{WRAPPER}} .elementor-field-group:not(.elementor-field-type-upload) .elementor-field:not(.elementor-select-wrapper)::-webkit-input-placeholder' => 'color: {{VALUE}}; opacity: 1;',
					'{{WRAPPER}} .elementor-field-group:not(.elementor-field-type-upload) .elementor-field:not(.elementor-select-wrapper)::-moz-placeholder' => 'color: {{VALUE}}; opacity: 1;',
					'{{WRAPPER}} .elementor-field-group:not(.elementor-field-type-upload) .elementor-field:not(.elementor-select-wrapper):-ms-input-placeholder' => 'color: {{VALUE}}; opacity: 1;',
					'{{WRAPPER}} .elementor-field-group:not(.elementor-field-type-upload) .elementor-field:not(.elementor-select-wrapper):-moz-placeholder' => 'color: {{VALUE}}; opacity: 1;',
				],
			]
		);

		$this->add_control(
			'field_border_type',
			[
				'label' => _x( 'Border Type', 'Border Control', 'elementor' ),
				'type' => \Elementor\Controls_Manager::SELECT,
				'options' => [
					'' => __( 'None', 'elementor' ),
					'solid' => _x( 'Solid', 'Border Control', 'elementor' ),
					'double' => _x( 'Double', 'Border Control', 'elementor' ),
					'dotted' => _x( 'Dotted', 'Border Control', 'elementor' ),
					'dashed' => _x( 'Dashed', 'Border Control', 'elementor' ),
					'groove' => _x( 'Groove', 'Border Control', 'elementor' ),
				],
				'selectors' => [
					'{{WRAPPER}} .elementor-field-group:not(.elementor-field-type-upload) .elementor-field:not(.elementor-select-wrapper)' => 'border-style: {{VALUE}};',
				],
			]
		);

		$this->add_responsive_control(
			'field_border_width',
			[
				'label' => _x( 'Width', 'Border Control', 'elementor' ),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'selectors' => [
					'{{WRAPPER}} .elementor-field-group:not(.elementor-field-type-upload) .elementor-field:not(.elementor-select-wrapper)' => 'border-width: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
				'condition' => [
					'field_border_type!' => '',
				],
			]
		);

		$this->add_control(
			'field_border_color',
			[
				'label' => _x( 'Color', 'Border Control', 'elementor' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'default' => '',
				'selectors' => [
					'{{WRAPPER}} .elementor-field-group:not(.elementor-field-type-upload) .elementor-field:not(.elementor-select-wrapper)' => 'border-color: {{VALUE}};',
				],
				'condition' => [
					'field_border_type!' => '',
				],
			]
		);

		$this->add_responsive_control(
			'field_border_radius',
			[
				'label' => __( 'Border Radius', 'elementor-pro' ),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%' ],
				'selectors' => [
					'{{WRAPPER}} .elementor-field-group:not(.elementor-field-type-upload) .elementor-field:not(.elementor-select-wrapper)' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
					'{{WRAPPER}} .elementor-field-group .elementor-select-wrapper select' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		$this->add_group_control(
			\Elementor\Group_Control_Box_Shadow::get_type(),
			[
				'name' => 'field_box_shadow',
				'label' => __( 'Box Shadow', 'plugin-domain' ),
				'selector' => '{{WRAPPER}} .elementor-field-group:not(.elementor-field-type-upload) .elementor-field:not(.elementor-select-wrapper)',
			]
		);

		$this->end_controls_section();
	}

	protected function make_textarea_field( $item, $item_index, $form_id, $tinymce = false ) {
		$this->add_render_attribute( 'textarea' . $item_index, [
			'class' => [
				'elementor-field-textual',
				'elementor-field',
				esc_attr( $item['css_classes'] ),
				'elementor-size-' . $item['input_size'],
			],
			'name' => $this->get_attribute_name( $item ),
			'id' => $this->get_attribute_id( $item ),
			'rows' => $item['rows'],
		] );

		if ( $item['field_placeholder'] ) {
			$this->add_render_attribute( 'textarea' . $item_index, 'placeholder', $item['field_placeholder'] );
		}

		if ( $tinymce ) {
			$this->add_render_attribute( 'textarea' . $item_index, 'data-pafe-form-builder-tinymce' );
		}

		if ( $item['field_required'] ) {
			$this->add_required_attribute( 'textarea' . $item_index );
		}

		$name = $this->get_field_name_shortcode($this->get_attribute_name( $item ));
		$value = $this->get_value_edit_post($name);

		if (empty($value)) {
			$value = $item['field_value'];
			$this->add_render_attribute( 'textarea' . $item_index, 'data-pafe-form-builder-default-value', $item['field_value'] );
		}

		// if ( ! empty( $value ) ) {
		// 	$this->add_render_attribute( 'input' . $i, 'value', $value );
		// }
		// $value = empty( $item['field_value'] ) ? '' : $item['field_value'];

		$this->add_render_attribute( 'textarea' . $item_index, 'data-pafe-form-builder-form-id', $form_id );
		return '<textarea ' . $this->get_render_attribute_string( 'textarea' . $item_index ) . '>' . $value . '</textarea>';
	}

	protected function make_select_field( $item, $i, $form_id, $image_select = false, $terms_select = false, $select_autocomplete = false ) {
		$this->add_render_attribute(
			[
				'select-wrapper' . $i => [
					'class' => [
						'elementor-field',
						'elementor-select-wrapper',
						esc_attr( $item['css_classes'] ),
					],
				],
				'select' . $i => [
					'name' => $this->get_attribute_name( $item ) . ( ! empty( $item['allow_multiple'] ) ? '[]' : '' ),
					'id' => $this->get_attribute_id( $item ),
					'class' => [
						'elementor-field-textual',
						'elementor-size-' . $item['input_size'],
					],
				],
			]
		);

		if ($image_select) {
			$list = $item['pafe_image_select_field_gallery'];	
			if( !empty($list) ) {
				$this->add_render_attribute(
					[
						'select' . $i => [
							'data-pafe-form-builder-image-select' => json_encode($list),
						],
					]
				);
			}
		}

		if ($select_autocomplete) {
			$this->add_render_attribute(
				[
					'select' . $i => [
						'data-pafe-form-builder-select-autocomplete' => '',
					],
				]
			);
		}

		if ( $item['field_required'] ) {
			$this->add_required_attribute( 'select' . $i );
		}

		if ( $item['allow_multiple'] ) {
			$this->add_render_attribute( 'select' . $i, 'multiple' );
			if ( ! empty( $item['select_size'] ) ) {
				$this->add_render_attribute( 'select' . $i, 'size', $item['select_size'] );
			}
		}

		$options = preg_split( "/\\r\\n|\\r|\\n/", $item['field_options'] );

		if ($terms_select) {
			if (!empty($item['field_taxonomy_slug'])) {
				$terms = get_terms( array(
				    'taxonomy' => $item['field_taxonomy_slug'],
				    'hide_empty' => false,
				) );

				if ( ! empty( $terms ) && ! is_wp_error( $terms ) ){
					$options = array();
				    foreach ( $terms as $term ) {
				        $options[] = $term->name . '|' . $term->slug;
				    }
				}
			}
		}

		if ( ! $options ) {
			return '';
		}

		ob_start();
		$this->add_render_attribute( 'select' . $i, 'data-pafe-form-builder-form-id', $form_id );

		$name = $this->get_field_name_shortcode($this->get_attribute_name( $item ));
		$value = $this->get_value_edit_post($name);

		if (empty($value)) {
			$this->add_render_attribute( 'select' . $i, 'data-pafe-form-builder-default-value', $item['field_value'] );
		}
		?>
		<div <?php echo $this->get_render_attribute_string( 'select-wrapper' . $i ); ?>>
			<select <?php echo $this->get_render_attribute_string( 'select' . $i ); ?>>
				<?php

				if ($select_autocomplete && !empty($item['field_placeholder'])) {
					array_unshift($options,$item['field_placeholder'] . '|' . '');
				}

				foreach ( $options as $key => $option ) {
					$option_id = $key;
					$option_value = esc_attr( $option );
					$option_label = esc_html( $option );

					if ( false !== strpos( $option, '|' ) ) {
						list( $label, $value ) = explode( '|', $option );
						$option_value = esc_attr( $value );
						$option_label = esc_html( $label );
					}

					$this->add_render_attribute( $option_id, 'value', $option_value );

					$name = $this->get_field_name_shortcode($this->get_attribute_name( $item ));
					$value = $this->get_value_edit_post($name);

					if (empty($value)) {
						$value = $item['field_value'];
					}

					if ( ! empty( $value ) && $option_value === $value ) {
						$this->add_render_attribute( $option_id, 'selected', 'selected' );
					}
					echo '<option ' . $this->get_render_attribute_string( $option_id ) . '>' . $option_label . '</option>';
				}
				?>
			</select>
		</div>
		<?php

		$select = ob_get_clean();
		return $select;
	}

	protected function make_radio_checkbox_field( $item, $item_index, $type, $form_id ) {
		$options = preg_split( "/\\r\\n|\\r|\\n/", $item['field_options'] );
		$html = '';
		if ( $options ) {
			$html .= '<div class="elementor-field-subgroup ' . esc_attr( $item['css_classes'] ) . ' ' . $item['inline_list'] . '">';
			foreach ( $options as $key => $option ) {
				$element_id = $item['field_id'] . $key;
				$html_id = $this->get_attribute_id( $item ) . '-' . $key;
				$option_label = $option;
				$option_value = $option;
				if ( false !== strpos( $option, '|' ) ) {
					list( $option_label, $option_value ) = explode( '|', $option );
				}

				$this->add_render_attribute(
					$element_id,
					[
						'type' => $type,
						'value' => $option_value,
						'data-value' => $option_value,
						'id' => $html_id,
						'name' => $this->get_attribute_name( $item ) . ( ( 'checkbox' === $type && count( $options ) > 1 ) ? '[]' : '' ),
					]
				);

				$name = $this->get_field_name_shortcode($this->get_attribute_name( $item ));
				$value = $this->get_value_edit_post($name);

				if (empty($value)) {
					$value = $item['field_value'];
				}

				if ( ! empty( $value ) && $option_value === $value ) {
					$this->add_render_attribute( $element_id, 'checked', 'checked' );
					$this->add_render_attribute( $element_id, 'data-checked', 'checked' );
				}

				if ( $item['field_required'] && 'radio' === $type ) {
					$this->add_required_attribute( $element_id );
				}
				$this->add_render_attribute( $element_id, 'data-pafe-form-builder-form-id', $form_id );

				$html .= '<span class="elementor-field-option"><input ' . $this->get_render_attribute_string( $element_id ) . '> <label for="' . $html_id . '">' . $option_label . '</label></span>';
			}
			$html .= '</div>';
		}

		return $html;
	}

	protected function form_fields_render_attributes( $i, $instance, $item ) {
		$this->add_render_attribute(
			[
				'field-group' . $i => [
					'class' => [
						'elementor-field-type-' . $item['field_type'],
						'elementor-field-group',
						'elementor-column',
						'elementor-field-group-' . $item['field_id'],
					],
				],
				'input' . $i => [
					'class' => [
						'elementor-field',
						'elementor-size-' . $item['input_size'],
						empty( $item['css_classes'] ) ? '' : esc_attr( $item['css_classes'] ),
					],
				],
				'range_slider' . $i => [
					'type' => 'text',
					'name' => $this->get_attribute_name( $item ),
					'id' => $this->get_attribute_id( $item ),
					'class' => [
						'elementor-field',
						'elementor-size-' . $item['input_size'],
						empty( $item['css_classes'] ) ? '' : esc_attr( $item['css_classes'] ),
					],
					'data-pafe-form-builder-range-slider' => $item['pafe_range_slider_field_options'],
				],
				'calculated_fields' . $i => [
					'type' => 'text',
					'name' => $this->get_attribute_name( $item ),
					'id' => $this->get_attribute_id( $item ),
					'class' => [
						'elementor-field',
						'elementor-size-' . $item['input_size'],
						empty( $item['css_classes'] ) ? '' : esc_attr( $item['css_classes'] ),
					],
					'data-pafe-form-builder-calculated-fields' => $item['pafe_calculated_fields_form_calculation'],
					'data-pafe-form-builder-calculated-fields-before' => $item['pafe_calculated_fields_form_before'],
					'data-pafe-form-builder-calculated-fields-after' => $item['pafe_calculated_fields_form_after'],
				],
				'label' . $i => [
					'for' => $this->get_attribute_id( $item ),
					'class' => 'elementor-field-label',
				],
			]
		);

		if ($item['field_type'] == 'honeypot') {
			$this->add_render_attribute(
				[
					'input' . $i => [
						'type' => 'text',
						'name' => 'form_fields[honeypot]',
						'id' => 'form-field-honeypot',
					],
				]
			);
		} elseif ($item['field_type'] == 'address_autocomplete') {
			$this->add_render_attribute(
				[
					'input' . $i => [
						'type' => 'text',
						'name' => $this->get_attribute_name( $item ),
						'id' => $this->get_attribute_id( $item ),
					],
				]
			);
		} else {
			$this->add_render_attribute(
				[
					'input' . $i => [
						'type' => $item['field_type'],
						'name' => $this->get_attribute_name( $item ),
						'id' => $this->get_attribute_id( $item ),
					],
				]
			);
		}

		if ( empty( $item['width'] ) ) {
			$item['width'] = '100';
		}

		$this->add_render_attribute( 'field-group' . $i, 'class', 'elementor-col-' . $item['width'] );

		if ( ! empty( $item['width_tablet'] ) ) {
			$this->add_render_attribute( 'field-group' . $i, 'class', 'elementor-md-' . $item['width_tablet'] );
		}

		if ( $item['allow_multiple'] ) {
			$this->add_render_attribute( 'field-group' . $i, 'class', 'elementor-field-type-' . $item['field_type'] . '-multiple' );
		}

		if ( ! empty( $item['width_mobile'] ) ) {
			$this->add_render_attribute( 'field-group' . $i, 'class', 'elementor-sm-' . $item['width_mobile'] );
		}

		if ( ! empty( $item['field_placeholder'] ) ) {
			$this->add_render_attribute( 'input' . $i, 'placeholder', $item['field_placeholder'] );
		}

		$name = $this->get_field_name_shortcode($this->get_attribute_name( $item ));
		$value = $this->get_value_edit_post($name);

		if (empty($value)) {
			$value = $item['field_value'];
			$this->add_render_attribute( 'input' . $i, 'data-pafe-form-builder-default-value', $item['field_value'] );
		}

		if ( ! empty( $value ) ) {
			$this->add_render_attribute( 'input' . $i, 'value', $value );
			$this->add_render_attribute( 'input' . $i, 'data-pafe-form-builder-value', $value );
		}

		if ( ! empty( $item['field_required'] ) ) {
			$class = 'elementor-field-required';
			if ( ! empty( $item['mark_required'] ) ) {
				$class .= ' elementor-mark-required';
			}
			$this->add_render_attribute( 'field-group' . $i, 'class', $class );
			$this->add_required_attribute( 'input' . $i );
		}

		if ( ! empty( $item['allow_multiple_upload'] ) ) {
			$this->add_render_attribute( 'input' . $i, 'multiple', 'multiple' );
			//$this->add_render_attribute( 'input' . $i, 'name', $this->get_attribute_name( $item ) . '[]', true );
		}

		if ( $item['field_type'] == 'upload' ) {
			$this->add_render_attribute( 'input' . $i, 'name', 'upload_field', true );
		}

		if ( ! empty( $item['attach_files'] ) ) {
			$this->add_render_attribute( 'input' . $i, 'data-attach-files', '', true );
		}

		if ( ! empty( $item['file_sizes'] ) ) {
			$this->add_render_attribute(
				'input' . $i,
				[
					'data-maxsize' => $item['file_sizes'],  //MB
					'data-maxsize-message' => $item['file_sizes_message'],
				]
			);
		}

		if ( ! empty( $item['file_types'] ) ) {
			$file_types = explode(',', $item['file_types']);
			$file_accepts = array('jpg','jpeg','png','gif','pdf','doc','docx','ppt','pptx','odt','avi','ogg','m4a','mov','mp3','mp4','mpg','wav','wmv');

			if (is_array($file_types)) {
				$file_types_output = '';
				foreach ($file_types as $file_type) {
					$file_type = trim($file_type);
					if (in_array($file_type, $file_accepts)) {
						$file_types_output .= '.' . $file_type . ',';
					}
				}

				//$this->add_render_attribute( 'input' . $i, 'accept', rtrim($file_types_output,',') );
				$this->add_render_attribute( 'input' . $i, 'data-accept', str_replace('.', '', rtrim($file_types_output,',')) );
			}

			$this->add_render_attribute(
				'input' . $i,
				[
					'data-types-message' => $item['file_types_message'],
				]
			);
			
		}

	}

	public function get_field_name_shortcode($content) {
		$field_name = str_replace('[field id=', '', $content);
		$field_name = str_replace(']', '', $field_name);
		$field_name = str_replace('"', '', $field_name);
		$field_name = str_replace('form_fields[', '', $field_name);
		//fix alert ]
		return trim($field_name);
	}

	public function get_value_edit_post($name) {
		$value = '';
		if (!empty($_GET['edit'])) {
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

							$widget = $elementor->elements_manager->create_element_instance( $form );
							$form['settings'] = $widget->get_active_settings();

							if(!empty($form['settings'])) {
								$sp_post_taxonomy = $form['settings']['submit_post_taxonomy'];
								$sp_title = $this->get_field_name_shortcode( $form['settings']['submit_post_title'] );
								$sp_content = $this->get_field_name_shortcode( $form['settings']['submit_post_content'] );
								$sp_terms = $form['settings']['submit_post_terms_list'];
								$sp_term = $this->get_field_name_shortcode( $form['settings']['submit_post_term'] );
								$sp_featured_image = $this->get_field_name_shortcode( $form['settings']['submit_post_featured_image'] );
								$sp_custom_fields = $form['settings']['submit_post_custom_fields_list'];

								if ($name == $sp_title) {
									$value = get_the_title($post_id);
								}

								if ($name == $sp_content) {
									$value = get_the_content(null,false,$post_id);
								}

								if ($name == $sp_term) {
									if (!empty($sp_post_taxonomy)) {
										$sp_post_taxonomy = explode('-', $sp_post_taxonomy);
										$sp_post_taxonomy = $sp_post_taxonomy[0];
										$terms = get_the_terms($post_id,$sp_post_taxonomy);
										if (!empty($terms) && ! is_wp_error( $terms )) {
											$value = $terms[0]->slug;
										}
									}
									
								}

								if (!empty($sp_terms)) {
									foreach ($sp_terms as $sp_terms_item) {
										$sp_post_taxonomy = explode('-', $sp_terms_item['submit_post_taxonomy']);
										$sp_post_taxonomy = $sp_post_taxonomy[0];
										$sp_term_slug = $sp_terms_item['submit_post_terms_slug'];
										$sp_term = get_field_name_shortcode( $sp_terms_item['submit_post_terms_field_id'] );

										if ($name == $sp_term) {
											$terms = get_the_terms($post_id,$sp_post_taxonomy);
											if (!empty($terms) && ! is_wp_error( $terms )) {
												$value = $terms[0]->slug;
											}
										}
									}
								}

								if ($name == $sp_featured_image) {
									$value = get_the_post_thumbnail_url($post_id,'full');
								}

								foreach ($sp_custom_fields as $sp_custom_field) {
									if ( !empty( $sp_custom_field['submit_post_custom_field'] ) ) {
										if ($name == $this->get_field_name_shortcode( $sp_custom_field['submit_post_custom_field_id'])) {
											if (function_exists('get_field') && $form['settings']['submit_post_custom_field_source'] == 'acf_field') {
												$value = get_field($sp_custom_field['submit_post_custom_field'],$post_id);
											} else {
												$value = get_post_meta($post_id,$sp_custom_field['submit_post_custom_field'],true);
											}
										}
									}
								}

							}
						}
					}
				}
			}
		}

		return $value;

	}

	public function render_plain_content() {}

	public function get_attribute_name( $item ) {
		return "form_fields[{$item['field_id']}]";
	}

	public function get_attribute_id( $item ) {
		return 'form-field-' . $item['field_id'];
	}

	private function add_required_attribute( $element ) {
		$this->add_render_attribute( $element, 'required', 'required' );
		$this->add_render_attribute( $element, 'aria-required', 'true' );
	}

	private function get_upload_file_size_options() {
		$max_file_size = wp_max_upload_size() / pow( 1024, 2 ); //MB

		$sizes = [];

		for ( $file_size = 1; $file_size <= $max_file_size; $file_size++ ) {
			$sizes[ $file_size ] = $file_size . 'MB';
		}

		return $sizes;
	}

	protected function render() {
		$settings = $this->get_settings_for_display();
		$item_index = 0;
		$item = $settings;
		$field_type = $settings['field_type'];
		$field_id = $settings['field_id'];
		$form_id = $settings['form_id'];
		$field_placeholder = $settings['field_placeholder'];
		$field_value = $settings['field_value'];
		$field_required = !(empty($settings['field_required'])) ? ' required="required" ' : '';

		$item['input_size'] = '';
		$this->form_fields_render_attributes( $item_index, '', $item );

		$list_conditional = $settings['pafe_conditional_logic_form_list'];	
		if( !empty($settings['pafe_conditional_logic_form_enable']) && !empty($list_conditional[0]['pafe_conditional_logic_form_if']) && !empty($list_conditional[0]['pafe_conditional_logic_form_comparison_operators']) ) {
			//$this->add_render_attribute( 'field-group' . $item_index, 'data-pafe-form-builder-conditional-logic', json_encode($list_conditional) );
			$this->add_render_attribute( 'field-group' . $item_index, [
				'data-pafe-form-builder-conditional-logic' => json_encode($list_conditional),
				'data-pafe-form-builder-conditional-logic-speed' => $settings['pafe_conditional_logic_form_speed'],
				'data-pafe-form-builder-conditional-logic-easing' => $settings['pafe_conditional_logic_form_easing'],
			] );
		}
	?>
		
		<div class="elementor-form-fields-wrapper elementor-labels-above">
			<div <?php echo $this->get_render_attribute_string( 'field-group' . $item_index ); ?>>
				<?php
				if ( $item['field_label'] && 'html' !== $item['field_type'] ) {
					echo '<label ' . $this->get_render_attribute_string( 'label' . $item_index );
					if ('honeypot' == $item['field_type']) {
						echo ' data-pafe-form-builder-honeypot';
					}
					echo '>' . $item['field_label'] . '</label>';
				}

				echo '<div data-pafe-form-builder-required></div>';

				switch ( $item['field_type'] ) :
					case 'html':
						echo '<div class="elementor-field elementor-size- " data-pafe-form-builder-html data-pafe-form-builder-form-id="' . $item['form_id'] . '" ' . 'id="form-field-' . $item['field_id'] . '" name="form_fields[' .  $item['field_id'] . ']">' . $item['field_html'] . '</div>';
						break;
					case 'textarea':
						echo $this->make_textarea_field( $item, $item_index, $form_id );
						break;

					case 'tinymce':
						echo $this->make_textarea_field( $item, $item_index, $form_id, true );
						?>
							<script type="text/javascript">
								tinymce.init({
									selector : '[data-pafe-form-builder-tinymce]',
									height: 500,
									menubar: false,
									plugins: [
										'advlist autolink lists link image charmap print preview anchor',
										'searchreplace visualblocks code fullscreen',
										'insertdatetime media table contextmenu paste code help youtube'
									],
									toolbar: 'bold italic link | alignleft aligncenter alignright alignjustify | bullist numlist | image youtube',
									image_title: true, 
									images_upload_url: '<?php echo plugins_url(); ?>/piotnet-addons-for-elementor-pro/inc/tinymce/tinymce-upload.php',
									file_picker_types: 'image',
									setup: function (editor) {
										editor.on('change', function () {
											tinymce.triggerSave();
										});
									}
								});

								tinymce.PluginManager.add('youtube', function(editor, url) {
								  // Add a button that opens a window
								  editor.addButton('youtube', {
								    text: false,
								    icon: 'media',
								    tooltip: 'Insert Youtube video',
								    onclick: function() {
								      // Open window
								      editor.windowManager.open({
								        title: 'Youtube video',
								        body: [
								          {type: 'textbox', name: 'title', label: 'URL of Youtube video'}
								        ],
								        onsubmit: function(e) {
								          // Insert content when the window form is submitted
								          var videoEmbed = e.data.title.split('watch?v='),
							          		  videoEmbedUrl = '';
								          if(videoEmbed.length == 2) {
								          	videoEmbedUrl = 'https://www.youtube.com/embed/' + videoEmbed[1] + '?rel=0';
								          }
								          editor.insertContent('[youtube]' + videoEmbedUrl + '[/youtube]');
								        }
								      });
								    }
								  });

								  // Adds a menu item to the tools menu
								  editor.addMenuItem('youtube', {
								    text: 'youtube plugin',
								    context: 'tools',
								    onclick: function() {
								      // Open window with a specific url
								      editor.windowManager.open({
								        title: 'TinyMCE site',
								        url: 'https://www.tinymce.com',
								        width: 800,
								        height: 600,
								        buttons: [{
								          text: 'Close',
								          onclick: 'close'
								        }]
								      });
								    }
								  });

								  return {
								    getMetadata: function () {
								      return  {
								        title: "youtube plugin",
								        url: "http://youtubeplugindocsurl.com"
								      };
								    }
								  };
								});
							</script>
						<?php
						break;

					case 'select':
						echo $this->make_select_field( $item, $item_index, $form_id );
						break;

					case 'select_autocomplete':
						echo $this->make_select_field( $item, $item_index, $form_id, false, false, true );
						break;

					case 'image_select':
						echo $this->make_select_field( $item, $item_index, $form_id, true );
						break;

					case 'terms_select':
						echo $this->make_select_field( $item, $item_index, $form_id, false, true );
						break;

					case 'radio':
					case 'checkbox':
						echo $this->make_radio_checkbox_field( $item, $item_index, $field_type, $form_id );
						break;
					case 'text':
					case 'email':
					case 'url':
					case 'password':
					case 'hidden':
						$this->add_render_attribute( 'input' . $item_index, 'data-pafe-form-builder-form-id', $form_id );
						echo '<input size="1" ' . $this->get_render_attribute_string( 'input' . $item_index ) . '>';	
						break;
					case 'honeypot':
						$this->add_render_attribute( 'input' . $item_index, 'data-pafe-form-builder-form-id', $form_id );
						echo '<input size="1" ' . $this->get_render_attribute_string( 'input' . $item_index ) . ' style="display:none !important;">';	
						break;
					case 'address_autocomplete':
						$this->add_render_attribute( 'input' . $item_index, 'data-pafe-form-builder-form-id', $form_id );
						$this->add_render_attribute( 'input' . $item_index, 'data-pafe-form-builder-address-autocomplete', $form_id );
						echo '<input size="1" ' . $this->get_render_attribute_string( 'input' . $item_index ) . '>';
						if ( ! empty( $item['google_maps'] ) ) {
							echo '<div class="pafe-form-builder-address-autocomplete-map" style="width: 100%;" data-pafe-form-builder-address-autocomplete-map></div><div class="infowindow-content"><img src="" width="16" height="16" id="place-icon"><span id="place-name"  class="title"></span><br><span id="place-address"></span></div>';
						}
						if (empty(esc_attr( get_option('piotnet-addons-for-elementor-pro-google-maps-api-key') ))) {
							echo __('Please go to Dashboard > Piotnet Addons > Google Maps Integration > Enter Google Maps API Key > Save Settings', 'pafe');
						}
						break;
					case 'image_upload':
						$name = $this->get_field_name_shortcode($this->get_attribute_name( $item ));
						$value = $this->get_value_edit_post($name);

						if(!empty($value)) {
							$images = explode(',', $value);
							foreach ($images as $image) {
								echo '<div class="pafe-form-builder-image-upload-placeholder pafe-form-builder-image-upload-uploaded" style="background-image:url('.$image.')" data-pafe-form-builder-image-upload-placeholder=""><input type="text" style="display:none;" data-pafe-form-builder-image-upload-item value="'.$image.'"><span class="pafe-form-builder-image-upload-button pafe-form-builder-image-upload-button--remove" data-pafe-form-builder-image-upload-button-remove><i class="fa fa-times" aria-hidden="true"></i></span><span class="pafe-form-builder-image-upload-button pafe-form-builder-image-upload-button--uploading" data-pafe-form-builder-image-upload-button-uploading><i class="fa fa-spinner fa-spin"></i></span></div>';
							}
						}

						echo '<label style="width: 25%" data-pafe-form-builder-image-upload-label ';
						if ( ! empty( $item['allow_multiple_upload'] ) ) {
							echo 'multiple="multiple"';
						} else {
							if(!empty($value)) {
								echo ' class="pafe-form-builder-image-upload-label-hidden" ';
							}
						}
						echo '>';
						echo '<input type="file" accept="image/*" name="upload" style="display:none;"';	
						if ( ! empty( $item['allow_multiple_upload'] ) ) {
							echo 'multiple="multiple"';
						}
						echo ' data-pafe-form-builder-image-upload>';
						echo '<div class="pafe-form-builder-image-upload-placeholder">';
						echo '<span class="pafe-form-builder-image-upload-button pafe-form-builder-image-upload-button--add" data-pafe-form-builder-image-upload-button-add><i class="fa fa-plus" aria-hidden="true"></i></span>';
						echo '<span class="pafe-form-builder-image-upload-button pafe-form-builder-image-upload-button--remove" data-pafe-form-builder-image-upload-button-remove><i class="fa fa-times" aria-hidden="true"></i></span>';
						echo '<span class="pafe-form-builder-image-upload-button pafe-form-builder-image-upload-button--uploading" data-pafe-form-builder-image-upload-button-uploading><i class="fa fa-spinner fa-spin"></i></span>';
						echo '</div>';
						echo "</label>";
						$this->add_render_attribute( 'input' . $item_index, 'data-pafe-form-builder-form-id', $form_id );
						echo '<div style="display: none">';
						echo '<input type="text" ' . $item_index . ' ' . $this->get_render_attribute_string( 'input' . $item_index ) . '>';
						echo '</div>';
						break;
					case 'upload':
						echo "<form action='#' class='pafe-form-builder-upload' data-pafe-form-builder-upload enctype='multipart/form-data'>";
						$this->add_render_attribute( 'input' . $item_index, 'data-pafe-form-builder-form-id', $form_id );
						echo '<input type="file" ' . $this->get_render_attribute_string( 'input' . $item_index ) . '>';
						echo "</form>";
						break;
					case 'stripe_payment':
						$this->add_render_attribute( 'input' . $item_index, 'data-pafe-form-builder-form-id', $form_id );
						$this->add_render_attribute( 'input' . $item_index, 'class', 'pafe-form-builder-stripe');
						$this->add_render_attribute( 'input' . $item_index, 'data-pafe-form-builder-stripe', '' );
						echo '<div ' . $this->get_render_attribute_string( 'input' . $item_index ) . '></div><div class="card-errors"></div>';	
						break;
					case 'range_slider':
						$this->add_render_attribute( 'range_slider' . $item_index, 'data-pafe-form-builder-form-id', $form_id );
						echo '<input size="1" ' . $this->get_render_attribute_string( 'range_slider' . $item_index ) . '>';	
						break;
					case 'calculated_fields':
						echo '<div class="pafe-calculated-fields-form" style="width: 100%">' . $item['pafe_calculated_fields_form_before'] . '<span class="pafe-calculated-fields-form__value"></span>' . $item['pafe_calculated_fields_form_after'] . '</div>';
						$this->add_render_attribute( 'calculated_fields' . $item_index, 'data-pafe-form-builder-form-id', $form_id );
						echo '<input style="display:none!important;" size="1" ' . $this->get_render_attribute_string( 'calculated_fields' . $item_index ) . '>';	
						break;
					case 'tel':
						$this->add_render_attribute( 'input' . $item_index, 'data-pafe-form-builder-form-id', $form_id );
						$this->add_render_attribute( 'input' . $item_index, 'pattern', '[0-9()#&+*-=.]+' );
						$this->add_render_attribute( 'input' . $item_index, 'title', __( 'Only numbers and phone characters (#, -, *, etc) are accepted.', 'elementor-pro' ) );
						echo '<input size="1" '. $this->get_render_attribute_string( 'input' . $item_index ) . '>';	
						break;
					case 'number':
						$this->add_render_attribute( 'input' . $item_index, 'data-pafe-form-builder-form-id', $form_id );
						$this->add_render_attribute( 'input' . $item_index, 'class', 'elementor-field-textual' );

						if ( isset( $item['field_min'] ) ) {
							$this->add_render_attribute( 'input' . $item_index, 'min', esc_attr( $item['field_min'] ) );
						}
						if ( isset( $item['field_max'] ) ) {
							$this->add_render_attribute( 'input' . $item_index, 'max', esc_attr( $item['field_max'] ) );
						}

						echo '<input ' . $this->get_render_attribute_string( 'input' . $item_index ) . '>';	
						break;
					case 'acceptance':
						$label = '';
						$this->add_render_attribute( 'input' . $item_index, 'class', 'elementor-acceptance-field' );
						$this->add_render_attribute( 'input' . $item_index, 'type', 'checkbox', true );
						$this->add_render_attribute( 'input' . $item_index, 'data-pafe-form-builder-form-id', $form_id );

						if ( ! empty( $item['acceptance_text'] ) ) {
							$label = '<label for="' . $this->get_attribute_id( $item ) . '">' . $item['acceptance_text'] . '</label>';
						}

						if ( ! empty( $item['checked_by_default'] ) ) {
							$this->add_render_attribute( 'input' . $item_index, 'checked', 'checked' );
						}

						echo '<div class="elementor-field-subgroup"><span class="elementor-field-option"><input ' . $this->get_render_attribute_string( 'input' . $item_index ) . '> ' . $label . '</span></div>';
						break;
					case 'date':
						$this->add_render_attribute( 'input' . $item_index, 'data-pafe-form-builder-form-id', $form_id );
						$this->add_render_attribute( 'input' . $item_index, 'class', 'elementor-field-textual elementor-date-field' );
						//$this->add_render_attribute( 'input' . $item_index, 'pattern', '[0-9]{4}-[0-9]{2}-[0-9]{2}' );
						if ( isset( $item['use_native_date'] ) && 'yes' === $item['use_native_date'] ) {
							$this->add_render_attribute( 'input' . $item_index, 'class', 'elementor-use-native' );
						}

						if ( ! empty( $item['min_date'] ) && empty( $item['min_date_current'] ) ) {
							$this->add_render_attribute( 'input' . $item_index, 'min', esc_attr( $item['min_date'] ) );
						}

						if ( ! empty( $item['min_date_current'] ) ) {
							$this->add_render_attribute( 'input' . $item_index, 'min', esc_attr( date( 'Y-m-d' ) ) );
						}

						if ( ! empty( $item['max_date'] )  && empty( $item['max_date_current'] ) ) {
							$this->add_render_attribute( 'input' . $item_index, 'max', esc_attr( $item['max_date'] ) );
						}

						if ( ! empty( $item['max_date_current'] ) ) {
							$this->add_render_attribute( 'input' . $item_index, 'max', esc_attr( date( 'Y-m-d' ) ) );
						}

						$this->add_render_attribute( 'input' . $item_index, 'data-date-format', esc_attr( get_option( 'date_format' ) ) );

						$this->add_render_attribute( 'input' . $item_index, 'data-time-format', esc_attr( get_option( 'time_format' ) ) );
						
						echo '<input ' . $this->get_render_attribute_string( 'input' . $item_index ) . '>';
						break;
					case 'time':
						$this->add_render_attribute( 'input' . $item_index, 'data-pafe-form-builder-form-id', $form_id );
						$this->add_render_attribute( 'input' . $item_index, 'class', 'elementor-field-textual elementor-time-field' );
						if ( isset( $item['use_native_time'] ) && 'yes' === $item['use_native_time'] ) {
							$this->add_render_attribute( 'input' . $item_index, 'class', 'elementor-use-native' );
						}
						echo '<input ' . $this->get_render_attribute_string( 'input' . $item_index ) . '>';
						break;
					default:
						$field_type = $item['field_type'];

						/**
						 * Elementor form field render.
						 *
						 * Fires when a field is rendered.
						 *
						 * The dynamic portion of the hook name, `$field_type`, refers to the field type.
						 *
						 * @since 1.0.0
						 *
						 * @param array $item       The field value.
						 * @param int   $item_index The field index.
						 * @param Form  $this       An instance of the form.
						 */
						do_action( "elementor_pro/forms/render_field/{$field_type}", $item, $item_index, $this );
				endswitch;
				?>
			</div>
		</div>
	<?php
	}
}
