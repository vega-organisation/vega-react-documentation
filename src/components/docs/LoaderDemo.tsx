import { Loader } from 'vega-react-components';

export default function LoaderDemo() {
	return (
		<div className="vega-preview">
			<Loader variant="spinner" />
			<Loader variant="progress" value={65} />
		</div>
	);
}
