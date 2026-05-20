import { Button, ToastProvider, useToast } from 'vega-react-components';
import ExampleSection from '../ExampleSection';

function ToastButtons() {
	const { add } = useToast();
	return (
		<div className="vega-preview vega-preview--toast-actions">
			<Button
				variant="success"
				onClick={() =>
					add({ variant: 'success', title: 'Saved!', message: 'Your changes have been saved.' })
				}
			>
				Success
			</Button>
			<Button
				variant="danger"
				onClick={() => add({ variant: 'error', title: 'Error', message: 'Something went wrong.' })}
			>
				Error
			</Button>
			<Button
				variant="secondary"
				onClick={() => add({ variant: 'warning', message: 'Session expiring soon.' })}
			>
				Warning
			</Button>
			<Button
				variant="primary"
				onClick={() => add({ variant: 'info', message: 'Update available.' })}
			>
				Info
			</Button>
			<Button
				variant="primary"
				onClick={() => {
					add({ variant: 'success', message: 'Profile updated.' });
					add({ variant: 'error', title: 'Upload failed', message: 'File too large.' });
					add({ variant: 'warning', message: 'Storage almost full.' });
					add({ variant: 'info', message: 'New message.' });
				}}
			>
				All at once
			</Button>
		</div>
	);
}

export default function ToastExamplesShowcase() {
	return (
		<ToastProvider position="top-right">
			<div className="vega-doc-examples">
				<ExampleSection title="Click to show toasts">
					<ToastButtons />
				</ExampleSection>
			</div>
		</ToastProvider>
	);
}
