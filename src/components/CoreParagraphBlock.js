import React from 'react';

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

	if (align) {
		styles.textAlign = align;
	}

	if (backgroundColor && props.block.colors[backgroundColor]) {
		styles.backgroundColor = props.block.colors[backgroundColor];
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

	if (dropCap && props.block.dropCap) {
		styles.initialLetter = props.block.dropCap;
	}

	if (fontSize && props.block.fontSize[fontSize]) {
		styles.fontSize = props.block.fontSize[fontSize];
	}

	if (textColor && props.block.colors[textColor]) {
		styles.color = props.block.colors[textColor];
	}

	return (
		<p
			{...className && { className: ClassName }}
			style={styles}
			dangerouslySetInnerHTML={{
				__html: content,
			}}
		/>
	);
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
		dropCap: null,
		fontSize: null,
		textColor: null,
	},
	block: {
		colors: {
			'pale-pink': 'rgb(247, 141, 167)',
			'vivid-red': 'rgb(207, 46, 46)',
			'luminous-vivid-orange': 'rgb(255, 105, 0)',
			'luminous-vivid-amber': 'rgb(252, 185, 0)',
			'light-green-cyan': 'rgb(123, 220, 181)',
			'vivid-green-cyan': 'rgb(0, 208, 132)',
			'pale-cyan-blue': 'rgb(142, 209, 252)',
			'vivid-cyan-blue': 'rgb(6, 147, 227)',
			'very-light-gray': 'rgb(238, 238, 238)',
			'cyan-bluish-gray': 'rgb(171, 184, 195)',
			'very-dark-gray': 'rgb(49, 49, 49)',
		},
		dropCap: 4,
		fontSize: {
			small: '14px',
			normal: '16px',
			medium: '18px',
			large: '20px',
			huge: '22px',
		},
	},
};

export default CoreParagraphBlock;
