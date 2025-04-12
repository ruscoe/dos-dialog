<?php
/**
 * Plugin Name:       DOS Dialog
 * Description:       A Gutenberg block that displays your text in the form of an old MS DOS dialog box.
 * Version:           1.1.1
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Author:            Dan Ruscoe
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       dos-dialog
 *
 * @package           dos-dialog
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_dos_dialog_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'create_block_dos_dialog_block_init' );
