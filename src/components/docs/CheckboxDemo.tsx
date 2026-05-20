import { Checkbox } from 'vega-react-components';

export default function CheckboxDemo() {
	return (
		<div className="vega-preview vega-preview--column">
			<Checkbox label="Accepter les conditions" />
			<Checkbox label="Option activée" defaultChecked />
		</div>
	);
}
