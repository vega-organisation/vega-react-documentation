import { Button } from 'vega-react-components';
import ExampleSection from '../ExampleSection';

export default function ButtonExamplesShowcase() {
	return (
		<div className="vega-doc-examples">
			<ExampleSection title="Primary">
				<Button variant="primary">Primary Button</Button>
			</ExampleSection>
			<ExampleSection title="Secondary">
				<Button variant="secondary">Secondary Button</Button>
			</ExampleSection>
			<ExampleSection title="Danger">
				<Button variant="danger">Danger Button</Button>
			</ExampleSection>
			<ExampleSection title="Success">
				<Button variant="success">Success Button</Button>
			</ExampleSection>
			<ExampleSection title="Sizes">
				<Button size="small">Small Button</Button>
				<Button size="medium">Medium Button</Button>
				<Button size="large">Large Button</Button>
			</ExampleSection>
			<ExampleSection title="Full width" column padded>
				<Button fullWidth>Full Width Button</Button>
			</ExampleSection>
			<ExampleSection title="Disabled">
				<Button disabled>Disabled Button</Button>
			</ExampleSection>
		</div>
	);
}
