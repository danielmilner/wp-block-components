import { graphql } from 'gatsby';

export const CoreHeadingBlockFragment = graphql`
	fragment CoreHeadingBlock on WordPress_CoreHeadingBlock {
		name
		attributes {
			__typename
			... on WordPress_CoreHeadingBlockAttributes {
				align
				anchor
				className
				content
				level
			}
		}
	}
`;
