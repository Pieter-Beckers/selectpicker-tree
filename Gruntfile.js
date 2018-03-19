module.exports = function( grunt ) {

	grunt.initConfig( {

		// Import package manifest
		pkg: grunt.file.readJSON( "package.json" ),

		// Banner definitions
		meta: {
			banner: "/*\n" +
			" *  <%= pkg.title || pkg.name %> - v<%= pkg.version %>\n" +
			" *  <%= pkg.description %>\n" +
			" *  <%= pkg.homepage %>\n" +
			" *\n" +
			" *  Made by <%= pkg.author.name %>\n" +
			" *  Under <%= pkg.license %> License\n" +
			" */\n"
		},

		// Concat definitions
		concat: {
			options: {
				banner: "<%= meta.banner %>"
			},
			dist: {
				src: [ "src/**/*.js" ],
				dest: "dist/jquery.selectpicker-tree.js"
			}
		},

		// Lint definitions
		jscs: {
			src: "src/**/*.js",
			options: {
				config: ".jscsrc"
			}
		},

		babel: {
			options: {
				sourceMap: true,
				presets: ['env']
			},
			dist: {
				files: {
					'dist/jquery.selectpicker-tree.js': 'dist/jquery.selectpicker-tree.js'
				}
			}
		},

		// Minify definitions
		uglify: {
			dist: {
				src: [ "dist/jquery.selectpicker-tree.js" ],
				dest: "dist/jquery.selectpicker-tree.min.js"
			},
			options: {
				banner: "<%= meta.banner %>"
			}
		},

		// karma test runner
		karma: {
			unit: {
				configFile: "karma.conf.js",
				singleRun: true,
				browsers: [ "PhantomJS" ]
			}
		}

	} );

	grunt.loadNpmTasks( "grunt-contrib-concat" );
	grunt.loadNpmTasks( "grunt-jscs" );
	grunt.loadNpmTasks( "grunt-babel" );
	grunt.loadNpmTasks( "grunt-contrib-uglify" );
	grunt.loadNpmTasks( "grunt-karma" );

	grunt.registerTask( "build", [ "concat", "babel", "uglify" ] );
	grunt.registerTask( "default", [ "jscs", "build", "karma:unit" ] );
};
