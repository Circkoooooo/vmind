import path from 'path'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import ts from 'rollup-plugin-typescript2'

export default {
	input: 'index.ts',
	output: {
		file: path.resolve(__dirname, './dist/bundle.js'),
		format: 'umd',
		name: 'bunder',
	},
	plugins: [
		nodeResolve({
			extensions: ['.js', '.ts'],
		}),
		ts({
			tsconfig: path.resolve(__dirname, './tsconfig.json'),
		}),
	],
}
