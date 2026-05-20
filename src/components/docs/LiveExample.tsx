import type { ReactNode } from 'react';

type LiveExampleProps = {
	children: ReactNode;
	column?: boolean;
	block?: boolean;
	padded?: boolean;
};

export default function LiveExample({ children, column, block, padded }: LiveExampleProps) {
	const className = [
		'vega-preview',
		column ? 'vega-preview--column' : '',
		block ? 'vega-preview--block' : '',
		padded ? 'vega-preview--padded' : '',
	]
		.filter(Boolean)
		.join(' ');

	return <div className={className}>{children}</div>;
}
