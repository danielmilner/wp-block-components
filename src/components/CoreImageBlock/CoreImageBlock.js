import React from 'react';
import PropTypes from 'prop-types';

const CoreImageBlock = props => {
	const {
		align,
		alt,
		caption,
		className,
		height,
		href,
		id,
		linkClass,
		linkDestination,
		linkTarget,
		rel,
		url,
		width,
	} = props.attributes;

	const blockClass = 'core-block-image';

	const classes = [];

	if (className) {
		classes.push(className);
	}

	if (align) {
		classes.push(`align${align}`);
	}

	const image = (
		<img
			{...alt && { alt: alt }}
			{...url && { src: url }}
			{...width && { width: width }}
			{...height && { height: height }}
		/>
	);

	const figure = (
		<>
			{href ? (
				<a
					{...linkClass && { className: linkClass }}
					{...href && { href: href }}
					{...linkTarget && { target: linkTarget }}
					{...rel && { rel: rel }}
				>
					{image}
				</a>
			) : (
				image
			)}
			{caption ? <figcaption>{caption}</figcaption> : null}
		</>
	);

	if ('left' === align || 'center' === align || 'right' === align) {
		return (
			<div className={blockClass}>
				<figure {...classes.length > 0 && { className: classes.join(' ') }}>
					{figure}
				</figure>
			</div>
		);
	}

	classes.push(blockClass);

	return (
		<figure {...classes.length > 0 && { className: classes.join(' ') }}>
			{figure}
		</figure>
	);
};

CoreImageBlock.propTypes = {
	attributes: PropTypes.shape({
		align: PropTypes.string,
		alt: PropTypes.string,
		caption: PropTypes.string,
		className: PropTypes.string,
		height: PropTypes.string,
		href: PropTypes.string,
		linkClass: PropTypes.string,
		linkDestination: PropTypes.string,
		linkTarget: PropTypes.string,
		rel: PropTypes.string,
		url: PropTypes.string,
		width: PropTypes.string,
	}),
};

CoreImageBlock.defaultProps = {
	attributes: {
		align: null,
		alt: null,
		caption: null,
		className: null,
		height: null,
		href: null,
		linkClass: null,
		linkDestination: null,
		linkTarget: null,
		rel: null,
		url: null,
		width: null,
	},
};

export default CoreImageBlock;
