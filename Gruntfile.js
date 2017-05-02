module.exports = function (grunt) {
    grunt.initConfig({
        karma: {
            unit: {
                configFile: 'karma-init.conf.js'
            }
        }
    });
    grunt.loadNpmTasks('grunt-karma');
};