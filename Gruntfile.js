/*
 * grunt-css-byebye
 * https://github.com/AoDev/grunt-css-byebye
 *
 * Author Kevin Purnelle <kevin.purnelle@gmail.com>
 * Copyright (c) 2014 Kevin Purnelle
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {


  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested).
    cssbyebye: {
      testOptions: {
        files: {
          'tmp/test.css': ['test/fixtures/test.css']
        },
        options: {
          rulesToRemove: ['.hello', /.*\.world\.*/]
        }
      }
    },

    // Bump version option
    bump: {
      options: {
        files: ['package.json'],
        updateConfigs: [],
        commit: true,
        commitMessage: 'Release v%VERSION%',
        commitFiles: ['package.json'],
        createTag: true,
        tagName: '%VERSION%',
        tagMessage: 'Version %VERSION%',
        push: true,
        pushTo: 'origin',
        gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d'
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*test.js']
    }
  })

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks')

  require('load-grunt-tasks')(grunt)
  grunt.registerTask('test', ['clean', 'cssbyebye', 'nodeunit'])
  grunt.registerTask('default', ['jshint', 'test'])
}
