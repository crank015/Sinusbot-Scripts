registerPlugin({
    name: 'Standart-Options',
    version: '1.0.1',
    description: 'Set\'s the default Options',
    author: 'Crank015 <cranker015@gmail.com>',
    vars: {
		Command: {
			title: 'Command',
			type: 'string'
		},
		
		Volume: {
			title: 'Volume (0 - 100)',
			type: 'number'
		},
		
		Mute: {
			title: 'Mute?',
			type: 'select',
			options: ['Nein',
                'Ja']
		},
		
		Track: {
			title: 'Track',
			type: 'track',
		},
		
		Description: {
			title: 'Description',
			type: 'string'
		},
		
		Channel: {
			title: 'Standart Channel',
			type: 'channel'
		}
	}
}, function(sinusbot, config) {
		var v = config.Volume;
		var track = config.Track['url'];
		var desc = config.Description;
		var ch = config.Channel;
		var cmd = config.Command;
		
		if (config.Mute == 0) {
			var mute = false;
		} else {
			var mute = true;
		}
	
	sinusbot.on('chat', function(ev) {
		if (ev.msg == cmd) {
			setVolume(v);
			play(track);
			setDescription(desc);
			setMute(mute);
			join(ch);
		}
	});
});