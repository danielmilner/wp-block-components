import React from 'react';
import PropTypes from 'prop-types';

const CoreParagraphBlock = props => {
	const {
		align,
		backgroundColor,
		className,
		content,
		customBackgroundColor,
		customFontSize,
		customTextColor,
		direction,
		dropCap,
		fontSize,
		textColor,
	} = props.attributes;

	const styles = {};
	const classes = [];

	if (className) {
		classes.push(className);
	}

	if (align) {
		styles.textAlign = align;
	}

	if (backgroundColor) {
		classes.push(`has-${backgroundColor}-background-color`);
	}

	if (customBackgroundColor) {
		styles.backgroundColor = customBackgroundColor;
	}

	if (customFontSize) {
		styles.fontSize = customFontSize + 'px';
	}

	if (customTextColor) {
		styles.color = customTextColor;
	}

	if (direction) {
		styles.direction = direction;
	}

	if (dropCap) {
		classes.push(`has-drop-cap`);
	}

	if (fontSize) {
		classes.push(`has-${fontSize}-font-size`);
	}

	if (textColor) {
		classes.push(`has-${textColor}-color`);
	}

	return (
		<p
			className={classes.join(' ')}
			style={styles}
			dangerouslySetInnerHTML={{
				__html: content,
			}}
		/>
	);
};

CoreParagraphBlock.propTypes = {
	attributes: PropTypes.shape({
		align: PropTypes.string,
		backgroundColor: PropTypes.string,
		className: PropTypes.string,
		content: PropTypes.string,
		customBackgroundColor: PropTypes.string,
		customFontSize: PropTypes.string,
		customTextColor: PropTypes.string,
		direction: PropTypes.string,
		dropCap: PropTypes.boolean,
		fontSize: PropTypes.string,
		textColor: PropTypes.string,
	}),
};

CoreParagraphBlock.defaultProps = {
	attributes: {
		align: null,
		backgroundColor: null,
		className: null,
		content: '',
		customBackgroundColor: null,
		customFontSize: null,
		customTextColor: null,
		direction: null,
		dropCap: false,
		fontSize: null,
		textColor: null,
	},
};

export default CoreParagraphBlock;
