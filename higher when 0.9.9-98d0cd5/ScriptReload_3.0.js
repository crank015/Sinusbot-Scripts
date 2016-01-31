registerPlugin({
    name: 'ScriptReload3',
    version: '3.0',
    description: 'Script Reload 3.0',
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

				sinusbot.log("SIDs not valid...");
				var sids = new Array();
		   }

		   if (config.ids) {
				
				var uids = config.ids.split(',');
		    } else {
				sinusbot.log("UIDs not valid...");
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
									
                                        sinusbot.chatPrivate(ev.clientId, '[color=blue][b][ScriptReload][/b][/color] [color=red]Scripts werden neu geladen![/color]');
                                        sinusbot.log(ev.clientNick + ' lädt momentan die Scripts neu!');
                                        sinusbot.reloadScripts();
                                        sinusbot.chatPrivate(ev.clientId, '[color=blue][b][ScriptReload][/b][/color] [color=green]Scripts wurden neu geladen![/color]');
                                        sinusbot.log(ev.clientNick + ' hat die Scripts erfolgreich neu geladen!');

									break;
								}
				
						}
	
			
		});


});
