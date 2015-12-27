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
    name: 'Restart',
    version: '1.0',
    description: 'The Bot will be Restart with a command',
    author: 'Crank015',
    vars: {
        Restart_command:: {
            title: 'Restart command',
            type: 'string',
            placeholder: '!restart'
        }
    }
}, function(sinusbot, config) {
		var command = config.Restart_command;
	if (config.CommandChannel == undefined) {
		log (No command has been set!);
	}

    sinusbot.on('chat', function(ev) {
		if (ev.msg == command) {
			disconnect();
			connect();
			log('The Bot is restarted!');
		}
    });
});
