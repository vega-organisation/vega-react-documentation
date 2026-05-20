// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Vega React Components',
			description: 'Documentation for the vega-react-components library.',
			customCss: ['./src/styles/vega-docs.css'],
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/vega-organisation/vegaReact',
				},
			],
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'Overview', slug: 'index' },
						{ label: 'Installation', slug: 'getting-started' },
					],
				},
				{
					label: 'Components',
					items: [
						{ label: 'Button', slug: 'components/button' },
						{ label: 'Card', slug: 'components/card' },
						{ label: 'Checkbox', slug: 'components/checkbox' },
						{ label: 'Context Menu', slug: 'components/context-menu' },
						{ label: 'Dialog', slug: 'components/dialog' },
						{ label: 'Form Wrapper', slug: 'components/form-wrapper' },
						{ label: 'Input Email', slug: 'components/input-email' },
						{ label: 'Input Text', slug: 'components/input-text' },
						{ label: 'Loader', slug: 'components/loader' },
						{ label: 'Model Viewer', slug: 'components/model-viewer' },
						{ label: 'Phone Number Input', slug: 'components/phone-number-input' },
						{ label: 'Toast', slug: 'components/toast' },
						{ label: 'Tooltip', slug: 'components/tooltip' },
					],
				},
			],
		}),
		react(),
	],
});
