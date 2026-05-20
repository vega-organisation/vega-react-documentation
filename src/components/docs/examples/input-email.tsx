import { useState } from 'react';
import { InputEmail } from 'vega-react-components';
import ExampleSection from '../ExampleSection';

export default function InputEmailExamplesShowcase() {
	const [value, setValue] = useState('');
	return (
		<div className="vega-doc-examples">
			<ExampleSection title="Default" column>
				<InputEmail placeholder="exemple@email.com" />
			</ExampleSection>
			<ExampleSection title="With label" column>
				<InputEmail label="Email address" placeholder="exemple@email.com" />
			</ExampleSection>
			<ExampleSection title="Error" column>
				<InputEmail label="Email address" value="not-an-email" status="error" />
			</ExampleSection>
			<ExampleSection title="Success" column>
				<InputEmail
					label="Email address"
					value="john.doe@example.com"
					status="success"
					helperText="Email address is valid."
				/>
			</ExampleSection>
			<ExampleSection title="Interactive" column>
				<InputEmail
					label="Email address"
					placeholder="exemple@email.com"
					value={value}
					onChange={(e) => setValue(e.target.value)}
				/>
			</ExampleSection>
		</div>
	);
}
