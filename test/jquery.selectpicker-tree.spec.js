( function( $, QUnit ) {

	"use strict";

	var $fixture = null;

	QUnit.module( "selectpicker-tree", {
		beforeEach: function() {
			$fixture = $( "<select class='selectpicker'></select>" );
		},
		afterEach: function() {
			$fixture.remove();
		}
	} );

	QUnit.test( "is inside jQuery library", function( assert ) {
		assert.equal( typeof $.fn.selectpickerTree, "function", "has function inside jquery.fn" );
		assert.equal( typeof $fixture.selectpickerTree, "function", "another way to test it" );
	} );

	QUnit.test( "returns jQuery functions after called (chaining)", function( assert ) {
		assert.equal(
			typeof $fixture.selectpickerTree().on,
			"function",
			"'on' function must exist after plugin call" );
	} );

	QUnit.test( "caches plugin instance", function( assert ) {
		$fixture.selectpickerTree();
		assert.ok(
			$fixture.data( "plugin_selectpickerTree" ),
			"has cached it into a jQuery data"
		);
	} );

}( jQuery, QUnit ) );
