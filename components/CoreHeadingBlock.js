import React from 'react';

const CoreHeadingBlock = props => {
	const Heading = 'h' + level;
	return (
		<Heading
			{...anchor && { id: anchor }}
			{...className && { className: ClassName }}
		>
			{content}
		</Heading>
	);
};

CoreHeadingBlock.defaultProps = {
	align: null,
	anchor: null,
	className: null,
	content: null,
	level: '2',
};

export default CoreHeadingBlock;
