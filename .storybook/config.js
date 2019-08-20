import { addDecorator, configure } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import './index.css';

addDecorator(
	withInfo({
		inline: true,
		maxPropsIntoLine: 1,
		maxPropObjectKeys: 30,
	}),
);

// automatically import all files ending in *.stories.js
const req = require.context('../src/components', true, /\.stories\.js$/);
function loadStories() {
	req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
