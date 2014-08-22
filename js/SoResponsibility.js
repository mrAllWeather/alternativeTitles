$(document).ready(function() {
	$( "#SORInput" )
		.keyup(function() {
			var noLines = $(this).val();
			//REMOVE NEWLINES, TABS. REPLACE WITH SPACE. DELETE "double" SPACES
			noLines = noLines.replace(/[\r\n\t]/g, ' ');
			noLines = noLines.replace(/ {2,}/g, ' ');

			//REMOVE NON-ROMAN NAME CHARACTERS, CLEAN EXTRA COMMARS SPACES
			noLines = noLines.replace(/[^a-zA-Z,\s.\-']/g, '');
			noLines = noLines.replace(/([a-zA-Z.\-]+)[\s,]*,/g, '$1,')

			noLines = noLines.trim();
			$( "#SOROutput" ).text(noLines);
	});
});
