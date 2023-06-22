import gulp from 'gulp';

import config from '../config/index.js';

import * as symbols from './symbols.js';
import * as libs from './libs.js';
import * as views from './views.js';
import {reload} from './browser.js';



const {watch, series} = gulp;



function build(done) {
	watch(config.libs, series(libs.build, reload));

	done();
}



function examples(done) {
	watch([config.src.symbols, config.examples.symbols], series(symbols.examples, reload));
	watch([config.src.views, config.examples.views[0]], series(views.examples, reload));

	done();
}


build.displayName = 'build:watch';
examples.displayName = 'examples:watch';

export {
	build,
	examples,
};
