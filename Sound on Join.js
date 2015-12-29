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
    name: 'Sound on Join',
    version: '1.0.7',
    description: 'Play\'s a Sound, Track; Write a Message or Speak a Text if a User joined the Server',
    author: 'Crank015 <cranker015@gmail.com> & Lala Deviluke <latias@mail.latias.info>',
    vars: {
	Sound: {
            title: 'What Sound?',
            type: 'track'
	},
	message: {
            title: 'What Message? %n = Nickname',
            type: 'string'
        },
	language: {
            title: 'Language',
            type: 'select',
            options: ['Deutsch',
               		'English']
        },
        Typ: {
            title: 'Type',
            type: 'select',
            options: ['Private chat',
                	'Sound/Music',
			'TTS']
        }
    }
}, function(sinusbot, config, info) {

//Load Messages
    log('');
    log('Loading...');
    log('');
    var author = info.author.split(',');
    if(author.length == 1){
        author = author[0];
        author = author.replace(/<.*>/gi, '').trim();
    } else {
        author = author.map(function(e){
            return e.replace(/<.*>/gi, '').trim();
        });
        author = author.join(' & ');
    }
    log(info.name + ' v' + info.version + ' by ' + author + ' for SinusBot v0.9.9-8f70ff3 (and above)');
	
//Script
      	var chat = config.message;
	var lang;
	var sound = config.Sound['url'];
	
	switch(config.language) {
		case 'Deutsch':
			lang = 'eurgermanfemale';
			break;
		case 'English':
			lang = 'usenglishfemale';
			break;
	}

	sinusbot.on('clientMove', function(ev) {
		chat = chat.replace(/%n/g, ev.clientNick);
		if (ev.oldChannel == 0) {
            		if (config.Typ == 0) {
                		chatPrivate(ev.clientId, chat);
            		} else if (config.Typ == 1) {
				play(sound);
			} else {
				say(chat, lang);
			}
			return;
		}
	});
//Info
    log('');
    log('Loaded !');
    log('');
});
