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
    name: 'MusicInChannel',
    version: '2.0',
    description: 'Play\'s Music via botMove Event',
    author: 'Crank015 <cranker015@gmail.com> & Lala Deviluke <latias@mail.latias.info>',
    vars: {
	Music: {
            	title: 'What Music?',
        	type: 'string'
	},
	Channel: {
            	title: 'Channel?',
            	type: 'string'
    	},
	Type: {
            	title: 'Type',
            	type: 'select',
            	options: ['Track',
	                'Playlist']
	},
	Language: {
            	title: 'Language',
            	type: 'select',
            	options: ['DE',
	                'EN']
    	}
    }
}, function(sinusbot, config) {


    sinusbot.log('');
    sinusbot.log('Loading...');
    sinusbot.log('');
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
    sinusbot.log(info.name + ' v' + info.version + ' by ' + author + ' for SinusBot v0.9.9-8f70ff3 (and above)');


		var uuid = config.Music;
		var channel = config.Channel;
            if (config.Type == 0) {
		var typ = 'track://';
	    } else {
		var typ = 'playlist://';
		}

            if (config.Language == 0) {
		var log1 = 'Nicht im Angegebenen Channel';
		var log2 = 'Aktuelle Channel ID '
	    } else {
		var log1 = 'Not in the configurated Channel';
		var log2 = 'Current Channel ID: '
		}

    sinusbot.on('botMove', function(ev) {
	if (ev.newChannel == channel) {
		sinusbot.play(typ + uuid);
	} else {
		sinusbot.log(log1);
		sinusbot.log(log2 + ev.newChannel);
	}
    });
    log('');
    log('Loaded !');
    log('');
});
