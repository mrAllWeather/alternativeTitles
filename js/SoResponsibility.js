$(document).ready(function() {
	$( "#SORInput" )
		.keyup(function() {
			var noLines = $(this).val();
			//REMOVE NEWLINES, TABS. REPLACE WITH SPACE. DELETE "double" SPACES
			noLines = noLines.replace(/[\r\n\t]/g, ' ');

			//REMOVE NON-NAME CHARACTERS
			var nonRoman = /[^a-zA-Z,\s\.\-']/g;
			var match = noLines.match(nonRoman);
			var letters = XRegExp('\\p{L}', 'ig');
			if(match) {
				console.log(match);
				for(var i = 0; i < match.length; i++) {
					if (!XRegExp.test(match[i], letters)) {
						match[i] = match[i].replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
						var re = new RegExp(match[i], 'g');
						noLines = noLines.replace(re, ", ");
					}
				}
			}
			
			//REMOVE DUPLICATE SPACES
			noLines = noLines.replace(/ {2,}/g, ' ');

			//REPLACE MULTIPLE SPACES / COMMAS WITH SINGLE
			noLines = noLines.replace(/([a-zA-z.\-]+)[\s,]*,/g, '$1,');
			noLines = noLines.replace(/[\s,]*,/g, ',');

			//ENSURE SPACE AFTER EACH COMMA
			noLines = noLines.replace(/,([^ ])/g, ', $1');
			noLines = noLines.trim();
			
			//REMOVE COMMA IF AT END
			if(noLines.charAt(noLines.length -1) == ',') {
				noLines = noLines.substring(0, noLines.length -1);
			}

			$( "#SOROutput" ).text(noLines);
	});
});
