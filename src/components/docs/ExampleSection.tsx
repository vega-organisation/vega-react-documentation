import type { ReactNode } from 'react';
import LiveExample from './LiveExample';

type ExampleSectionProps = {
	title: string;
	children: ReactNode;
	column?: boolean;
	block?: boolean;
	padded?: boolean;
};

export default function ExampleSection({
	title,
	children,
	column,
	block,
	padded,
}: ExampleSectionProps) {
	return (
		<section className="vega-doc-example">
			<h3 className="vega-doc-example__title">{title}</h3>
			<LiveExample column={column} block={block} padded={padded}>
				{children}
			</LiveExample>
		</section>
	);
}
