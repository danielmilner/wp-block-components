import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';

import CoreListBlock from './CoreListBlock';

const group = 'Props';

storiesOf('CoreListBlock', module)
	.addDecorator(withKnobs)
	.add(
		'Default',
		() => (
			<CoreListBlock
				attributes={{
					className: text('className', null, group),
					ordered: boolean('ordered', false, group),
					values: text(
						'values',
						'<li>One</li><li>Two</li><li>Three</li>',
						group,
					),
				}}
			/>
		),
		{
			knobs: {
				escapeHTML: false,
			},
		},
	);
