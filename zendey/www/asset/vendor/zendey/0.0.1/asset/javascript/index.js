
initialize();

function set_app( data ){
	add_stylesheet( data, 1 );
	set_title( data );
	set_brand_title( data );
	set_app_title( data );
}

function set_brand_title( data ){
	// Set brand title.
	document.getElementById( "z_brand_title" ).innerHTML = data[ "brand_title" ];
}

function set_app_title( data ){
	// Set app title.
	document.getElementById( "z_app_title" ).innerHTML = data[ "app_title" ];
}