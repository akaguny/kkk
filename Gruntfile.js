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
      }
    }
  });
// region регистрация тасков
// region загрузка тасков
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
// endregion загрузка тасков
  grunt.registerTask('livereload', ['connect', 'watch']);
// endregion регистрация тасков
}
