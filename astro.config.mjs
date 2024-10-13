// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://pc.pablopl.dev',
	integrations: [
		starlight({
			title: 'Pásame el Código',
			locales: {
			  root: {
				label: 'Español',
				lang: 'es-ES',
			  },
			},
			social: {
				github: 'https://github.com/TeenBiscuits/Pasame-Codigo',
			},
			logo: {
				src: './public/logo.svg',
			},
			customCss: process.env.NO_GRADIENTS ? [] : ['./src/assets/landing.css'],
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
