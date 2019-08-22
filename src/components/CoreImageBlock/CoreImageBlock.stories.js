import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, text } from '@storybook/addon-knobs';
import CoreImageBlock from './CoreImageBlock';

const group = 'Props';

storiesOf('CoreImageBlock', module)
	.addDecorator(withKnobs)
	.add('Default', () => (
		<CoreImageBlock
			attributes={{
				align: select(
					'align',
					['left', 'center', 'right', 'wide', 'full', null],
					null,
					group,
				),
				alt: text('alt', null, group),
				caption: text('caption', null, group),
				className: text('className', null, group),
				height: text('height', null, group),
				href: text('href', null, group),
				linkClass: text('linkClass', null, group),
				linkDestination: text('linkDestination', null, group),
				linkTarget: text('linkTarget', null, group),
				rel: text('rel', null, group),
				url: text('url', 'https://picsum.photos/300/200', group),
				width: text('width', null, group),
			}}
		/>
	));
