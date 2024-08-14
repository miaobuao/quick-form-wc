import { getBabelOutputPlugin } from '@rollup/plugin-babel'
import Unocss from 'unocss/vite'
import { defineConfig } from 'vite'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
import dts from 'vite-plugin-dts'
import { viteSingleFile } from 'vite-plugin-singlefile'

export default defineConfig({
	plugins: [
		viteSingleFile(),
		cssInjectedByJsPlugin({
			cssAssetsFilterFunction(outputAsset) {
				return ['style.css'].includes(outputAsset.fileName)
			},
		}),
		Unocss({
			mode: 'shadow-dom',
			rules: [['bg-none', { background: 'none' }]],
		}),
		dts({ rollupTypes: true }),
	],
	build: {
		minify: false,
		lib: {
			entry: 'src/index.ts',
			formats: ['iife', 'es', 'cjs'],
			name: 'QuickForm',
		},
		rollupOptions: {
			plugins: [
				getBabelOutputPlugin({
					presets: ['@babel/preset-env'],
					allowAllFormats: true,
				}),
			],
		},
	},
})
