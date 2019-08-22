import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, object } from '@storybook/addon-knobs';

import CoreBlock from './CoreBlock';

const group = 'Props';

const block = {
	__typename: '??_CoreHeadingBlock',
	attributes: {
		align: 'left',
		anchor: null,
		className: null,
		content: 'This is a heading',
		level: 2,
	},
};

const helpText = `
This component can be used to render any of the other components by passing the entire block object from GraphQL.
`;

storiesOf('CoreBlock', module)
	.addDecorator(withKnobs)
	.add('Default', () => <CoreBlock block={object('block', block, group)} />, {
		info: {
			text: helpText,
		},
		knobs: {
			escapeHTML: false,
		},
	});
