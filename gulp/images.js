import gulp from 'gulp';

import config from '../config/index.js';

import {getDirectory} from './utilities.js';



const {src, dest} = gulp;



function dist() {
	return src(config.build.images)
		.pipe(dest(getDirectory(config.dist.images)));
}



dist.displayName = 'dist:images';

export {
	dist,
};
