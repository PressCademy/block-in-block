import { registerBlockType } from '@wordpress/blocks';
import metadata from '../block.json';
import { useBlockProps } from '@wordpress/block-editor'
import { InnerBlocks } from '@wordpress/block-editor';

registerBlockType( metadata, {

	edit: () => {
		const blockProps = useBlockProps()

		return <InnerBlocks
			{...useBlockProps}
			templateLock="all"
			template={[
				['core/heading', { placeholder: 'Featured Item Heading' }],
				['core/image'],
				['core/paragraph', { placeholder: 'Featured Item Content' }],
				['core/button', { placeholder: 'Featured Item CTA' }]
			]}/>
	},
	save: ( props ) => <InnerBlocks.Content/>
} );