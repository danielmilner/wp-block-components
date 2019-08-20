# WordPress Block Components for React

React components for displaying Gutenberg blocks from WordPress.

Currently available components:

* CoreCodeBlock
* CoreHeadingBlock
* CoreParagraphBlock

## Installation and usage
First, install __wp-block-components__ from npm.
```
yarn add wp-block-components
```
Next, import the components into your app.
```js
import {
	CoreCodeBlock,
	CoreHeadingBlock,
	CoreParagraphBlock
} from 'wp-block-components';
```

## Props
Each components has only one prop.

* `attributes` - An object of block attributes returned from WordPress.

### Attribute prop example
```js
{
	align: null,
	backgroundColor: null,
	className: null,
	content: '',
	customBackgroundColor: null,
	customFontSize: null,
	customTextColor: null,
	direction: null,
	dropCap: null,
	fontSize: null,
	textColor: null,
}
```

## Styles

These components uses [Gutenberg Theme Support](https://developer.wordpress.org/block-editor/developers/themes/theme-support/) classes so that you can style everything exactly how you want.