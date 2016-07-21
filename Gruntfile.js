module.exports = function(grunt) {
  ///everything else will go in here!!!
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch :{
      all :{
        files: ['Gruntfile.js','src//*.js'],
        tasks: ['jshint']
      }
    },
    jshint: {
      options: {
        reporter: require('jshint-stylish')
      },

      build: ['Gruntfile.js', 'src//*.js']
    }
  });
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default',['watch','jshint']);
};
