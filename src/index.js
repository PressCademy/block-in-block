import { registerBlockType } from '@wordpress/blocks'
import metadata from '../block.json'
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor'

registerBlockType( metadata, {

	edit: () => {
		const blockProps = useBlockProps()
		return (
			<div {...blockProps}>
				<InnerBlocks
					templateLock="all"
					template={[
						['core/heading', { level: 3, placeholder: 'Featured Item Heading' }],
						['core/image'],
						['core/paragraph', { placeholder: 'Featured Item Content' }],
						['core/button', { placeholder: 'Featured Item CTA' }]
					]}
				/>
			</div>
		)
	},

	save: () => {
		const blockProps = useBlockProps.save()

		return (
			<div {...blockProps}>
				<InnerBlocks.Content/>
			</div>
		)
	}
} )
