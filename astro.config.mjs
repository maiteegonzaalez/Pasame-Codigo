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
			defaultLocale: 'root',
			locales: {
				root: {
				label: 'Español',
				lang: 'es-ES',
				},
				// Locales are work in progress
				//'en': {
				//  label: 'English',
				//  lang: 'en',
				//},
				//'gl': {
				//  label: 'Galego',
				//  lang: 'gl-ES',
				//},
			},
			social: {
				github: 'https://github.com/TeenBiscuits/Pasame-Codigo',
				'x.com': 'https://x.com/pabloportasl',
				linkedin: 'https://www.linkedin.com/in/pabloportaslopez/',
				email: 'mailto:pablo.portas@udc.es',
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
					label: 'Comienza aquí',
					items: [
						{
							slug: 'intro/readme',
						},
						{
							slug: 'intro/indice',
						},
						{
							slug: 'intro/contribuir'
						},
					],
				},
				{
					label: 'Programación I',
					collapsed: true,
					autogenerate: { directory: 'prouno' },
				},
				{
					label: 'Programación II',
					collapsed: true,
					autogenerate: { directory: 'prodos' },
				},
				{
					label: 'Diseño de Software',
					collapsed: true,
					autogenerate: { directory: 'deese' },
				},
				{
					label: 'Paradigmas de la Programación',
					collapsed: true,
					autogenerate: { directory: 'pepe' },
				},
			],
		}),
	],
});