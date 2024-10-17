// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
// Plugin Heading Badges
import starlightHeadingBadges from 'starlight-heading-badges'

// Vercel Adapter
import vercel from '@astrojs/vercel/serverless';

// Og Image Link
const site = 'https://pc.pablopl.dev/';
const ogUrl = new URL('og.jpg?v=1', site).href;
const ogImageAlt = 'Una web open source con apuntes y ejercicios resueltos de las diferentes asignaturas que componen el Grado de Enxeñería Informática da Universidade da Coruña.';

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
				{
					tag: 'meta',
					attrs: { property: 'og:image', content: ogUrl },
				},
				{
					tag: 'meta',
					attrs: { property: 'og:image:alt', content: ogImageAlt },
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
					items: [
						{
							slug: 'prouno/indice',
						},
						{
							label: 'Apuntes',
							autogenerate: { directory: 'prouno/apuntes' },
						},
						{
							label: 'Boletines',
							autogenerate: { directory: 'prouno/boletines' },
						},
					],
				},
				{
					label: 'Programación II',
					collapsed: true,
					items: [
						{
							slug: 'prodos/indice',
						},
						{
							label: 'Apuntes',
							autogenerate: { directory: 'prodos/apuntes' },
						},
						{
							label: 'Boletines',
							autogenerate: { directory: 'prodos/boletines' },
						},
					],
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
			plugins: [starlightHeadingBadges()],
		}),
	],
});