'use strict';

var gulp = require('gulp');
var fs = require('fs');
var pdGulpJsTask = require('pd-gulp-js-task');




var jsSrc = './src/angular-searchable-list.js';
var dest = './dist';
var standaloneName = 'pdSearchableList';



gulp.task('js-dev', pdGulpJsTask({
	lib: {
		src: jsSrc,
		dest: __dirname+'/dist',
		browserify: {
			debug:true,
			standalone: standaloneName
		}
	}
}));

gulp.task('js-watch', pdGulpJsTask({
	lib: {
		src: jsSrc,
		dest: dest,
		watch: true,
		browserify: {
			debug:true,
			standalone: standaloneName
		}
	}
}));

gulp.task('js-build', pdGulpJsTask({
	options: {
		banner: fs.readFileSync('./banner.txt', 'utf-8')
	},
	lib: {
		src: jsSrc,
		dest: dest,
		uglify: true,
		browserify: {
			standalone: standaloneName
		}
	}
}));




gulp.task('scss-dev', function() {});
gulp.task('scss-build', function() {});
gulp.task('scss-watch', function() {});








gulp.task('watch', ['js-watch', 'scss-build']);
gulp.task('dev', ['js-dev', 'scss-dev']);
gulp.task('build', ['js-build', 'scss-build']);

