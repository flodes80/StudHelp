<?php
class PAFE_Conditional_Visibility extends \Elementor\Widget_Base {

	public function __construct() {
		parent::__construct();
		$this->init();
	}

	public function get_name() {
		return 'pafe-conditional-visibility';
	}

	public function register_controls( $element, $args ) {

		$element->start_controls_section(
			'pafe_conditional_visibility',
			[
				'label' => __( 'PAFE Conditional Visibility', 'pafe' ),
				'tab' => \Elementor\Controls_Manager::TAB_ADVANCED,
			]
		);

		$element->add_control(
			'pafe_conditional_visibility_enable',
			[
				'label' => __( 'Enable', 'pafe' ),
				'type' => \Elementor\Controls_Manager::SWITCHER,
				'default' => '',
				'label_on' => 'Yes',
				'label_off' => 'No',
				'return_value' => 'yes',
			]
		);

		global $wp_roles;
		$roles = $wp_roles->roles;
		$roles_array = array();
		$roles_array['all'] = 'All';
		$roles_array['non_logged_in'] = 'Non Logged';
		$roles_array['logged_in'] = 'Logged In';
		foreach ($roles as $key => $value) {
			$roles_array[$key] = $value['name'];
		}

		$element->add_control(
			'pafe_conditional_visibility_roles',
			[
				'label' => __( 'Visibility For User', 'pafe' ),
				'type' => \Elementor\Controls_Manager::SELECT2,
				'multiple' => true,
				'options' => $roles_array,
				'label_block' => true,
				'default' => [
					'all',
				],
				'condition' => [
					'pafe_conditional_visibility_enable' => 'yes',
				],
			]
		);

		$element->add_control(
			'pafe_conditional_visibility_by_backend',
			[
				'label' => __( 'Conditional Visibility By Custom Fields and URL Parameters', 'pafe' ),
				'type' => \Elementor\Controls_Manager::SWITCHER,
				'default' => '',
				'label_on' => 'Yes',
				'label_off' => 'No',
				'return_value' => 'yes',
				'condition' => [
					'pafe_conditional_visibility_enable' => 'yes',
				],
			]
		);

		$repeater = new \Elementor\Repeater();

		$repeater->add_control(
			'pafe_conditional_visibility_note',
			[
				'label' => __( 'Important Note', 'pafe' ),
				'type' => \Elementor\Controls_Manager::RAW_HTML,
				'raw' => __( 'If the widget form is the first widget in the page or post, please add any other widget like Heading above it and then click the Heading > Advanced > Responsive > Hide On Desktop, Tablet, Mobile. Then update page or post and refresh your browser. You can also disable Conditional Visibility feature in Dashboard > Piotnet Addons > Disable Conditional Visibility > Save Settings in header.', 'pafe' ),
			]
		);

		$repeater->add_control(
			'pafe_conditional_visibility_by_backend_select',
			[
				'label' => __( 'Custom Fields or URL Parameters', 'pafe' ),
				'type' => \Elementor\Controls_Manager::SELECT,
				'label_block' => true,
				'options' => [
					'custom_field' => __( 'Custom Field', 'pafe' ),
					'url_parameter' => __( 'URL Parameter', 'pafe' ),
				],
				'default' => 'custom_field',
			]
		);

		$repeater->add_control(
			'pafe_conditional_visibility_roles_custom_field_source',
			[
				'label' => __( 'Custom Fields', 'pafe' ),
				'type' => \Elementor\Controls_Manager::SELECT,
				'options' => [
					'post_custom_field' => __( 'Post Custom Field', 'pafe' ),
					'acf_field' => __( 'ACF Field', 'pafe' ),
				],
				'default' => 'post_custom_field',
				'condition' => [
					'pafe_conditional_visibility_by_backend_select' => 'custom_field',
				],
			]
		);

		$repeater->add_control(
			'pafe_conditional_visibility_roles_url_parameter',
			[
				'label' => __( 'URL Parameter', 'pafe' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'description' => __('E.g ref, yourparam','pafe'),
				'condition' => [
					'pafe_conditional_visibility_by_backend_select' => 'url_parameter',
				],
			]
		);

		$repeater->add_control(
			'pafe_conditional_visibility_roles_custom_field_key',
			[
				'label' => __( 'Custom Field Key', 'pafe' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'condition' => [
					'pafe_conditional_visibility_by_backend_select' => 'custom_field',
				],
			]
		);

		$repeater->add_control(
			'pafe_conditional_visibility_roles_custom_field_comparison_operators',
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
					'true' => __( 'true', 'pafe' ),
					'false' => __( 'false', 'pafe' ),
					'contains' => __( 'contains (ACF Checkbox)', 'pafe' ),
				],
				'default' => 'not-empty',
			]
		);

		$repeater->add_control(
			'pafe_conditional_visibility_roles_custom_field_type',
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
					'pafe_conditional_visibility_roles_custom_field_comparison_operators' => ['=','!=','>','>=','<','<=','contains'],
				],
			]
		);

		$repeater->add_control(
			'pafe_conditional_visibility_roles_custom_field_value',
			[
				'label' => __( 'Value', 'pafe' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'label_block' => true,
				'placeholder' => __( '50', 'pafe' ),
				'condition' => [
					'pafe_conditional_visibility_roles_custom_field_comparison_operators' => ['=','!=','>','>=','<','<=','contains'],
				],
			]
		);

		$repeater->add_control(
			'pafe_conditional_visibility_roles_and_or_operators',
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
			'pafe_conditional_visibility_by_backend_list',
			array(
				'type'    => Elementor\Controls_Manager::REPEATER,
				'fields'  => array_values( $repeater->get_controls() ),
				'title_field' => '{{{ pafe_conditional_visibility_roles_url_parameter }}} {{{ pafe_conditional_visibility_roles_custom_field_key }}} {{{ pafe_conditional_visibility_roles_custom_field_comparison_operators }}} {{{ pafe_conditional_visibility_roles_custom_field_value }}}',
				'condition' => [
					'pafe_conditional_visibility_enable' => 'yes',
					'pafe_conditional_visibility_by_backend' => 'yes',
				],
			)
		);

		$element->end_controls_section();

	}

	public function should_render( $should_render, $section ) {
		$settings = $section->get_settings();
		if ( 'yes' == $section->get_settings( 'pafe_conditional_visibility_enable' ) ) {
			$visibility_roles = $section->get_settings( 'pafe_conditional_visibility_roles' );
			$condition1 = false;
			$user = wp_get_current_user();
			$user_roles = $user->roles;
			if ( in_array('all', $visibility_roles) || in_array('logged_in', $visibility_roles) && is_user_logged_in() || in_array('non_logged_in', $visibility_roles) && !is_user_logged_in() || in_array($user_roles[0], $visibility_roles) ) {
				$condition1 = true;
			}

			$condition2 = true;

			if (!empty($settings['pafe_conditional_visibility_by_backend'])) {
				if ( array_key_exists( 'pafe_conditional_visibility_by_backend_list',$settings ) ) {
					$list = $settings['pafe_conditional_visibility_by_backend_list'];	
					if( !empty($list[0]['pafe_conditional_visibility_by_backend_select']) ) {
						$conditionals_count = count($list);
						$conditionals_and_or = '';
						$error = 0;
						$condition = false;
						foreach ($list as $item) {
							$conditionals_and_or = $item['pafe_conditional_visibility_roles_and_or_operators'];

							if ($item['pafe_conditional_visibility_by_backend_select'] == 'custom_field' && !empty($item['pafe_conditional_visibility_roles_custom_field_key'])) {
								
								$field_key = $item['pafe_conditional_visibility_roles_custom_field_key'];
								$field_source = $item['pafe_conditional_visibility_roles_custom_field_source'];
								$field_value = '';
								$comparison = $item['pafe_conditional_visibility_roles_custom_field_comparison_operators'];
								$comparison_value = $item['pafe_conditional_visibility_roles_custom_field_value'];
								$id = get_the_ID();

								if( $field_source == 'custom_field' ) {
									$field_value = get_post_meta( $id, $field_key, true );
								} else {
									if (function_exists('get_field')) {
										$field_value = get_field($field_key,$id);
									}
								}

								if($item['pafe_conditional_visibility_roles_custom_field_type'] == 'number') {
									$field_value == floatval($field_value);
								}

								if (is_array($field_value) && $comparison == 'contains') {
									if (in_array($comparison_value, $field_value)) {
										$condition = true;
									} else {
										$error++;
									}
								} else {
									if ($comparison == 'not-empty' && !empty($field_value) || $comparison == 'empty' && empty($field_value) || $comparison == 'true' && $field_value == true || $comparison == 'false' && $field_value == false || $comparison == '=' && $field_value == $comparison_value || $comparison == '!=' && $field_value != $comparison_value || $comparison == '>' && $field_value > $comparison_value || $comparison == '>=' && $field_value >= $comparison_value || $comparison == '<' && $field_value < $comparison_value || $comparison == '<=' && $field_value <= $comparison_value ) {
										$condition = true;
									} else {
										$error++;
									}
								}

							}
							
							if ($item['pafe_conditional_visibility_by_backend_select'] == 'url_parameter' && !empty($item['pafe_conditional_visibility_roles_url_parameter'])) {

								$url_parameter = $item['pafe_conditional_visibility_roles_url_parameter'];
								$comparison = $item['pafe_conditional_visibility_roles_custom_field_comparison_operators'];
								$comparison_value = $item['pafe_conditional_visibility_roles_custom_field_value'];

								if (!empty($_GET[$url_parameter])) {
									$field_value = $_GET[$url_parameter];
								}

								if($item['pafe_conditional_visibility_roles_custom_field_type'] == 'number') {
									$field_value == floatval($field_value);
								}

								if ($comparison == 'not-empty' && !empty($field_value) || $comparison == 'empty' && empty($field_value) || $comparison == 'true' && $field_value == true || $comparison == 'false' && $field_value == false || $comparison == '=' && $field_value == $comparison_value || $comparison == '!=' && $field_value != $comparison_value || $comparison == '>' && $field_value > $comparison_value || $comparison == '>=' && $field_value >= $comparison_value || $comparison == '<' && $field_value < $comparison_value || $comparison == '<=' && $field_value <= $comparison_value ) {
									$condition = true;
								} else {
									$error++;
								}

							}
						}

						if ($conditionals_and_or == 'or') {
	                        if ($conditionals_count <= $error) {
	                        	$condition2 = false; 
	                        }
	                    } 

	                    if ($conditionals_and_or == 'and') {
	                        if ($error != 0) {
	                            $condition2 = false; 
	                        }
	                    }

					}
				}
			}

			if ($condition1 == true && $condition2 == true) {
				return $should_render;
			} else {
				return false;
			}

		} else {
			return $should_render;
		}
	}

	protected function init() {
		add_action( 'elementor/element/section/section_advanced/after_section_end', [ $this, 'register_controls' ], 10, 2 );
		add_action( 'elementor/element/column/section_advanced/after_section_end', [ $this, 'register_controls' ], 10, 2 );
		add_action( 'elementor/element/common/_section_style/after_section_end', [ $this, 'register_controls' ], 10, 2 );

		add_filter( 'elementor/frontend/section/should_render', [ $this, 'should_render' ] , 10, 2 );
		add_filter( 'elementor/frontend/column/should_render', [ $this, 'should_render' ] , 10, 2 );
		add_filter( 'elementor/frontend/widget/should_render', [ $this, 'should_render' ] , 10, 2 );
		add_filter( 'elementor/frontend/repeater/should_render', [ $this, 'should_render' ] , 10, 2 );
	}

}