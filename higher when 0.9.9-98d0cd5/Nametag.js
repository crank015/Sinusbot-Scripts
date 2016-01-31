registerPlugin({
	name: 'Nametag',
	version: '2.0',
	description: 'Can edit Name and Description',
	author: 'Crank015 <cranker015@gmail.com>',
	vars: {
		refresh: {
			title: 'Refresh Time (normal is 15s)',
			type: 'number'
		},
		nickchange: {
			title: 'Nickname Change',
			type: 'select',
			options: [
				'Yes',
				'No'
			]
		},
		descchange: {
			title: 'Description Change',
			type: 'select',
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
	//DEBUG MODE
	var debug = false;
	//DEBUG MODE
	if (debug == true) {
		sinusbot.chatChannel('Plugin ' + info.name + ' Version: ' + info.version + ' loaded!');
		sinusbot.log('Plugin ' + info.name + ' Version: ' + info.version + ' loaded!');
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
	
	if (typeof refresh == 'undefined') {
		var refresh = 15;
	}
	if (typeof config.refresh == 'undefined') {
		var nickchange = 0;
	}
	if (debug == true) {
		sinusbot.log('Alle Variablen geladen');
	}
	
	sinusbot.on('timer', function(stamp) {
		counter++
		if (counter > refresh) {
			if (debug == true) {
				sinusbot.log('counter > refresh')
				sinusbot.chatChannel(counter + ' > ' + refresh);
			}
			
			var track = getCurrentTrack();
			var tt = track.title;
			var nickname = sinusbot.getNick();
			
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
				if (debug == true) {
					sinusbot.chatChannel('if ' + nickname + ' # ' + tt);
				}
				if (nickchange == 0) {
					if (debug == true) {
						sinusbot.chatChannel('Nickchange = 0');
					}
					if (playing()) {
						
						var nick = tt;
						if (nick.length > 30) {
							var nick = '► Musikbot';
						}
						sinusbot.setNick(nick);
					} else {
						sinusbot.setNick('■ Offline');
					}
				}
			
				if (nickchange == 1) {
					if (debug == true) {
						sinusbot.chatChannel('Nickchange not activ! ');
					}
				}
			} else {
				if (debug == true) {
					sinusbot.chatChannel('else ' + nickname + ' # ' + tt);
				}
			}
			//Description Change
			if (descchange == 0) {
				if (sinusbot.playing()) {
					//descchange_message
					var desc = config.descchange_message;
					desc = desc.replace(/%t/g, track.title);
					desc = desc.replace(/%a/g, track.Artist);
					desc = desc.replace(/%q/g, track.album);
					desc = desc.replace(/%b/g, track.tempArtist);
					desc = desc.replace(/%h/g, track.tempTitle);
					sinusbot.setDescription(desc);
				} else {
					sinusbot.setDescription('■ Offline');
				}
			}
			
			counter = 0;
		}
	});
	sinusbot.on("chat", function(ev) {
		if(ev.msg == "!stop") {
			sinusbot.setDescription('■ Offline');
			sinusbot.setNick('■ Offline');
		}
	});
});