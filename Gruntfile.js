'use strict';

module.exports = function(grunt) {
  // show elapsed time at the end
  require('time-grunt')(grunt);

  // load tasks on demand (speeds up dev)
  require('jit-grunt')(grunt, {
  });

  grunt.initConfig({
    yeoman: {
      src: 'src',
      dist: 'dist',
      test: 'test',
      pkg: grunt.file.readJSON('package.json'),
      meta: {
        banner: '/*! <%= yeoman.pkg.name %> - v<%= yeoman.pkg.version %> - ' +
          '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
          '* <%= yeoman.pkg.homepage %>\n' +
          '* Copyright © <%= grunt.template.today("yyyy") %> ' +
          '<%= yeoman.pkg.author.name %>; Licensed <%= yeoman.pkg.licenses[0].type %> */\n'
      },
    },
    watch: {
      qa: {
        files: [
          '<%= yeoman.src %>/iptools-jquery-fileupload.js',
          '<%= yeoman.test %>/index.html',
          '<%= yeoman.test %>/spec/test.js'
        ],
        tasks: ['concurrent:qa']
      },
      bdd: {
        files: [
          '<%= yeoman.src %>/iptools-jquery-fileupload.js',
          '<%= yeoman.test %>/index.html',
          '<%= yeoman.test %>/spec/test.js'
        ],
        tasks: ['test']
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        '<%= yeoman.src %>/{,*/}*.js',
        'test/spec/{,*/}*.js'
      ]
    },
    jscs: {
      options: {
        config: '.jscsrc'
      },
      files: {
        src: [
          'Gruntfile.js',
          '<%= yeoman.test %>/spec/*.js',
          '<%= yeoman.src %>/*.js'
        ]
      }
    },
    scsslint: {
      allFiles: [
        'styles/**/*.scss',
      ],
      options: {
        bundleExec: true,
        config: '.scss-lint.yml',
        reporterOutput: null,
        colorizeOutput: true
      }
    },
    mocha: {
      all: {
        options: {
          run: true,
          log: true
        },
        src: ['test/index.html']
      }
    },
    concurrent: {
      qa: {
        tasks: [
          'jshint',
          'jscs',
          'scsslint',
          'mocha'
        ]
      },
      build: {
        tasks: [
          'uglify'
        ]
      }
    },
    uglify: {
      options: {
        banner: '<%= yeoman.meta.banner %>'
      },
      dist: {
        files: {
          'dist/iptools-jquery-fileupload.min.js': 'src/iptools-jquery-fileupload.js'
        }
      }
    },
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '<%= yeoman.dist %>/*'
          ]
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-jscs');
  grunt.loadNpmTasks('grunt-scss-lint');

  grunt.registerTask('test', ['mocha']);
  grunt.registerTask('qa', ['concurrent:qa']);

  grunt.registerTask('build', [
    'concurrent:qa',
    'clean:dist',
    'concurrent:build'
  ]);

  grunt.registerTask('default', ['build']);

  grunt.registerTask('travis', ['concurrent:qa']);
};
