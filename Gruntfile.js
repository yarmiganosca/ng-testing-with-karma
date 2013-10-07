// Generated on 2013-08-21 using generator-reveal 0.0.11
'use strict';

var LIVERELOAD_PORT = 35730;
var lrSnippet = require('connect-livereload')({port: LIVERELOAD_PORT});
var mountFolder = function (connect, dir) {
    return connect.static(require('path').resolve(dir));
};

module.exports = function (grunt) {
    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        watch: {
            options: {
                nospawn: true,
                livereload: LIVERELOAD_PORT
            },
            livereload: {
                files: [
                    'index.html',
                    'js/*.js',
                    'slides/*.md',
                    'slides/*.html',
                    'slides/list.json'
                ],
                tasks: ['build']
            }
        },
        connect: {
            options: {
                port: 9001,
                // change this to '0.0.0.0' to access the server from outside
                hostname: '0.0.0.0'
            },
            livereload: {
                options: {
                    middleware: function (connect) {
                        return [
                            lrSnippet,
                            mountFolder(connect, '.')
                        ];
                    }
                }
            }
        },
        open: {
            server: {
                path: 'http://localhost:<%= connect.options.port %>'
            }
        }
    });

    grunt.registerTask('server', ['build', 'connect:livereload', 'open', 'watch']);

    grunt.registerTask('build', 'Build your slides.', function () {
        var slides = [];

        grunt.file.recurse('slides', function (post, root, sub, fileName) {
            if (fileName === 'index.md') {
                return;
            }
        });
    });
};
