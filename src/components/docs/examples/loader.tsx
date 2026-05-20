import { useEffect, useState } from 'react';
import { Button, Loader } from 'vega-react-components';
import ExampleSection from '../ExampleSection';

export default function LoaderExamplesShowcase() {
	const [open, setOpen] = useState(false);
	useEffect(() => {
		if (!open) return;
		const t = window.setTimeout(() => setOpen(false), 2500);
		return () => window.clearTimeout(t);
	}, [open]);

	return (
		<div className="vega-doc-examples">
			<ExampleSection title="Spinner">
				<Loader variant="spinner" />
			</ExampleSection>
			<ExampleSection title="Skeleton">
				<Loader variant="skeleton" width="240px" height="1rem" />
			</ExampleSection>
			<ExampleSection title="Progress" block padded>
				<div style={{ width: '320px' }}>
					<Loader variant="progress" value={65} />
				</div>
			</ExampleSection>
			<ExampleSection title="Overlay">
				<Button variant="primary" onClick={() => setOpen(true)}>
					Trigger overlay (2.5s)
				</Button>
				{open && <Loader variant="spinner" overlay />}
			</ExampleSection>
		</div>
	);
}
