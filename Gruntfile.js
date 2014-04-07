module.exports = function (grunt) {
    'use strict';

    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        jasmine_node: {
            unit: {
                src: [
                    'tasks/'
                ]
            }
        },
        jslint: {
            all: {
                src: [
                    'tasks/**/*.js',
                    'Gruntfile.js',
                    'package.json'
                ],
                directives: {
                    predef: [
                        'module',
                        'require'
                    ]
                }
            }
        },
        pkg: grunt.file.readJSON("package.json")
    });

    grunt.registerTask("default", [
        "jslint"
    ]);
    grunt.registerTask("test", [
        "default",
        "jasmine_node"
    ]);
};
