import { Button } from 'vega-react-components';
import ExampleSection from '../ExampleSection';

export default function ButtonExamplesShowcase() {
	return (
		<div className="vega-doc-examples">
			<ExampleSection title="Primary" code={`<Button variant="primary">Primary Button</Button>`}>
				<Button variant="primary">Primary Button</Button>
			</ExampleSection>

			<ExampleSection title="Secondary" code={`<Button variant="secondary">Secondary Button</Button>`}>
				<Button variant="secondary">Secondary Button</Button>
			</ExampleSection>

			<ExampleSection title="Danger" code={`<Button variant="danger">Danger Button</Button>`}>
				<Button variant="danger">Danger Button</Button>
			</ExampleSection>

			<ExampleSection title="Success" code={`<Button variant="success">Success Button</Button>`}>
				<Button variant="success">Success Button</Button>
			</ExampleSection>

			<ExampleSection
				title="Sizes"
				code={`<Button size="small">Small Button</Button>\n<Button size="medium">Medium Button</Button>\n<Button size="large">Large Button</Button>`}
			>
				<Button size="small">Small Button</Button>
				<Button size="medium">Medium Button</Button>
				<Button size="large">Large Button</Button>
			</ExampleSection>

			<ExampleSection
				title="Full width"
				column
				padded
				code={`<Button fullWidth>Full Width Button</Button>`}
			>
				<Button fullWidth>Full Width Button</Button>
			</ExampleSection>

			<ExampleSection title="Disabled" code={`<Button disabled>Disabled Button</Button>`}>
				<Button disabled>Disabled Button</Button>
			</ExampleSection>
		</div>
	);
}
