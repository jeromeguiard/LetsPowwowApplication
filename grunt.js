module.exports = function(grunt) {
  grunt.initConfig({
      jasmine : {
       // Your project's source files
          src : 'www/**/*.js',
       // Your Jasmine spec files
          specs : 'www/specs/**/*spec.js',
       // Your spec helper files
          helpers : 'www/spec.html'
       }
});


grunt.loadNpmTasks('grunt-jasmine-runner');
grunt.registerTask('default', 'jasmine');
};
