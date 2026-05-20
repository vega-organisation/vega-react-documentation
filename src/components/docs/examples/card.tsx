import { Card } from 'vega-react-components';
import ExampleSection from '../ExampleSection';

const IMG = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80';

export default function CardExamplesShowcase() {
	return (
		<div className="vega-doc-examples">
			<ExampleSection title="Elevated">
				<Card variant="elevated" style={{ width: '300px' }}>
					<Card.Media src={IMG} alt="" ratio="16/9" />
					<Card.Body>Elevated card with media.</Card.Body>
				</Card>
			</ExampleSection>
			<ExampleSection title="Outlined">
				<Card variant="outlined" style={{ width: '300px' }}>
					<Card.Body>Outlined card with border only.</Card.Body>
				</Card>
			</ExampleSection>
			<ExampleSection title="Interactive">
				<Card variant="interactive" style={{ width: '300px' }} onClick={() => alert('Clicked!')}>
					<Card.Media src={IMG} alt="" ratio="16/9" />
					<Card.Body>Click me</Card.Body>
				</Card>
			</ExampleSection>
		</div>
	);
}
