registerPlugin({
    name: 'ScriptReload2',
    version: '2.0.2',
    description: 'Script Reload 2.0',
    author: 'Crank015',
    vars: {

	  	  ids: {
		    title: 'Client Ids (Komma trennt):',
		    type: 'string'
		  },
	   
		   sids: {
			   title: 'Whitelisted Servergroup Ids (Comma seperated):',
		   	   type: 'string'
		   }
	}

},	function (sinusbot, config)	{
					
		 
            if (config.sids) {
			
				var sids = config.sids.split(',');

		   } else { 

				log("SIDs not valid...");
				var sids = new Array();
		   }

		   if (config.ids) {
				
				var uids = config.ids.split(',');
		    } else {
				log("UIDs not valid...");
				var uids = new Array();
		    }

		   
		   
		   
		   
		   sinusbot.on('chat', function(ev) {
						
					
					
						var IsInServerGroup = ev.clientServerGroups.some(function(group) 
						{
								
								if(sids.indexOf(group.i.toString()) >= 0)
								{
									return true;

								} else { return false; }


						});

							

						if(uids.indexOf(ev.clientUid) >= 0 || IsInServerGroup == true)
						{
			
								switch(ev.msg)
								{
									case '!reload':
									
                                        chatPrivate(ev.clientId, '[color=blue][b][ScriptReload][/b][/color] [color=red]Scripts werden neu geladen![/color]');
                                        log(ev.clientNick + ' lädt momentan die Scripts neu!');
                                        reloadScripts();
                                        chatPrivate(ev.clientId, '[color=blue][b][ScriptReload][/b][/color] [color=green]Scripts wurden neu geladen![/color]');
                                        log(ev.clientNick + ' hat die Scripts erfolgreich neu geladen!');

									break;
								}
				
						}
	
			
		});


});
