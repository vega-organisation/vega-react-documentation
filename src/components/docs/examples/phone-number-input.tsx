import { useState } from 'react';
import { PhoneNumberInput, type PhoneNumberInputProps } from 'vega-react-components';
import ExampleSection from '../ExampleSection';

function PhoneField({ value: initialValue, onChange, ...props }: PhoneNumberInputProps) {
	void onChange;
	const [value, setValue] = useState(initialValue);
	return <PhoneNumberInput {...props} value={value} onChange={setValue} />;
}

export default function PhoneNumberExamplesShowcase() {
	return (
		<div className="vega-doc-examples">
			<ExampleSection title="Default (FR)" column>
				<PhoneField label="Phone Number" placeholder="Ex: +33 6 12 34 56 78" defaultCountry="FR" />
			</ExampleSection>
			<ExampleSection title="Error" column>
				<PhoneField
					label="Emergency Contact"
					status="error"
					value="+33600"
					helperText="Please enter a valid phone number."
					defaultCountry="FR"
				/>
			</ExampleSection>
			<ExampleSection title="Success" column>
				<PhoneField
					label="Verified Number"
					status="success"
					value="+33612345678"
					defaultCountry="FR"
				/>
			</ExampleSection>
			<ExampleSection title="International (UK)" column>
				<PhoneField label="UK number" defaultCountry="GB" placeholder="Enter UK number" />
			</ExampleSection>
		</div>
	);
}
