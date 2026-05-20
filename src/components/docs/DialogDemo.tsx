import { useState } from 'react';
import { Button, Dialog } from 'vega-react-components';

export default function DialogDemo() {
	const [open, setOpen] = useState(false);
	return (
		<div className="vega-preview">
			<Button variant="primary" onClick={() => setOpen(true)}>
				Open dialog
			</Button>
			<Dialog open={open} onClose={() => setOpen(false)}>
				<Dialog.Header onClose={() => setOpen(false)}>Demo</Dialog.Header>
				<Dialog.Body>Dialog preview</Dialog.Body>
			</Dialog>
		</div>
	);
}
