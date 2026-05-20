import { useState } from 'react';
import { PhoneNumberInput, type PhoneNumberInputProps } from 'vega-react-components';
import ExampleSection from '../ExampleSection';

type PhoneFieldProps = Omit<PhoneNumberInputProps, 'onChange'> & {
	onChange?: PhoneNumberInputProps['onChange'];
};

function PhoneField({ value: initialValue, ...props }: PhoneFieldProps) {
	const [value, setValue] = useState(initialValue);
	return <PhoneNumberInput {...props} value={value} onChange={setValue} />;
}

export default function PhoneNumberExamplesShowcase() {
	return (
		<div className="vega-doc-examples">
			<ExampleSection
				title="Default (FR)"
				column
				code={`<PhoneNumberInput\n  label="Phone Number"\n  placeholder="Ex: +33 6 12 34 56 78"\n  defaultCountry="FR"\n  value={value}\n  onChange={setValue}\n/>`}
			>
				<PhoneField label="Phone Number" placeholder="Ex: +33 6 12 34 56 78" defaultCountry="FR" />
			</ExampleSection>

			<ExampleSection
				title="Error"
				column
				code={`<PhoneNumberInput\n  label="Emergency Contact"\n  status="error"\n  value="+33600"\n  helperText="Please enter a valid phone number."\n  defaultCountry="FR"\n  onChange={setValue}\n/>`}
			>
				<PhoneField
					label="Emergency Contact"
					status="error"
					value="+33600"
					helperText="Please enter a valid phone number."
					defaultCountry="FR"
				/>
			</ExampleSection>

			<ExampleSection
				title="Success"
				column
				code={`<PhoneNumberInput\n  label="Verified Number"\n  status="success"\n  value="+33612345678"\n  defaultCountry="FR"\n  onChange={setValue}\n/>`}
			>
				<PhoneField
					label="Verified Number"
					status="success"
					value="+33612345678"
					defaultCountry="FR"
				/>
			</ExampleSection>

			<ExampleSection
				title="International (UK)"
				column
				code={`<PhoneNumberInput\n  label="UK number"\n  defaultCountry="GB"\n  placeholder="Enter UK number"\n  value={value}\n  onChange={setValue}\n/>`}
			>
				<PhoneField label="UK number" defaultCountry="GB" placeholder="Enter UK number" />
			</ExampleSection>
		</div>
	);
}
