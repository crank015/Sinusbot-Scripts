registerPlugin({
    name: 'Nametag',
    version: '1.0',
    description: 'Set\'s the Track title as Nickname',
    author: 'Crank015 <cranker015@gmail.com>',
    vars: {}
	
}, function(sinusbot, config) {
	
	var t = track.title;
	
	sinusbot.on('track', function(ev) {
		setNick(t);
	});
	
	sinusbot.on('chat', function(ev) {
		if (ev.msg == '.nickchange') {
			setNick('test')
		}
	});
});