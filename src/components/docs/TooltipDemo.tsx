import { Button, Tooltip } from 'vega-react-components';

export default function TooltipDemo() {
	return (
		<div className="vega-preview">
			<Tooltip content="Tooltip on top" placement="top">
				<Button>Hover me</Button>
			</Tooltip>
		</div>
	);
}
