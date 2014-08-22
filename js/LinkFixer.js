$(document).ready(function() {
        $( "#CleanInput" )
                .keyup(function() {
                        var myValue = $(this).val();
                        myValue = myValue.replace(/ /g, '');
                        $(CleanLink).html("Link: " + myValue.link(myValue));
        });
	$( "#ProxyInput" )
		.keyup(function() {
			var myValue = $(this).val();
			myValue = "https://proxy.library.adelaide.edu.au/login?url=" + myValue.replace(/ /g, '');
			$(ProxyLink).html("Link: " + myValue.link(myValue));
	});
});
