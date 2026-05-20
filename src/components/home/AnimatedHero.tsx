import { useEffect, useRef, useState } from 'react';
// @ts-expect-error - JSX module without types
import ShapeGrid from './ShapeGrid.jsx';

const COMPONENTS = [
	'Button',
	'Card',
	'Dialog',
	'Toast',
	'Tooltip',
	'Loader',
	'Checkbox',
	'InputText',
	'InputEmail',
	'PhoneInput',
	'ContextMenu',
	'FormWrapper',
	'ModelViewer',
];

export default function AnimatedHero() {
	const [index, setIndex] = useState(0);
	const heroRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const t = window.setInterval(() => {
			setIndex((i) => (i + 1) % COMPONENTS.length);
		}, 1800);
		return () => window.clearInterval(t);
	}, []);

	useEffect(() => {
		const el = heroRef.current;
		if (!el) return;

		let raf = 0;
		const onMove = (e: PointerEvent) => {
			if (raf) cancelAnimationFrame(raf);
			raf = requestAnimationFrame(() => {
				const rect = el.getBoundingClientRect();
				const x = ((e.clientX - rect.left) / rect.width) * 100;
				const y = ((e.clientY - rect.top) / rect.height) * 100;
				el.style.setProperty('--vega-mx', `${x}%`);
				el.style.setProperty('--vega-my', `${y}%`);
			});
		};

		window.addEventListener('pointermove', onMove);
		return () => {
			window.removeEventListener('pointermove', onMove);
			if (raf) cancelAnimationFrame(raf);
		};
	}, []);

	useEffect(() => {
		const onScroll = () => {
			if (window.scrollY > 24) {
				document.body.classList.add('vega-scrolled');
			} else {
				document.body.classList.remove('vega-scrolled');
			}
		};
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => {
			window.removeEventListener('scroll', onScroll);
			document.body.classList.remove('vega-scrolled');
		};
	}, []);

	return (
		<div className="vega-hero" ref={heroRef}>
			<div className="vega-hero__bg" aria-hidden="true">
				<div className="vega-hero__shapegrid">
					<ShapeGrid
						speed={0.4}
						squareSize={48}
						direction="diagonal"
						borderColor="rgba(139, 92, 246, 0.45)"
						hoverFillColor="rgba(139, 92, 246, 0.6)"
						shape="square"
						hoverTrailAmount={8}
					/>
				</div>
				<div className="vega-hero__aurora vega-hero__aurora--1" />
				<div className="vega-hero__aurora vega-hero__aurora--2" />
				<div className="vega-hero__spotlight" />
				<div className="vega-hero__vignette" />
			</div>

			<div className="vega-hero__inner">
				<div className="vega-hero__badge">
					<span className="vega-hero__badge-dot" />
					v1.1.0 — production ready
				</div>

				<h1 className="vega-hero__title">
					Build with{' '}
					<span className="vega-hero__title-rotator">
						<span key={index} className="vega-hero__title-word">
							{COMPONENTS[index]}
						</span>
					</span>
					<br />
					<span className="vega-hero__title-gradient">in seconds.</span>
				</h1>

				<p className="vega-hero__tagline">
					13 production-ready React components. TypeScript-first. SSR-safe.
					<br />
					Dark mode included out of the box.
				</p>

				<div className="vega-hero__actions">
					<a href="/getting-started/" className="vega-hero__cta vega-hero__cta--primary">
						<span>Get started</span>
						<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
							<line x1="5" y1="12" x2="19" y2="12" />
							<polyline points="12 5 19 12 12 19" />
						</svg>
					</a>
					<a href="/components/button/" className="vega-hero__cta vega-hero__cta--ghost">
						Browse components
					</a>
				</div>

				<div className="vega-hero__codeblock" aria-hidden="true">
					<div className="vega-hero__codeblock-bar">
						<span className="vega-hero__codeblock-dot vega-hero__codeblock-dot--r" />
						<span className="vega-hero__codeblock-dot vega-hero__codeblock-dot--y" />
						<span className="vega-hero__codeblock-dot vega-hero__codeblock-dot--g" />
						<span className="vega-hero__codeblock-name">App.tsx</span>
					</div>
					<pre className="vega-hero__codeblock-pre">
						<code>
							<span className="vega-tk-keyword">import</span>{' '}
							<span className="vega-tk-punct">{'{'}</span> Button, Dialog, Toast{' '}
							<span className="vega-tk-punct">{'}'}</span>{' '}
							<span className="vega-tk-keyword">from</span>{' '}
							<span className="vega-tk-string">'vega-react-components'</span>
							<span className="vega-tk-punct">;</span>
							{'\n\n'}
							<span className="vega-tk-keyword">export function</span>{' '}
							<span className="vega-tk-fn">App</span>
							<span className="vega-tk-punct">()</span>{' '}
							<span className="vega-tk-punct">{'{'}</span>
							{'\n  '}
							<span className="vega-tk-keyword">return</span>{' '}
							<span className="vega-tk-punct">(</span>
							{'\n    '}
							<span className="vega-tk-punct">&lt;</span>
							<span className="vega-tk-tag">Button</span>{' '}
							<span className="vega-tk-attr">variant</span>
							<span className="vega-tk-punct">=</span>
							<span className="vega-tk-string">"primary"</span>
							<span className="vega-tk-punct">&gt;</span>
							{'\n      '}Ship it{'\n    '}
							<span className="vega-tk-punct">&lt;/</span>
							<span className="vega-tk-tag">Button</span>
							<span className="vega-tk-punct">&gt;</span>
							{'\n  '}
							<span className="vega-tk-punct">);</span>
							{'\n'}
							<span className="vega-tk-punct">{'}'}</span>
						</code>
					</pre>
				</div>
			</div>
		</div>
	);
}
