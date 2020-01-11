<?php

class PAFE_Css_Filters extends \Elementor\Widget_Base {

	public function __construct() {
		parent::__construct();
		$this->init();
	}

	public function get_name() {
		return 'pafe-css-filters';
	}

	public function register_controls( $element, $section_id) {
		$element->start_controls_section(
			'pafe_css_filters_section',
			[
				'label' => __( 'PAFE Css Filters', 'pafe' ),
				'tab' => \Elementor\Controls_Manager::TAB_ADVANCED,
			]
		);

		$element->start_controls_tabs( 'pafe_css_filters_tabs' );

		$element->start_controls_tab( 'normal',
			[
				'label' => __( 'Normal', 'elementor' ),
			]
		);

		$element->add_group_control(
			\Elementor\Group_Control_Css_Filter::get_type(),
			[
				'name' => 'pafe_css_filters',
				'selector' => '{{WRAPPER}}',
				'label' => __( 'Css Filters For All', 'pafe' ),
			]
		);

		$element->add_group_control(
			\Elementor\Group_Control_Css_Filter::get_type(),
			[
				'name' => 'pafe_css_filters_for_image',
				'selector' => '{{WRAPPER}} img',
				'label' => __( 'Css Filters For Image', 'pafe' ),
			]
		);

		$element->end_controls_tab();

		$element->start_controls_tab( 'hover',
			[
				'label' => __( 'Hover', 'elementor' ),
			]
		);

		$element->add_group_control(
			\Elementor\Group_Control_Css_Filter::get_type(),
			[
				'name' => 'pafe_css_filters_hover',
				'selector' => '{{WRAPPER}}:hover',
				'label' => __( 'Css Filters For All', 'pafe' ),
			]
		);

		$element->add_group_control(
			\Elementor\Group_Control_Css_Filter::get_type(),
			[
				'name' => 'pafe_css_filters_for_image_hover',
				'selector' => '{{WRAPPER}} img:hover',
				'label' => __( 'Css Filters For Image', 'pafe' ),
			]
		);

		$element->end_controls_tab();

		$element->end_controls_tabs();

		$element->end_controls_section();
	}

	protected function init() {
		add_action( 'elementor/element/section/section_advanced/after_section_end', [ $this, 'register_controls' ], 10, 2 );
		add_action( 'elementor/element/column/section_advanced/after_section_end', [ $this, 'register_controls' ], 10, 2 );
		add_action( 'elementor/element/common/_section_background/after_section_end', [ $this, 'register_controls' ], 10, 2 );
	}

}