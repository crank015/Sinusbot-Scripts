registerPlugin({
    name: '!hilfe',
    version: '0.1',
    description: 'Erweitert den Output des !help Commands',
    author: 'Crank015 <cranker015@gmail.com>',
    vars: {
		t: {
			title: 'Text',
			type: 'string'
		}
	}
	
}, function(sinusbot, config) {
	var t = config.t;
	
	sinusbot.on('chat', function(ev) {
		if (ev.msg == '!hilfe') {
			chatPrivate(ev.clientId, t);
		}
		if (ev.msg == '!pic help') {
			chatPrivate(ev.clientId, 'Play in Channel Hilfe:');
		}
		if (ev.msg == '!soj help') {
			chatPrivate(ev.clientId, 'Sound on Join Hilfe:');
		}
		if (ev.msg == '!sr help') {
			chatPrivate(ev.clientId, 'Script Reload Hilfe: [color=blue]!reload -> Reloaded die Scripts[/color]');
		}
	});
});