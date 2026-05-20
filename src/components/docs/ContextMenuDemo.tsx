import { Button, ContextMenu } from 'vega-react-components';

export default function ContextMenuDemo() {
	return (
		<div className="vega-preview">
			<ContextMenu
				items={[
					{ icon: '📄', label: 'Open', onClick: () => {} },
					{ icon: '🗑️', label: 'Delete', onClick: () => {} },
				]}
			>
				<Button variant="primary">Right-click me</Button>
			</ContextMenu>
		</div>
	);
}
