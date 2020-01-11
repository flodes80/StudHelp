<?php

class PAFE_Form_Builder_Conditional_Logic extends \Elementor\Widget_Base {

	public function __construct() {
		parent::__construct();
		$this->init();
	}

	public function get_name() {
		return 'pafe-form-builder-conditional-logic';
	}

	public function register_controls( $element, $args ) {

		$element->start_controls_section(
			'section_conditional_logic',
			[
				'label' => __( 'PAFE Form Builder Conditional Logic', 'pafe' ),
				'tab' => \Elementor\Controls_Manager::TAB_ADVANCED,
			]
		);

		$element->add_control(
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

		$element->add_control(
			'pafe_conditional_logic_form_form_id',
			[
				'label' => __( 'Form ID', 'pafe' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'condition' => [
					'pafe_conditional_logic_form_enable' => 'yes',
				],
			]
		);

		$element->add_control(
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

		$element->add_control(
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

		// $repeater->add_control(
		// 	'pafe_conditional_logic_form_action',
		// 	[
		// 		'label' => __( 'Action', 'pafe' ),
		// 		'label_block' => true,
		// 		'type' => \Elementor\Controls_Manager::SELECT2,
		// 		'multiple' => true,
		// 		'options' => [
		// 			'show' => 'Show this',
		// 		],
		// 		'default' => [
		// 			'show',
		// 		],
		// 	]
		// );

		// $repeater->add_control(
		// 	'pafe_conditional_logic_form_set_value',
		// 	[
		// 		'label' => __( 'Value', 'pafe' ),
		// 		'type' => \Elementor\Controls_Manager::TEXT,
		// 		'condition' => [
		// 			'pafe_conditional_logic_form_action' => 'set_value',
		// 		],
		// 	]
		// );

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

		$element->add_control(
			'pafe_conditional_logic_form_list',
			array(
				'type'    => Elementor\Controls_Manager::REPEATER,
				'fields'  => array_values( $repeater->get_controls() ),
				'title_field' => '{{{ pafe_conditional_logic_form_if }}} {{{ pafe_conditional_logic_form_comparison_operators }}} {{{ pafe_conditional_logic_form_value }}}',
			)
		);

		$element->end_controls_section();

	}

	public function before_render_element($element) {
		$settings = $element->get_settings();
		if (!empty($settings['pafe_conditional_logic_form_enable']) && !empty($settings['pafe_conditional_logic_form_form_id'])) {
			if ( array_key_exists( 'pafe_conditional_logic_form_list',$settings ) ) {
				$list = $settings['pafe_conditional_logic_form_list'];	
				if( !empty($list[0]['pafe_conditional_logic_form_if']) && !empty($list[0]['pafe_conditional_logic_form_comparison_operators']) ) {
					$element->add_render_attribute( '_wrapper', [
						'data-pafe-form-builder-conditional-logic' => json_encode($list),
						'data-pafe-form-builder-conditional-logic-not-field' => '',
						'data-pafe-form-builder-conditional-logic-not-field-form-id' => $settings['pafe_conditional_logic_form_form_id'],
						'data-pafe-form-builder-conditional-logic-speed' => $settings['pafe_conditional_logic_form_speed'],
						'data-pafe-form-builder-conditional-logic-easing' => $settings['pafe_conditional_logic_form_easing'],
					] );
				}
			}
		}
	}

	protected function init() {
		add_action( 'elementor/element/section/section_advanced/after_section_end', [ $this, 'register_controls' ], 10, 2 );
		add_action( 'elementor/frontend/section/before_render', [ $this, 'before_render_element'], 10, 1 );
	}

}