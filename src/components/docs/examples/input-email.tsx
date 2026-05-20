import { useState } from 'react';
import { InputEmail } from 'vega-react-components';
import ExampleSection from '../ExampleSection';

export default function InputEmailExamplesShowcase() {
	const [value, setValue] = useState('');
	return (
		<div className="vega-doc-examples">
			<ExampleSection
				title="Default"
				column
				code={`<InputEmail placeholder="exemple@email.com" />`}
			>
				<InputEmail placeholder="exemple@email.com" />
			</ExampleSection>

			<ExampleSection
				title="With label"
				column
				code={`<InputEmail label="Email address" placeholder="exemple@email.com" />`}
			>
				<InputEmail label="Email address" placeholder="exemple@email.com" />
			</ExampleSection>

			<ExampleSection
				title="Error"
				column
				code={`<InputEmail label="Email address" value="not-an-email" status="error" />`}
			>
				<InputEmail label="Email address" value="not-an-email" status="error" />
			</ExampleSection>

			<ExampleSection
				title="Success"
				column
				code={`<InputEmail\n  label="Email address"\n  value="john.doe@example.com"\n  status="success"\n  helperText="Email address is valid."\n/>`}
			>
				<InputEmail
					label="Email address"
					value="john.doe@example.com"
					status="success"
					helperText="Email address is valid."
				/>
			</ExampleSection>

			<ExampleSection
				title="Interactive"
				column
				code={`const [value, setValue] = useState('');\n\n<InputEmail\n  label="Email address"\n  placeholder="exemple@email.com"\n  value={value}\n  onChange={(e) => setValue(e.target.value)}\n/>`}
			>
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
