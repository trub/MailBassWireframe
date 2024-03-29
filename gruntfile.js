module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'public/stylesheets/main.css': 'sass/main.scss'
        },
        options: {
          includePaths: [
            './bower_components/bower-bourbon',
            './bower_components/bower-neat',
            './bower_components/color-scale',
            './bower_components/type-rhythm-scale',
            './bower_components/rwd-toolkit'
          ]
        }
      }
    },
    watch: {
      source: {
        files: ['sass/**/*.scss', 'views/**/*.jade'],
        tasks: ['sass'],
        options: {
          livereload: true, // needed to run LiveReload
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');
  grunt.registerTask('default', ['sass']);
};