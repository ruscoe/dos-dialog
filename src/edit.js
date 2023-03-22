/**
 * WordPress components that create the necessary UI elements for the block
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-components/
 */
import { TextControl } from '@wordpress/components';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @param {Object}   props               Properties passed to the function.
 * @param {Object}   props.attributes    Available block attributes.
 * @param {Function} props.setAttributes Function that updates individual attributes.
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( { attributes, setAttributes } ) {
	const blockProps = useBlockProps();
	return (
		<div { ...blockProps }>
			<div class="wp-dos-dialog-title">
				<TextControl
					value={ attributes.window_title }
					onChange={ ( val ) =>
						setAttributes( { window_title: val } )
					}
				/>
			</div>
			<div class="wp-dos-dialog-inner">
				<div class="wp-dos-dialog-message">
					<RichText
						value={ attributes.message }
						allowedFormats={ [
							'core/bold',
							'core/italic',
							'core/strikethrough',
						] }
						onChange={ ( val ) =>
							setAttributes( { message: val } )
						}
					/>
				</div>
			</div>
		</div>
	);
}
