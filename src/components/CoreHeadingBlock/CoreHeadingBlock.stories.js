import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, select, text } from '@storybook/addon-knobs';

import CoreHeadingBlock from './CoreHeadingBlock';

const group = 'Attributes';

storiesOf('CoreHeadingBlock', module)
	.addDecorator(withKnobs)
	.add('Default', () => (
		<CoreHeadingBlock
			attributes={{
				content: text('content', 'This is a heading', group),
				align: select('align', ['left', 'center', 'right', null], null, group),
				anchor: text('anchor', null, group),
				className: text('className', null, group),
				level: select('level', ['1', '2', '3', '4', '5', '6'], '2', group),
			}}
		/>
	));
