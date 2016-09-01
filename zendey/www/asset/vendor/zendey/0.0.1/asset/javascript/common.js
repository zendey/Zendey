function initialize(){
	// Load app json.
	load_json_data( "../asset/vendor/zendey/0.0.1/app/sight_word/app.json", set_app );
}

function set_title( data ){
	document.title = data[ "brand_title" ] + " " + data[ "app_title" ];
}

function load_json_data( file, callback ){
	var request = new XMLHttpRequest();
	request.open( "GET", file, true );

	request.onload = function() {
		if (request.status >= 200 && request.status < 400) {
			// Success!
			var data = JSON.parse(request.responseText);
			if (typeof callback == "function") {
				callback( data );	
			}		
		} else {
		// We reached our target server, but it returned an error

		}
	};
/*
	request.onerror = function() {
	  // There was a connection error of some sort
	};*/

	request.send(null);
	
}

function add_stylesheet( data, home ){
	link = document.createElement( "link" );
	var stylesheet_path = "asset/vendor/zendey/0.0.1/app/sight_word/" + data[ "css" ];
	if ( !home ){
		stylesheet_path = "../" + stylesheet_path;
	}
	link.href = stylesheet_path;
	link.type = "text/css";
	link.rel = "stylesheet";
	link.media = "screen,print";
	document.getElementsByTagName( "head" )[0].appendChild( link );
}

function read_file(file_path, callback){
    var file = new XMLHttpRequest();
    file.open("GET", file_path, false);
    file.onreadystatechange = function (){
        if(file.readyState === 4){
            if(file.status === 200 || file.status == 0){
                var data = file.responseText;
				data = data.split("\n");
				callback( data );
            }
        }
    }
    file.send(null);
}