// Required Calls 
const gulp = require('gulp'),
    requireDir = require('require-dir'),
    require('dotenv').config();

// Third-party Configuration settings
const plugins = require('gulp-load-plugins') ({
        pattern: ['gulp-*', 'gulp.*'],
        replaceString: /\bgulp[\-.]/
    });

const path = { // SASS folder sits outside the git repo default.
    sassFolder = "sass/**/"
}