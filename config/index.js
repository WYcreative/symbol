import {createRequire} from 'node:module';
import {join} from 'node:path/posix';



// TODO: Use import assertions once they become stable.
const pkg = createRequire(import.meta.url)('../package.json');

const src = './src/';
const examples = './examples/';
const build = './build/';
const dist = './dist/';

const examplesPath = 'examples/';

const config = {
	name: pkg.name,
	libs: './config/libs.js',
	data: {
		symbols: {
			colorsToRemove: [
				'black',
				'#000',
				'#000000',
			],
		},
	},
	src: {
		base: src,
		symbols: join(src, 'symbols/**/*.svg'),
		views: join(src, 'views/**/*.pug'),
	},
	examples: {
		base: examples,
		symbols: join(examples, 'symbols/**/*.svg'),
		views: [
			join(examples, 'views/**/*.pug'),
			'!**/_*/**',
			'!**/_*',
		],
	},
	build: {
		base: build,
		images: join(build, examplesPath, 'assets/images/**/*.{webp,png,jp?(e)g,gif,svg}'),
		libs: join(build, examplesPath, 'assets/libs/**'),
		views: join(build, examplesPath, '**/*.html'),
	},
	dist: {
		base: dist,
		images: join(dist, examplesPath, 'assets/images/**/*.{webp,png,jp?(e)g,gif,svg}'),
		libs: join(dist, examplesPath, 'assets/libs/**'),
		views: join(dist, examplesPath, '**/*.html'),
	},
};



export default config;
