registerPlugin({
    name: 'ScriptReload3',
    version: '4.0',
    description: 'Script Reload 4.0',
    author: 'Crank015 & Lala Sabathil <admin@latias.eu>',
    vars: [
	  	  {
          name: 'ids',
		      title: 'Client Ids (Komma trennt): ',
		      type: 'string'
		    },
        {
          name: 'sids',
          title: 'Whitelisted Servergroup Ids (Comma seperated): ',
		   	  type: 'string'
		   }
	}

},	function (sinusbot, config)	{
				var engine = require('engine'),
        backend = require('backend'),
        event = require('event');
		 
       if (config.sids) {
			
				var sids = config.sids.split(',');

		   } else { 

				engine.log("SIDs not valid...");
				var sids = new Array();
		   }

		   if (config.ids) {
				
				var uids = config.ids.split(',');
		    } else {
				engine.log("UIDs not valid...");
				var uids = new Array();
		    }

		   
		   
		   
		   
		   event.on('chat', function(ev) {
						
					
					
						var IsInServerGroup = ev.client.getServerGroups().some(function(group) 
						{
								
								if(sids.indexOf(group.i.toString()) >= 0)
								{
									return true;

								} else { return false; }


						});

							

						if(uids.indexOf(ev.client.uid) >= 0 || IsInServerGroup == true)
						{
			
								switch(ev.msg)
								{
									case '!reload':
									
                                        ev.client.chat('[color=blue][b][ScriptReload][/b][/color] [color=red]Scripts werden neu geladen![/color]');
                                        engine.log(ev.client.name() + ' lädt momentan die Scripts neu!');
                                        engine.reloadScripts();
                                        ev.client.chat('[color=blue][b][ScriptReload][/b][/color] [color=green]Scripts wurden neu geladen![/color]');
                                        engine.log(ev.client.name() + ' hat die Scripts erfolgreich neu geladen!');

									break;
								}
				
						}
	
			
		});


});
