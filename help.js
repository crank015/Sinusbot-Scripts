registerPlugin({
    name: '!help Erweiterung',
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
	var k = config.t;
	
	sinusbot.on('chat', function(ev) {
		if (ev.msg == !help) {
			chatPrivate(clientId, k)
		}
	});
});