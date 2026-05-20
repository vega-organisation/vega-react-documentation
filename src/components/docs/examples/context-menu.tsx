import { Button, ContextMenu } from 'vega-react-components';
import ExampleSection from '../ExampleSection';

const ITEMS = [
	{ icon: '📄', label: 'Open', onClick: () => alert('Open') },
	{ icon: '✏️', label: 'Edit', onClick: () => alert('Edit') },
	{ icon: '🗑️', label: 'Delete', onClick: () => alert('Delete') },
];

export default function ContextMenuExamplesShowcase() {
	return (
		<div className="vega-doc-examples">
			<ExampleSection
				title="With menu items"
				code={`const items = [\n  { icon: '📄', label: 'Open', onClick: () => {} },\n  { icon: '✏️', label: 'Edit', onClick: () => {} },\n  { icon: '🗑️', label: 'Delete', onClick: () => {} },\n];\n\n<ContextMenu items={items}>\n  <Button variant="primary">Right-click me</Button>\n</ContextMenu>`}
			>
				<ContextMenu items={ITEMS}>
					<Button variant="primary">Right-click me</Button>
				</ContextMenu>
			</ExampleSection>
		</div>
	);
}
