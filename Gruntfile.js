module.exports = function(grunt) {

    grunt.initConfig({
        watch: {
            sass:{
                files: ['scss/style.scss'],
                tasks: ['sass']
            },
            css:{
                files: ['css/style.css'],
                tasks: ['cssmin']
            }

        },
        sass: {
            options:{
                sourceMap: true
            },
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
        'http-server': {
            'dev': {
                root: '.',
                port: 8000,
                host: "0.0.0.0",
                showDir : true,
                autoIndex: true,
                ext: "html",
                runInBackground: true
            }

        }
    });

    //grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-http-server');
    grunt.registerTask('default', ['http-server','watch']);

};
