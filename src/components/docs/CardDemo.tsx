import { Card } from 'vega-react-components';

const IMG = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80';

export default function CardDemo() {
	return (
		<div className="vega-preview">
			<Card variant="elevated" style={{ width: '280px' }}>
				<Card.Media src={IMG} alt="" ratio="16/9" />
				<Card.Body>Card preview</Card.Body>
			</Card>
		</div>
	);
}
