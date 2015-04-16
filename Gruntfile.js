module.exports = function(grunt) {

    grunt.initConfig({
        jshint: {
            files: ['Gruntfile.js', 'js/*.js'],
            options: {
                globals: {
                    jQuery: true
                }
            }
        },
        watch: {
            files: ['**/*.scss'],
            tasks: ['sass','cssmin']
        },
        sass: {
            dist: {
                files: {
                    'css/style.css': 'scss/style.scss'
                }
            }
        },
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'css/style.min.css': 'css/style.css'
                }
            }
        },

        'serve': {
            'path': '/',
            options: {
                port: 9000,
                'all': {
                    tasks: ['sass','cssmin'], // required
                    output: '/index.html'
                }
            }
        },

    });

    //grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-serve');
    grunt.registerTask('default', ['sass','cssmin']);

};
