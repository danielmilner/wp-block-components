import React from 'react';
import { storiesOf } from '@storybook/react';
import {
	withKnobs,
	boolean,
	select,
	text,
	color,
	number,
} from '@storybook/addon-knobs';
import CoreParagraphBlock from './CoreParagraphBlock';

const group = 'Attributes';

const helpText = `
This component uses [Gutenberg Theme Support](https://developer.wordpress.org/block-editor/developers/themes/theme-support/) classes so that you can style everything exactly how you want.
`;

storiesOf('CoreParagraphBlock', module)
	.addDecorator(withKnobs)
	.add(
		'Default',
		() => (
			<CoreParagraphBlock
				attributes={{
					align: select(
						'align',
						['left', 'center', 'right', null],
						null,
						group,
					),
					backgroundColor: text('backgroundColor', null, group),
					className: text('className', null, group),
					content: text(
						'content',
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum bibendum, purus nec viverra tempus, velit nibh posuere lectus, sit amet aliquet nunc arcu ut justo. Duis metus nulla, viverra id massa sit amet, dapibus mollis lorem. Phasellus rhoncus turpis ac dui tempus vehicula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer nulla eros, tincidunt a tortor id, cursus volutpat quam. Proin vestibulum dictum nisl, interdum ultrices ligula auctor in. Duis consectetur, sem eget rutrum posuere, diam urna convallis mi, id rutrum risus lectus sed turpis. Quisque eget massa id urna iaculis mattis vitae quis erat. Maecenas id risus sapien. Nulla neque lorem, ultrices ac ornare at, scelerisque id sem. Suspendisse potenti. Quisque tristique tellus eget mauris fermentum, ut tempus lorem rhoncus. Donec bibendum lacinia mi, venenatis maximus purus egestas sed.',
						group,
					),
					customBackgroundColor: color('customBackgroundColor', '', group),
					customFontSize: number('customFontSize', null, {}, group),
					customTextColor: color('customTextColor', '', group),
					direction: select('direction', ['ltr', 'rtl', null], null, group),
					dropCap: boolean('dropCap', false, group),
					fontSize: select(
						'fontSize',
						['small', 'normal', 'medium', 'large', 'huge'],
						'normal',
						group,
					),
					textColor: text('textColor', null, group),
				}}
			/>
		),
		{
			info: {
				text: helpText,
			},
		},
	);
