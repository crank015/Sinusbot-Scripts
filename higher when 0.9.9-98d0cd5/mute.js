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
 * @author Crank015 <cranker015@gmail.com>
 * @author Lala Deviluke <latias@mail.latias.info>
 * 
 */
registerPlugin({
	name: 'Mute',
	version: '2.0',
	description: 'Mutet den Bot',
	author: 'Crank015 <cranker015@gmail.com> & Lala Deviluke <latias@mail.latias.info>',
	vars: {}
}, function(sinusbot, config) {
	sinusbot.on('chat', function(ev) {
		switch(ev.msg) {
			case '!mute':
				setMute(true);
				break;
			case '!unmute':
				setMute(false);
				break;
		}
	});
});
