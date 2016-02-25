module.exports = function (grunt) {
  grunt.initConfig({
    watch: {
      sass: {
        files: ['scss/style.scss'],
        tasks: ['sass']
      },
      autoprefixer: {
        files: ['tmp/style.css'],
        tasks: ['autoprefixer']
      },
      babel: {
        files: ['src/main.js'],
        tasks: ['babel']
      }
    },
    babel: {
      options: {
        sourceMap: true,
        presets: ['es2015', 'stage-0']
      },
      dist: {
        files: {
          'dist/main.js': 'src/main.js'
        }
      }
    },
    sass: {
      dist: {
        options: {
          style: "compressed"
        },
        files: {
          'tmp/style.css': 'scss/style.scss'
        }
      }
    },
    autoprefixer: {
      dist:{
        files:{
          'css/style.css':'tmp/style.css'
        }
      }
    },
    'http-server': {
      'dev': {
        root: '.',
        port: 8000,
        host: "0.0.0.0",
        showDir: true,
        autoIndex: true,
        ext: "html",
        runInBackground: true
      }
    }
  });
  //grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-http-server');
  grunt.registerTask('default', ['http-server', 'watch']);
};
