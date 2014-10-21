# grunt-css-byebye

> Say goodbye to your unwanted css rules with this grunt plugin.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-css-byebye --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-css-byebye');
```

## The "cssbyebye" task

### Overview
In your project's Gruntfile, add a section named `cssbyebye` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  cssbyebye: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    }
  }
})
```

### Options

#### options.rulesToRemove
Type: `[Mixed]`
Default value: `[]`

An array that contains strings (CSS selectors) or regular expressions.

### Usage Examples

In this example, it would match a rule with the exact selector `.hello`
and any rule that contains a class that starts with `.world`.

```js
grunt.initConfig({
  cssbyebye: {
    mystyles: {
      options: {
        rulesToRemove: ['.hello', /.*\.world.*/]
      },
      files: {
        'mystyles.css': ['byebye/mystyles.css']
      }
    }
  }
})
```


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Changelog

### Release 0.2.0

First public release.
Check [CSS Byebye](https://www.npmjs.org/package/css-byebye)


