<?php
/*
Plugin Name: Blocks in Block
Description: Example plugin containing a set of existing blocks inside another block
Version: 1.0.0
Author: Alex Standiford
Text Domain: bib
Domain Path: /languages
Requires at least: 5.1
Requires PHP: 7.0
Author URI: https://www.wpdev.academy
*/

use Underpin\Abstracts\Underpin;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Fetches the instance of the plugin.
 * This function makes it possible to access everything else in this plugin.
 * It will automatically initiate the plugin, if necessary.
 * It also handles autoloading for any class in the plugin.
 *
 * @since 1.0.0
 *
 * @return \Underpin\Factories\Underpin_Instance The bootstrap for this plugin.
 */
function bib() {
	return Underpin::make_class( [
		'root_namespace'      => 'BIB',
		'text_domain'         => 'bib',
		'minimum_php_version' => '7.0',
		'minimum_wp_version'  => '5.1',
		'version'             => '1.0.0',
	] )->get( __FILE__ );
}

// Lock and load.
bib()->blocks()->add( 'featured_item', [
	'type'        => bib()->dir() . 'block.json',
	'description' => 'Featured item, including a simple heading, an image, some content, and a Call to Action',
	'name'        => 'Featured Item block',
] );