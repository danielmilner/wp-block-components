# WordPress Block Components for React

React components for displaying Gutenberg blocks from WordPress.

Currently available components:

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
	CoreHeadingBlock,
	CoreParagraphBlock
} from 'wp-block-components';
```

## Props
Each components has two props.

* `attributes` - An object of block attributes returned from WordPress.
* `block` - An object of color and font settings from your WordPress theme.

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

### Block prop example
```js
{
	colors: {
		'pale-pink': 'rgb(247, 141, 167)',
		'vivid-red': 'rgb(207, 46, 46)',
		'luminous-vivid-orange': 'rgb(255, 105, 0)',
		'luminous-vivid-amber': 'rgb(252, 185, 0)',
		'light-green-cyan': 'rgb(123, 220, 181)',
		'vivid-green-cyan': 'rgb(0, 208, 132)',
		'pale-cyan-blue': 'rgb(142, 209, 252)',
		'vivid-cyan-blue': 'rgb(6, 147, 227)',
		'very-light-gray': 'rgb(238, 238, 238)',
		'cyan-bluish-gray': 'rgb(171, 184, 195)',
		'very-dark-gray': 'rgb(49, 49, 49)',
	},
	dropCap: 4,
	fontSize: {
		small: '14px',
		normal: '16px',
		medium: '18px',
		large: '20px',
		huge: '22px',
	},
},
```
