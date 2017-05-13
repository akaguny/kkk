'use strict';
module.exports = gruntConfig;

/**
 * Конфигурация grunt
 * @param {Object} grunt объект
 */
function gruntConfig(grunt) {
  grunt.initConfig({
    connect: {
      server: {
        options :{
          port : 8010,
          base: 'app',
          livereload: true,
          open: true
        }
      }
    },
    watch: {
      options: {
        livereload: true,
        // Через сколько милисекунд нужно возбудить событие changed
        debounceDelay: 1000
      },
      html: {
        files: '**/*.html'
      },
      js: {
        files: '**/**.js'
      },
      spec: {
        files: '**/**Spec.js'
      },
      config: {
        files: [ 'Gruntfile.js', 'config/*.js' ],
        reload: true
      },
      lib: {
        files: ['node_modules/**/*.*', 'app/bower_components/**/*.*'],
        reload: false
      }
    },
    karma: {
      unit: {
        configFile: 'karma.conf.js'
      },
      continuous: {
        configFile: 'karma.conf.js',
        singleRun: true,
        browsers: ['PhantomJS']
      }
    }
  });
// region регистрация тасков
// region загрузка тасков
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-karma');
// endregion загрузка тасков
  grunt.registerTask('livereload', ['connect', 'watch']);
// endregion регистрация тасков
}
