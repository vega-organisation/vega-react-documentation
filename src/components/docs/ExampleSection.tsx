import { useState, type ReactNode } from 'react';
import LiveExample from './LiveExample';

type ExampleSectionProps = {
	title: string;
	children: ReactNode;
	code?: string;
	column?: boolean;
	block?: boolean;
	padded?: boolean;
};

function CopyButton({ text }: { text: string }) {
	const [copied, setCopied] = useState(false);

	const handleCopy = () => {
		navigator.clipboard.writeText(text).then(() => {
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		});
	};

	return (
		<button className={`vega-copy-btn${copied ? ' vega-copy-btn--copied' : ''}`} onClick={handleCopy} aria-label="Copy code">
			{copied ? (
				<>
					<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
					Copied
				</>
			) : (
				<>
					<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="9" y="9" width="13" height="13" rx="2" ry="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>
					Copy
				</>
			)}
		</button>
	);
}

export default function ExampleSection({
	title,
	children,
	code,
	column,
	block,
	padded,
}: ExampleSectionProps) {
	const [tab, setTab] = useState<'preview' | 'code'>('preview');

	if (!code) {
		return (
			<section className="vega-doc-example">
				<h3 className="vega-doc-example__title">{title}</h3>
				<LiveExample column={column} block={block} padded={padded}>
					{children}
				</LiveExample>
			</section>
		);
	}

	return (
		<section className="vega-doc-example">
			<h3 className="vega-doc-example__title">{title}</h3>
			<div className="vega-example-box">
				<div className="vega-tab-bar" role="tablist">
					<button
						role="tab"
						aria-selected={tab === 'preview'}
						className={`vega-tab${tab === 'preview' ? ' vega-tab--active' : ''}`}
						onClick={() => setTab('preview')}
					>
						Preview
					</button>
					<button
						role="tab"
						aria-selected={tab === 'code'}
						className={`vega-tab${tab === 'code' ? ' vega-tab--active' : ''}`}
						onClick={() => setTab('code')}
					>
						Code
					</button>
				</div>
				{tab === 'preview' ? (
					<LiveExample column={column} block={block} padded={padded}>
						{children}
					</LiveExample>
				) : (
					<div className="vega-code-panel">
						<div className="vega-code-panel__toolbar">
							<span className="vega-code-panel__lang">tsx</span>
							<CopyButton text={code.trim()} />
						</div>
						<pre className="vega-code-pre">
							<code>{code.trim()}</code>
						</pre>
					</div>
				)}
			</div>
		</section>
	);
}
