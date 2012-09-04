function ddg_spice_lastfm_top_tracks(lastfm) {
	console.log(lastfm);
	if(lastfm.toptracks.track){
		var songs = '<div style="top">', length = 10;
		for(var i = 0;i < 10;i++) {
			songs += '<a href="/?q=' + encodeURIComponent(lastfm.toptracks.track[i].name + ' song by ' + lastfm.toptracks.track[i].artist.name) + '">' + 
					lastfm.toptracks.track[i].name + '</a>';
			songs += '<span style="color: rgb(119, 119, 119); font-size: 11px; ">​ (by <a href="/?q=' + encodeURIComponent('artist ' + lastfm.toptracks.track[i].artist.name) + '">' +
					lastfm.toptracks.track[i].artist.name + '</a>)</span><br>';
		}
		songs += '</div>';
		var items = new Array();
		items[0] = new Array();
		items[0]['a'] = songs;
		items[0]['h'] = 'Top 10 Tracks in the ' + lastfm.toptracks["@attr"].country;
		items[0]['s'] = 'Last.fm';
		items[0]['u'] = 'http://www.last.fm/charts/tracks/top';
		items[0]['f'] = 1;
		items[0]['force_big_header'] = true;
		//items[0]['i'] = 'http://cdn.last.fm/flatness/apple-touch-icon.png';
		nra(items);
	}
}