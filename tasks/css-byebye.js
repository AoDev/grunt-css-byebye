/*
 * grunt-css-byebye
 * https://github.com/AoDev/grunt-css-byebye
 *
 * Copyright (c) 2014 Kevin Purnelle
 * Licensed under the MIT license.
 */

'use strict';

var cssbyebye = require('css-byebye')
var desc = 'Say bye bye to your unwanted css rules.'

module.exports = function(grunt) {

  grunt.registerMultiTask('cssbyebye', desc, function() {

    var options = this.options({ rulesToRemove: [] })

    var existingFile = function (filepath) {

      if (!grunt.file.exists(filepath)) {
        grunt.log.warn('Source file "' + filepath + '" not found.')
        return false
      }
      else {
        return true
      }
    }

    var fileContent = function (filepath) {
      return grunt.file.read(filepath)
    }

    if (!options.rulesToRemove.length) {
      grunt.log.warn('You did not specify rules to remove.')
    }

    this.files.forEach(function (file) {

      var src = file.src.filter(existingFile).map(fileContent)
      grunt.file.write(file.dest, cssbyebye.process(src, options))
      grunt.log.writeln('File "' + file.dest + '" created.')
    })
  })

}
