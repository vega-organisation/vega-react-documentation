import { useState } from 'react';
import { Checkbox } from 'vega-react-components';
import ExampleSection from '../ExampleSection';

export default function CheckboxExamplesShowcase() {
	const [checked, setChecked] = useState(false);
	return (
		<div className="vega-doc-examples">
			<ExampleSection title="Default" column>
				<Checkbox label="Accepter les conditions" />
			</ExampleSection>
			<ExampleSection title="Checked" column>
				<Checkbox label="Option activée" defaultChecked />
			</ExampleSection>
			<ExampleSection title="Indeterminate" column>
				<Checkbox label="Sélection partielle" indeterminate />
			</ExampleSection>
			<ExampleSection title="Disabled" column>
				<Checkbox label="Option indisponible" disabled />
			</ExampleSection>
			<ExampleSection title="With description" column>
				<Checkbox
					label="S'abonner à la newsletter"
					description="Vous recevrez un e-mail par semaine maximum."
				/>
			</ExampleSection>
			<ExampleSection title="With error" column>
				<Checkbox
					label="Accepter les conditions"
					error="Vous devez cocher cette case pour continuer."
				/>
			</ExampleSection>
			<ExampleSection title="Interactive" column>
				<Checkbox
					label={checked ? 'Activé' : 'Désactivé'}
					checked={checked}
					onChange={() => setChecked(!checked)}
				/>
			</ExampleSection>
		</div>
	);
}
