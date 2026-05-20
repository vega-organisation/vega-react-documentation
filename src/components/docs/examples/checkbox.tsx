import { useState } from 'react';
import { Checkbox } from 'vega-react-components';
import ExampleSection from '../ExampleSection';

export default function CheckboxExamplesShowcase() {
	const [checked, setChecked] = useState(false);
	return (
		<div className="vega-doc-examples">
			<ExampleSection
				title="Default"
				column
				code={`<Checkbox label="Accepter les conditions" />`}
			>
				<Checkbox label="Accepter les conditions" />
			</ExampleSection>

			<ExampleSection
				title="Checked"
				column
				code={`<Checkbox label="Option activée" defaultChecked />`}
			>
				<Checkbox label="Option activée" defaultChecked />
			</ExampleSection>

			<ExampleSection
				title="Indeterminate"
				column
				code={`<Checkbox label="Sélection partielle" indeterminate />`}
			>
				<Checkbox label="Sélection partielle" indeterminate />
			</ExampleSection>

			<ExampleSection
				title="Disabled"
				column
				code={`<Checkbox label="Option indisponible" disabled />`}
			>
				<Checkbox label="Option indisponible" disabled />
			</ExampleSection>

			<ExampleSection
				title="With description"
				column
				code={`<Checkbox\n  label="S'abonner à la newsletter"\n  description="Vous recevrez un e-mail par semaine maximum."\n/>`}
			>
				<Checkbox
					label="S'abonner à la newsletter"
					description="Vous recevrez un e-mail par semaine maximum."
				/>
			</ExampleSection>

			<ExampleSection
				title="With error"
				column
				code={`<Checkbox\n  label="Accepter les conditions"\n  error="Vous devez cocher cette case pour continuer."\n/>`}
			>
				<Checkbox
					label="Accepter les conditions"
					error="Vous devez cocher cette case pour continuer."
				/>
			</ExampleSection>

			<ExampleSection
				title="Interactive"
				column
				code={`const [checked, setChecked] = useState(false);\n\n<Checkbox\n  label={checked ? 'Activé' : 'Désactivé'}\n  checked={checked}\n  onChange={() => setChecked(!checked)}\n/>`}
			>
				<Checkbox
					label={checked ? 'Activé' : 'Désactivé'}
					checked={checked}
					onChange={() => setChecked(!checked)}
				/>
			</ExampleSection>
		</div>
	);
}
