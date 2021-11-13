# Build a Block Using Other Blocks

This plugin shows you how to build a very basic custom Gutenberg block using other blocks, and
the [Underpin](github.com/underpin-WP/underpin) Framework. A complete walkthrough on how this plugin was built,
including step-by-step instructions is available on [WP Dev Academy](https://www.wpdev.academy).

This plugin adds a single block, called a "featured item" to the list of available blocks. This block is made out of a
set of existing blocks, including a **heading block**, an **image block**, a **paragraph block**, and a
**button block**. These blocks cannot be moved, but you can completely configure the contents of each block.

This is a common scenario for websites that have certain patterns that they want to re-use throughout their site, and
a [block pattern](https://wordpress.org/support/article/block-pattern/) doesn't adequately lock the content down
well-enough.

## Installation

1. Set up Underpin. This can be done as a mu-plugin, or added directly to this site. See [Underpin's docs for more info](https://github.com/underpin-WP/underpin#installation)
2. clone this plugin in your WordPress `plugins` directory
`git clone git@github.com:wp-Dev-Academy/block-in-block.git`
3. Activate the plugin