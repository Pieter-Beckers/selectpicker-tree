module.exports = function( config ) {

	config.set( {
		files: [
			"node_modules/jquery/dist/jquery.js",
			"node_modules/bootstrap-select/dist/js/bootstrap-select.js",
			"dist/*.min.js",
			"test/*"
		],
		browsers: [ "PhantomJS" ],
		frameworks: [ "qunit" ],
		autoWatch: true,
		logLevel: config.LOG_DEBUG
	} );
};
