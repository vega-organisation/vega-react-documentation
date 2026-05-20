import { InputText } from 'vega-react-components';
import ExampleSection from '../ExampleSection';

export default function InputTextExamplesShowcase() {
	return (
		<div className="vega-doc-examples">
			<ExampleSection title="Default" column>
				<InputText placeholder="Ex: John Doe" />
			</ExampleSection>
			<ExampleSection title="With label" column>
				<InputText label="Username" placeholder="Enter your username" />
			</ExampleSection>
			<ExampleSection title="Error" column>
				<InputText
					label="Email"
					value="email@invalid"
					status="error"
					helperText="Please enter a valid email address."
				/>
			</ExampleSection>
			<ExampleSection title="Success" column>
				<InputText
					label="Email"
					value="john.doe@example.com"
					status="success"
					helperText="Email valid !"
				/>
			</ExampleSection>
			<ExampleSection title="Sizes" column>
				<InputText label="Small" size="small" placeholder="Small" />
				<InputText label="Large" size="large" placeholder="Large" />
			</ExampleSection>
			<ExampleSection title="Full width" column padded>
				<InputText label="Full Width" placeholder="Full width" fullWidth />
			</ExampleSection>
		</div>
	);
}
