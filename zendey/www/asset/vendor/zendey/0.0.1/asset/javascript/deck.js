
initialize();

function set_app( data ){
	add_stylesheet( data );
	set_deck( data );
}

function set_deck( data ){
	// Set deck names.	
	var deck = '';
	var i;
	
	for ( i = 0; i < data.deck.length; i++ ){
		deck += '<div class="bp_column_3"><a href="card.html"><div class="bp_deck">' + data.deck[i].replace( '_', ' ' ) + '</div></a></div>';
	}

	document.getElementById( "z_deck" ).innerHTML = deck;
}