# WordPress Block Components for React

[![NPM](https://img.shields.io/npm/v/wp-block-components)](https://npmjs.com/package/wp-block-components) ![npm](https://img.shields.io/npm/dt/wp-block-components) ![NPM](https://img.shields.io/npm/l/wp-block-components) [![GitHub issues](https://img.shields.io/github/issues-raw/danielmilner/wp-block-components)](https://github.com/danielmilner/wp-block-components/issues)

React components for displaying Gutenberg blocks from WordPress.

These components were built to be used in combination with [WPGraphQL](https://wpgraphql.com/) and [wp-graphql-gutenberg](https://github.com/pristas-peter/wp-graphql-gutenberg), but can be used in any React project.

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