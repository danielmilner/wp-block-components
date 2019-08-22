import React from 'react';
import PropTypes from 'prop-types';

const CoreHeadingBlock = props => {
	const { align, anchor, className, content, level } = props.attributes;
	const Heading = 'h' + level;
	const styles = {};
	const classes = ['core-block-heading'];

	if (className) {
		classes.push(className);
	}

	if (align) {
		styles.textAlign = align;
	}

	return (
		<Heading
			{...anchor && { id: anchor }}
			{...classes.length > 0 && { className: classes.join(' ') }}
			style={styles}
		>
			{content}
		</Heading>
	);
};

CoreHeadingBlock.propTypes = {
	attributes: PropTypes.shape({
		align: PropTypes.string,
		anchor: PropTypes.string,
		className: PropTypes.string,
		content: PropTypes.string,
		level: PropTypes.number,
	}),
};

CoreHeadingBlock.defaultProps = {
	attributes: {
		align: null,
		anchor: null,
		className: null,
		content: null,
		level: 2,
	},
};

export default CoreHeadingBlock;
