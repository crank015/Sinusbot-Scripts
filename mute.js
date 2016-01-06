 registerPlugin({
    name: 'Mute',
    version: '1.0',
    description: 'Mutet den Bot',
    author: 'Crank015',
    vars: {

	Volume: {
            	title: 'Volume? (zwischen 1-100)',
            	type: 'string'
    }
 }
 }, function(sinusbot, config) {
	var v = config.Volume;

		sinusbot.on('chat', function(ev){

			switch(ev.msg) {
				case '!mute' :
					log('!mute')
		                	setMute(true);
				break;

				case '!unmute' :
					log('!unmute')
		                	setMute(false)
				break;
				}
		});	
});
