import React from 'react';
import PropTypes from 'prop-types';

import CoreCodeBlock from '../CoreCodeBlock/CoreCodeBlock';
import CoreHeadingBlock from '../CoreHeadingBlock/CoreHeadingBlock';
import CoreImageBlock from '../CoreImageBlock/CoreImageBlock';
import CoreListBlock from '../CoreListBlock/CoreListBlock';
import CoreParagraphBlock from '../CoreParagraphBlock/CoreParagraphBlock';

const CoreBlock = props => {
	const { __typename, attributes } = props.block;

	if (__typename.endsWith('CoreCodeBlock')) {
		return <CoreCodeBlock attributes={attributes} />;
	}

	if (__typename.endsWith('CoreHeadingBlock')) {
		return <CoreHeadingBlock attributes={attributes} />;
	}

	if (__typename.endsWith('CoreImageBlock')) {
		return <CoreImageBlock attributes={attributes} />;
	}

	if (__typename.endsWith('CoreListBlock')) {
		return <CoreListBlock attributes={attributes} />;
	}

	if (__typename.endsWith('CoreParagraphBlock')) {
		return <CoreParagraphBlock attributes={attributes} />;
	}

	return null;
};

CoreBlock.propTypes = {
	block: PropTypes.shape({
		__typename: PropTypes.string.isRequired,
		attributes: PropTypes.object.isRequired,
	}).isRequired,
};

CoreBlock.defaultProps = {
	block: {
		__typename: null,
		attributes: null,
	},
};

export default CoreBlock;
