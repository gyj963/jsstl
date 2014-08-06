/**
 * Created by Administrator on 14-8-3.
 */
module.exports = function(grunt) {
	// 项目配置(任务配置)
	grunt.initConfig({
		                 pkg: grunt.file.readJSON('package.json'),
		                 jshint: {
			                 files: ['test/**/*.js', 'algorithm/*.js'],
			                 options: {
				                 globals: {
					                 exports: true
				                 }
			                 }
		                 }
	                 });
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.registerTask('default', ['jshint']);
};