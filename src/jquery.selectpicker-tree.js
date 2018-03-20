;( function( $, window, document ) {
	const pluginName = "selectpickerTree";
	const defaults = {
		data: [],
		metadata: {}
	};

	function Plugin( element, options ) {
		this.settings = $.extend( {}, defaults, options );
		this.element = element;
		this.init();
	}

	$.extend( Plugin.prototype, {
		init: function() {
			console.log( this.element );
			$( document ).ready( () => {
				this.addSelectpicker( this.settings.data, this.settings.metadata );
			} );
		},
		addSelectpicker: function( data, metadata ) {
			const formGroup = this.createFormGroupWithLabel( metadata.label );
			const selectpicker = $( `<select class="selectpicker form-control"></select>` );
			data.map( child => this.createOption( child, metadata ) )
				.forEach( option => selectpicker.append( option ) );
			formGroup.append( selectpicker );
			$( this.element ).append( formGroup );

			this.initSelectpicker( selectpicker, metadata.options );
		},
		createFormGroupWithLabel: function( label ) {
			const formGroup = $( `<div class="form-group"></div>` );
			if ( label !== undefined ) {
				formGroup.append( $( `<label>${label}</label>` ) );
			}
			return formGroup;
		},
		createOption: function( child, metadata = {} ) {
			const optionName = typeof child === "string" ?
				child : child[ metadata.name ? metadata.name : "name" ];
			const option = $( `<option>${optionName}</option>` );
			option.data( "data", child[ metadata.children ? metadata.children : "items" ] );
			option.data( "metadata", metadata.child ? metadata.child : {} );
			return option;
		},
		initSelectpicker: function( selectpicker, options ) {
			selectpicker.selectpicker( this.getSelectpickerOptions( options ) );
			const plugin = this;
			selectpicker.on( "changed.bs.select", function( event ) {
				const option = $( this ).find( "option:selected" );
				$( event.currentTarget ).parent().parent().nextAll( "div" ).remove();
				if ( option.data().data ) {
					plugin.addSelectpicker( option.data().data, option.data().metadata );
				}
			} );
		},
		getSelectpickerOptions: function( options ) {
			const defaultOptions = {
				liveSearch: true
			};
			options = options ? options : defaultOptions;
			if ( options.title === undefined ) {
				options.title = "Choose one...";
			}
			return options;
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
