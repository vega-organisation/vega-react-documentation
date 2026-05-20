import { ModelViewer } from 'vega-react-components';

const MODEL =
	'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/DamagedHelmet/glTF-Binary/DamagedHelmet.glb';

export default function ModelViewerDemo() {
	return (
		<div className="vega-preview vega-preview--block">
			<ModelViewer src={MODEL} width={480} height={360} />
		</div>
	);
}
