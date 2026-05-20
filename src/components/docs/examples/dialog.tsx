import { useState } from 'react';
import { Button, Dialog } from 'vega-react-components';
import type { DialogSize } from 'vega-react-components';
import ExampleSection from '../ExampleSection';

export default function DialogExamplesShowcase() {
	const [open, setOpen] = useState(false);
	const [size, setSize] = useState<DialogSize | null>(null);

	return (
		<div className="vega-doc-examples">
			<ExampleSection title="Confirm dialog">
				<Button variant="primary" onClick={() => setOpen(true)}>
					Open dialog
				</Button>
				<Dialog open={open} onClose={() => setOpen(false)}>
					<Dialog.Header onClose={() => setOpen(false)}>Confirm action</Dialog.Header>
					<Dialog.Body>Are you sure? This cannot be undone.</Dialog.Body>
					<Dialog.Footer>
						<Button variant="secondary" onClick={() => setOpen(false)}>
							Cancel
						</Button>
						<Button variant="danger" onClick={() => setOpen(false)}>
							Delete
						</Button>
					</Dialog.Footer>
				</Dialog>
			</ExampleSection>
			<ExampleSection title="Sizes">
				{(['sm', 'md', 'lg'] as const).map((s) => (
					<Button key={s} variant="secondary" size="small" onClick={() => setSize(s)}>
						{s}
					</Button>
				))}
				<Dialog open={size !== null} onClose={() => setSize(null)} size={size ?? 'md'}>
					<Dialog.Header onClose={() => setSize(null)}>Size: {size}</Dialog.Header>
					<Dialog.Body>Dialog size preview.</Dialog.Body>
				</Dialog>
			</ExampleSection>
		</div>
	);
}
