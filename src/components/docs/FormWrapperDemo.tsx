import { Button, FormWrapper, InputText } from 'vega-react-components';

export default function FormWrapperDemo() {
	return (
		<div className="vega-preview vega-preview--column" style={{ maxWidth: '360px', width: '100%' }}>
			<FormWrapper onSubmit={() => {}}>
				<InputText label="Email" placeholder="you@example.com" fullWidth />
				<Button type="submit" fullWidth>
					Submit
				</Button>
			</FormWrapper>
		</div>
	);
}
