import defaultPlugins from "./tools/svggo.function.js";

export default {
	// Target: https://go.nuxtjs.dev/config-target
	target: 'static',

	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'MP-NY',
		htmlAttrs: {
			lang: 'en'
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' },
			{ name: 'format-detection', content: 'telephone=no' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
		]
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [
		
		'~/assets/сss/fonts.scss',
		'~/assets/сss/libs.scss',
		'~/assets/сss/content.scss',
		'~/assets/сss/keyframes.scss',
		'~/assets/сss/simple.scss',
		'~/assets/сss/modules.scss'
	],
	svgSprite: {
		// pass costum config 
		svgoConfig () {
			return {
				plugins: defaultPlugins()
			}
		}
	},
	styleResources: {
		scss: [
			'~/assets/сss/core.scss',
			'./assets/сss/variables.scss',
			'./assets/сss/media.scss',
			'./assets/сss/data.scss',
			
		],
	},
	// Auto import components: https://go.nuxtjs.dev/config-components
	components: [
		{
			path: '~/components', // will get any components nested in let's say /components/test too
			pathPrefix: false,
		},
	],  

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
	],


	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		"@nuxtjs/svg",
		'@nuxt/typescript-build',
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		'@nuxtjs/style-resources',
		'@nuxtjs/svg-sprite',		
		'vue-screen/nuxt',
		'bootstrap-vue/nuxt'
	],

	bootstrapVue: {
		bootstrapCSS: false, // Or `css: false`
		bootstrapVueCSS: false, // Or `bvCSS: false`
		bootstrapVue: {
			componentPlugins: [
				'CollapsePlugin',
			],
		}
	},

	screen: {
		sm: 0,
		lm: 421,
		st: 581,	
		lt: 821,	
		sd: 1121,
		ld: 1281,
		hd: 1441
	},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
		standalone: true,
		transpile: [
			'swiper',
			// 'dom7',
		],
	}
}
