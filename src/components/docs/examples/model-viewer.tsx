import { ModelViewer } from 'vega-react-components';
import ExampleSection from '../ExampleSection';

const MODEL =
	'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/DamagedHelmet/glTF-Binary/DamagedHelmet.glb';

export default function ModelViewerExamplesShowcase() {
	return (
		<div className="vega-doc-examples">
			<ExampleSection
				title="Default"
				block
				code={`const MODEL = 'https://your-model-url/model.glb';\n\n<ModelViewer src={MODEL} width={480} height={360} />`}
			>
				<ModelViewer src={MODEL} width={480} height={360} />
			</ExampleSection>

			<ExampleSection
				title="Auto-rotate"
				block
				code={`<ModelViewer src={MODEL} width={480} height={360} autoRotate />`}
			>
				<ModelViewer src={MODEL} width={480} height={360} autoRotate />
			</ExampleSection>
		</div>
	);
}
