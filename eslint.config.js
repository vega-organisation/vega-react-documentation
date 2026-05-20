import eslint from '@eslint/js';
import eslintPluginAstro from 'eslint-plugin-astro';
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import eslintConfigPrettier from 'eslint-config-prettier';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
	{ ignores: ['dist/', '.astro/', 'node_modules/'] },
	eslint.configs.recommended,
	...tseslint.configs.recommended,
	{
		files: ['**/*.{js,mjs,cjs,ts,tsx,astro}'],
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
			},
		},
	},
	{
		files: ['**/*.{jsx,tsx}'],
		...eslintPluginReact.configs.flat.recommended,
		...eslintPluginReact.configs.flat['jsx-runtime'],
		settings: {
			react: { version: 'detect' },
		},
	},
	{
		files: ['**/*.{jsx,tsx}'],
		plugins: {
			'react-hooks': eslintPluginReactHooks,
		},
		rules: {
			...eslintPluginReactHooks.configs.recommended.rules,
		},
	},
	...eslintPluginAstro.configs.recommended,
	eslintConfigPrettier,
);
