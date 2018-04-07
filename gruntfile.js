module.exports = function (grunt) {
    'use strict';

    const CONFIG = require('./config.js');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            options: {
                sourceMap: false,
                outputStyle: 'compressed'
            },
            files: {
                src: CONFIG.styles.src,
                dest: CONFIG.styles.dist
            }
        },

        postcss: {
            options: {
                processors: [
                    require('autoprefixer')({
                        browsers: CONFIG.compatibility
                    })
                ]
            },
            files: {
                src: CONFIG.styles.dist,
            }
        },

        browserify: {
            options: {
                browserifyOptions: {
                    debug: true
                },
                transform: ['babelify']
            },
            files: {
                src: CONFIG.scripts.src,
                dest: CONFIG.scripts.dist
            }
        },

        uglify: {
            options: {
                sourceMap: false
            },
            files: {
                src: CONFIG.scripts.dist,
                dest: CONFIG.scripts.dist
            }
        },

        watch: {
            options: {
                spawn: false
            },
            styles: {
                files: CONFIG.styles.dir,
                tasks: ['sass']
            },
            scripts: {
                files: CONFIG.scripts.dir,
                tasks: ['browserify']
            },
            livereload: {
                options: {
                    livereload: true
                },
                files: ['src/resources/**/**.*']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-browserify');

    grunt.registerTask('build', ['sass', 'browserify']);
    grunt.registerTask('production', ['build', 'postcss', 'uglify']);
    grunt.registerTask('default', ['build', 'watch']);
};
