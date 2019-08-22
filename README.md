# WordPress Block Components for React

[![NPM](https://img.shields.io/npm/v/wp-block-components)](https://npmjs.com/package/wp-block-components) ![npm](https://img.shields.io/npm/dt/wp-block-components) ![NPM](https://img.shields.io/npm/l/wp-block-components) [![GitHub issues](https://img.shields.io/github/issues-raw/danielmilner/wp-block-components)](https://github.com/danielmilner/wp-block-components/issues)

React components for displaying Gutenberg blocks from WordPress.

These components were built to be used in combination with [WPGraphQL](https://wpgraphql.com/) and [wp-graphql-gutenberg](https://github.com/pristas-peter/wp-graphql-gutenberg), but can be used in any React project.

Currently supported blocks:

* Code
* Heading
* Image
* List
* Paragraph

## Installation and usage
First, install __wp-block-components__ from npm.
```
yarn add wp-block-components
```
Next, import the component into your app.
```js
import { CoreBlock } from 'wp-block-components';
```

## Props
The component has only one prop.

* `block` - A block object returned from WPGraphQL.

### Block prop example
```js
{
	__typename: 'WordPress_CoreHeadingBlock',
	attributes: {
		align: null,
		anchor: null,
		className: null,
		content: 'This is a heading',
		level: 2,
	}
}
```

## Styles

These components use the [Gutenberg Theme Support](https://developer.wordpress.org/block-editor/developers/themes/theme-support/) classes, just like WordPress. Each block also has its own class in order to easily target your styles. For example, the `CoreHeadingBlock` component has a class of `core-block-heading`.