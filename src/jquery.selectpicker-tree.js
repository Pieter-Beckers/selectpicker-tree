;( function( $, window, document ) {
	"use strict";
	let pluginName = "selectpickerTree",
		defaults = {};

	function Plugin( element, options ) {
		this.settings = $.extend( {}, defaults, options );
		this.init();
	}

	$.extend( Plugin.prototype, {
		init: function() {
			$( document ).ready( () => {
				console.log( this.settings );
			} );
		}
	} );
	$.fn[ pluginName ] = function( options ) {
		return this.each( function() {
			if ( !$.data( this, "plugin_" + pluginName ) ) {
				$.data( this, "plugin_" +
					pluginName, new Plugin( this, options ) );
			}
		} );
	};

} )( jQuery, window, document );
