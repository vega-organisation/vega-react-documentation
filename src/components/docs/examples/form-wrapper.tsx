import { useState } from 'react';
import { Button, FormWrapper, InputText } from 'vega-react-components';
import ExampleSection from '../ExampleSection';

export default function FormWrapperExamplesShowcase() {
	const [submitted, setSubmitted] = useState(false);
	return (
		<div className="vega-doc-examples">
			<ExampleSection
				title="Login form"
				column
				padded
				code={`<FormWrapper onSubmit={() => setSubmitted(true)}>\n  <InputText label="Email" placeholder="you@example.com" fullWidth />\n  <InputText label="Password" type="password" placeholder="••••••••" fullWidth />\n  <Button type="submit" fullWidth>Se connecter</Button>\n</FormWrapper>`}
			>
				<FormWrapper onSubmit={() => setSubmitted(true)}>
					<InputText label="Email" placeholder="you@example.com" fullWidth />
					<InputText label="Password" type="password" placeholder="••••••••" fullWidth />
					<Button type="submit" fullWidth>
						Se connecter
					</Button>
					{submitted && (
						<p style={{ color: '#22c55e', margin: 0, fontSize: '0.875rem' }}>Formulaire soumis !</p>
					)}
				</FormWrapper>
			</ExampleSection>

			<ExampleSection
				title="With error"
				column
				padded
				code={`<FormWrapper onSubmit={() => {}} error="Identifiants incorrects.">\n  <InputText label="Email" fullWidth status="error" />\n  <Button type="submit" fullWidth>Retry</Button>\n</FormWrapper>`}
			>
				<FormWrapper onSubmit={() => {}} error="Identifiants incorrects.">
					<InputText label="Email" fullWidth status="error" />
					<Button type="submit" fullWidth>
						Retry
					</Button>
				</FormWrapper>
			</ExampleSection>
		</div>
	);
}
