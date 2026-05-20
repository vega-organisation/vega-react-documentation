import { Button, Tooltip } from 'vega-react-components';
import ExampleSection from '../ExampleSection';

export default function TooltipExamplesShowcase() {
	return (
		<div className="vega-doc-examples">
			<ExampleSection title="Hover (top)">
				<Tooltip trigger="hover" placement="top" content="Tooltip on top">
					<Button>Hover me</Button>
				</Tooltip>
			</ExampleSection>
			<ExampleSection title="Click">
				<Tooltip trigger="click" placement="top" content="Press Escape to close">
					<Button>Click me</Button>
				</Tooltip>
			</ExampleSection>
			<ExampleSection title="Right-click">
				<Tooltip trigger="contextmenu" placement="right" content="Context menu trigger">
					<Button>Right-click me</Button>
				</Tooltip>
			</ExampleSection>
		</div>
	);
}
