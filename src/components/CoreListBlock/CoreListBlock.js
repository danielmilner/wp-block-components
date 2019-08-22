import React from 'react';
import PropTypes from 'prop-types';

const CoreListBlock = props => {
	const { className, ordered, values } = props.attributes;
	const classes = ['core-block-list'];

	if (className) {
		classes.push(className);
	}

	const List = ordered ? 'ol' : 'ul';

	return (
		<List
			{...classes.length > 0 && { className: classes.join(' ') }}
			dangerouslySetInnerHTML={{ __html: values }}
		/>
	);
};

CoreListBlock.propTypes = {
	attributes: PropTypes.shape({
		className: PropTypes.string,
		ordered: PropTypes.boolean,
		values: PropTypes.string,
	}),
};

CoreListBlock.defaultProps = {
	attributes: {
		className: null,
		ordered: false,
		values: null,
	},
};

export default CoreListBlock;
