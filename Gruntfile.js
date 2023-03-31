module.exports = function(grunt) {
    grunt.initConfig({
        sass: {
            development: {
                options: {
                    sourceMap: true
                },
                files: {
                    'dev/styles/main.css' : 'src/styles/main.scss'
                }
            },
            production: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'dist/styles/main.min.css' : 'src/styles/main.scss'
                }
            }
        },
        imagemin: {
            production: {
                options: {
                    optimizationLevel: 3,
                    progressive: true
                },   
                files: [{
                    expand: true,
                    cwd: 'src/images/',
                    src: ['**/*.{png,jpg,jpeg,gif,svg,ico}'],
                    dest: 'dist/images/'
                }]
            },
            development: {
                options: {
                    optimizationLevel: 3,
                    progressive: true
                },
                files: [{
                    expand: true,
                    cwd: 'src/images/',
                    src: ['**/*.{png,jpg,jpeg,gif,svg,ico}'],
                    dest: 'dev/images/'
                }]
            }
        },
        watch: {
            css: {
                files: 'src/styles/**/*.scss',
                tasks: ['sass:development']
            }
        },
        replace: {
            dev: {
                options: {
                    patterns: [
                        {
                            match: 'CSS',
                            replacement: './styles/main.css'
                        },
                        {
                            match: 'JS',
                            replacement: '../src/script/script.js'
                        }
                    ]
                },
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ['src/index.html'],
                        dest: 'dev/'
                    }
                ]
            },
            dist: {
                options: {
                    patterns: [
                        {
                            match: 'CSS',
                            replacement: './styles/main.min.css'
                        },
                        {
                            match: 'JS',
                            replacement: './script/script.min.js'
                        }
                    ]
                },
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ['prebuild/index.html'],
                        dest: 'dist/'
                    }
                ]
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComents: true,
                    collapseWhitespace: true
                },
                files: {
                    'prebuild/index.html' : 'src/index.html'
                }
            }
        },
        clean: ['prebuild'],
        uglify: {
            my_target: {
                files: {
                    'dist/script/script.min.js' : 'src/script/script.js'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-replace');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('default', ['sass:development','imagemin:development','replace:dev','watch']);
    grunt.registerTask('build', ['sass:production','uglify','htmlmin','imagemin:production','replace:dist','clean']);
}