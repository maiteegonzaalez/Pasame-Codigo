// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// Vercel Adapter
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  site: 'https://pc.pablopl.dev',
  output: 'server',
  adapter: vercel({
    webAnalytics: { enabled: true }
  }),
	integrations: [
		starlight({
			title: 'Pásame el Código',
			description: 'Una web open source con apuntes y ejercicios resueltos de las diferentes asignaturas que componen el Grado de Enxeñería Informática da Universidade da Coruña.',
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
				src: './src/assets/logo.svg',
			},
			favicon: '/favicon.svg',
			head: [
				// Agregar un favicon ICO de respaldo para Safari.
				{
				tag: 'link',
				attrs: {
					rel: 'icon',
					href: '/favicon.ico',
					sizes: '32x32',
				},
				},
				{
				tag: 'meta',
				attrs: {
					name: 'author',
					content: 'Pablo Portas López',
				},
				},
			],
			editLink: {
				baseUrl: 'https://github.com/TeenBiscuits/Pasame-Codigo/edit/main/',
			},
			customCss: [
				//  
				process.env.NO_GRADIENTS ? '' : './src/assets/custom.css',
			],
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