// Required Calls 
const gulp = require('gulp'),
    requireDir = require('require-dir');

// Third-party Configuration settings
const plugins = require('gulp-load-plugins') ({
        pattern: ['gulp-*', 'gulp.*'],
        replaceString: /\bgulp[\-.]/
    });

const path = { // SASS folder sits outside the git repo default.
    sassFolder: "sass/**/*",
    cssFile: "style.min.css",
    out: "out"
}

// This should be moved into its own seperate task folder.
gulp.task('sass', function (error) {
    return gulp.src(path.sassFolder)
        .pipe(plugins.sass(plugins.sassOptions).on('error', plugins.sass.logError))
        .pipe(plugins.concat(path.cssFile))
        .pipe(plugins.autoprefixer(plugins.autoprefixerOptions))
        .pipe(plugins.minifyCss())
        .pipe(gulp.dest(path.out))
});

// Start build task. - This is going to be updated in the future.
gulp.task('default', function(){

    return gulp.watch(path.sassFolder, gulp.series('sass'))
});

//TODO: Add the automated build feature for SASS.