module.exports = function(grunt) {
  var config = {};


  //src ===============================
  var src;
  config.src = src = {
    sassMain: 'scss/main.scss',
    distFolder: 'public/css/you-dont-need-javascript.dist.css',
    devFolder: 'public/css/you-dont-need-javascript.dev.css',
    sassFolder: 'scss/**/*.scss',
    libFolder: 'public/js/**/*.js',
    serverPort: 8000
  };


  //Watch ===============================
  config.watch = {
    scripts: {
      files: ["<%= src.libFolder %>", "<%= src.sassFolder %>"],
      tasks: ["dev", "sass:dist"]
        //,tasks: ["dev",'sass:dist']
    }
  }


  //Sass ===============================
  var sass;
  config.sass = sass = {};

  //distribution
  sass.dist = {
    options: {
      style: "compressed",
      noCache: true,
      sourcemap: 'none',
      update: true
    },
    files: {
      "<%= src.distFolder %>": "<%= src.sassMain %>"
    }
  };

  //development env.
  sass.dev = {
    options: {
      style: "expanded",
      lineNumber: true,
    },
    files: {
      "<%= src.devFolder %>": "<%= src.sassMain %>"
    }
  };

  //grunt serve ===============================
  config.connect = {
    server: {
      options: {
        livereload: true,
        port: "<%= src.serverPort %>"
      }
    }
  };

  //Register custom tasks ===============================
  grunt.registerTask('default', ['dev']);
  grunt.registerTask('dev', ['sass:dev']);
  grunt.registerTask('dist', ['sass:dist']);
  grunt.registerTask('serve', ['connect:server', 'watch']);
  require('time-grunt')(grunt);
  require('load-grunt-tasks')(grunt, {
    scope: 'devDependencies'
  });


  //General setup ===============================
  grunt.initConfig(config);

};
