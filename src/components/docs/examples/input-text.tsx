import { InputText } from 'vega-react-components';
import ExampleSection from '../ExampleSection';

export default function InputTextExamplesShowcase() {
	return (
		<div className="vega-doc-examples">
			<ExampleSection
				title="Default"
				column
				code={`<InputText placeholder="Ex: John Doe" />`}
			>
				<InputText placeholder="Ex: John Doe" />
			</ExampleSection>

			<ExampleSection
				title="With label"
				column
				code={`<InputText label="Username" placeholder="Enter your username" />`}
			>
				<InputText label="Username" placeholder="Enter your username" />
			</ExampleSection>

			<ExampleSection
				title="Error"
				column
				code={`<InputText\n  label="Email"\n  value="email@invalid"\n  status="error"\n  helperText="Please enter a valid email address."\n/>`}
			>
				<InputText
					label="Email"
					value="email@invalid"
					status="error"
					helperText="Please enter a valid email address."
				/>
			</ExampleSection>

			<ExampleSection
				title="Success"
				column
				code={`<InputText\n  label="Email"\n  value="john.doe@example.com"\n  status="success"\n  helperText="Email valid !"\n/>`}
			>
				<InputText
					label="Email"
					value="john.doe@example.com"
					status="success"
					helperText="Email valid !"
				/>
			</ExampleSection>

			<ExampleSection
				title="Sizes"
				column
				code={`<InputText label="Small" size="small" placeholder="Small" />\n<InputText label="Large" size="large" placeholder="Large" />`}
			>
				<InputText label="Small" size="small" placeholder="Small" />
				<InputText label="Large" size="large" placeholder="Large" />
			</ExampleSection>

			<ExampleSection
				title="Full width"
				column
				padded
				code={`<InputText label="Full Width" placeholder="Full width" fullWidth />`}
			>
				<InputText label="Full Width" placeholder="Full width" fullWidth />
			</ExampleSection>
		</div>
	);
}
