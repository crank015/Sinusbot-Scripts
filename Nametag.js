registerPlugin({
	name: 'Nametag'
	version: '1.2'
	description: 'meep meep'
	author: 'Crank015 <cranker015@gmail.com>'
	vars: {
		refresh: {
			title: 'Refresh Time',
			type: 'number'
		},
		debug: {
			title: 'Debug Mode',
			type: 'select'
            options: [
                'No',
                'Yes'
            ]
		},
		nickchange: {
			title: 'Nickname Change',
			type: 'select'
			options: [
				'Yes',
				'No'
			]
		},
		descchange: {
			title: 'Description Change',
			type: 'select'
			options: [
				'Yes',
				'No'
			]
		},
		descchange_message: {
			title: 'Description %t = Title, %a = Artist, %q = Album, %h = tempTtitle, %b = tempArtist',
			type: 'string'
		}
		
	}
}, function(sinusbot, config, info) {
	if (config.debug == 1) {
		chatChannel('Plugin ' + info.name + ' Version: ' + info.version + ' loaded!')
		log('Plugin ' + info.name + ' Version: ' + info.version + ' loaded!');
	}
	var counter = 0;
	var nickchange = config.nickchange;
	var descchange = config.descchange;
	var desc;
	var refresh = config.refresh;
	var none = '-';
	var pl;
	var tt;
	var track;
	var nick;
	var desc;
	var nickname;
	var nonetrack = 'undefine';
	
	if (typeof refresh == 'undefined') {
		var refresh = 15;
	}
	if (typeof config.refresh == 'undefined') {
		var nickchange = 0;
	}
	if (config.debug == 1) {
		log('Alle Variablen geladen');
	}
	
	sinusbot.on('timer', function(stamp) {
		counter++
		if (counter > refresh) {
			if (config.debug == 1) {
				log('counter > refresh')
				chatChannel(counter + ' > ' + refresh);
			}
			
			var track = getTrack();
			var tt = track.title;
			var nickname = getNick();
			
			if (!track) return;
			
			if (typeof track.tempArtist == 'undefined') {
				track.tempArtist = none;
			}
			if (typeof track.tempTitle == 'undefined') {
				track.tempTitle = none;
			}
			if (typeof track.title == 'undefined') {
				track.title = none;
			}
			//Nickname Change 
			if (tt != nickname) {
				if (config.debug == 1) {
					chatChannel('if ' + nickname + ' # ' + tt);
				}
				if (nickchange == 0) {
					if (config.debug == 1) {
						chatChannel('Nickchange = 0');
					}
					if (playing()) {
						
						var nick = tt;
						if (nick.length > 30) {
							var nick = '► Musikbot';
						}
						setNick(nick);
					} else {
						setNick('■ Offline');
					}
				}
			
				if (nickchange == 1) {
					if (config.debug == 1) {
						chatChannel('Nickchange not activ! ');
					}
				}
			} else {
				if (config.debug == 1) {
					chatChannel('else ' + nickname + ' # ' + tt);
				}
			}
			//Nickname Change end
			//Description Change
			if (descchange == 0) {
				if (playing()) {
					//descchange_message
					var desc = config.descchange_message;
					desc = desc.replace(/%t/g, track.title);
					desc = desc.replace(/%a/g, track.Artist);
					desc = desc.replace(/%q/g, track.album);
					desc = desc.replace(/%b/g, track.tempArtist);
					desc = desc.replace(/%h/g, track.tempTitle);
					setDescription(desc);
				} else {
					setDescription('■ Offline')
				}
			}
			
			counter = 0;
		}
	});
});