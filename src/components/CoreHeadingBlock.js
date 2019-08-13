import React from 'react';

const CoreHeadingBlock = props => {
	const { align, anchor, className, content, level } = props.attributes;
	const Heading = 'h' + level;
	const styles = {};

	if (align) {
		styles.textAlign = align;
	}

	return (
		<Heading
			{...anchor && { id: anchor }}
			{...className && { className: ClassName }}
			style={styles}
		>
			{content}
		</Heading>
	);
};

CoreHeadingBlock.defaultProps = {
	attributes: {
		align: null,
		anchor: null,
		className: null,
		content: null,
		level: '2',
	},
};

export default CoreHeadingBlock;
