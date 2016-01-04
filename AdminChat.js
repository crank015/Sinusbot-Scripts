/*
 * Copyright (C) 2015 Crank015 <cranker015@gmail.com> & Lala Deviluke <latias@mail.latias.info>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/*
 * 
 * @author Crank015 <cranker015@gmail.com> & Lala Deviluke <latias@mail.latias.info> 
 * 
 */

registerPlugin({
    name: 'AdminChat',
    version: '1.1',
    description: 'Schreibt dem Admin wenn, ein User einen "! command " nutzt',
    author: 'Crank015 <cranker015@gmail.com> & Lala Deviluke <latias@mail.latias.info>',
    vars: {
			AdminID: {
				title: 'Admin UID',
				type: 'string'
			},
			{
			AdminGroup:
				title: 'Admin Group',
				type: 'string'
			}
		}
	}, function(sinusbot, config) {
		
		if (config.AdminID) {
			var adminid = config.AdminID.split(',');
		} else {
			log('AdminID\'s not valid...');
			var adminid = new Array();
		}
		
		if (config.AdminGroup) {
			var admingroup = config.AdminGroup.split(',');
		} else {
			log('AdminGroup\'s not valid...');
			var admingroup = new Array();
		}
		
	
	
	
		sinusbot.on('chat', function(ev) {

		
						var IsInServerGroup = ev.clientServerGroups.some(function(group) 
						{
								
								if(admingroup.indexOf(group.i.toString()) >= 0)
								{
									return true;

								} else { return false; }


						});

							

						if(adminid.indexOf(ev.clientUid) >= 0 || IsInServerGroup == true)
						{
			
			msg = ev.msg;
			command = msg.indexOf('!')
			
				if (if msg == command) {
					chatPrivate(AdminID, "User " + ev.clientNick + "hat einen Command genutzt");
				}
						}
    });
});