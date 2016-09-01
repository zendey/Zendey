
initialize();

var card;
var card_counter = 0;

function set_app( data ){
	// Get card word list.
	read_file( "../asset/vendor/zendey/0.0.1/card/sight_word/primer.txt", set_card );
	document.getElementById( "z_card" ).addEventListener( "click", display_card );
	display_card();
}

function set_card( data ){
	card = data;
}

function display_card(){
	if( card_counter < card.length ){
		document.getElementById( "z_card" ).innerHTML = card[ card_counter ];
		card_counter++;
	} else {
		card_counter = 0;
	}	
}