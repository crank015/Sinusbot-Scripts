registerPlugin({
    name: 'TrackInfo',
    version: '1.0.2',
    description: 'Edit Nick&Description / Send Messages with the Track Title',
    author: 'Crank015 <cranker015@gmail.com>',
    vars: {
		Desc: {
			title: 'Description',
			type: 'select',
			options: ['Yes',
               		'No']
		},

		ChatS: {
			title: 'Server Chat',
			type: 'select',
			options: ['Yes',
               		'No']
		},

		ChatC: {
			title: 'Channel Chat',
			type: 'select',
			options: ['Yes',
               		'No']
		},
		
		Name: {
			title: 'Nickname Change',
			type: 'select',
			options: ['Yes',
               		'No']
		}
	}
}, function(sinusbot, config) {
	
	if(config.Desc == 0) {
		var a = sinusbot.setDescription(track.title);
	} else {
		var a = new Array();
	}
	
	if(config.ChatC == 0) {
		var b = sinusbot.chatChannel('Now Playing: ' + track.title);
	} else {
		var b = new Array();
	}
	
	if(config.ChatS == 0) {
		var c = sinusbot.chatServer('Now Playing: ' + track.title);
	} else {
		var c = new Array();
	}
	
	if(config.Name == 0) {
		var d = sinusbot.setNick(track.title);
	} else {
		var d = new Array();
	}
	
	
    sinusbot.on('track', function(ev) {
				a; //setDescription
				b; //chatChannel
				c; //chatServer
				d; //setNick
		});
});