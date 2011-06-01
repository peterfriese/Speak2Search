$(document).ready(function(){
	$('[type=text]').attr("x-webkit-speech", "");
	$('[type=text]').bind("webkitspeechchange", function(field) {
		console.log(field);
		var fieldName = $(field.target).attr('name');
		if (fieldName == 'q' || fieldName == 'search') {
			field.target.form.submit();			
		}
	});
	$('[type=search]').attr("x-webkit-speech", "");
	$('[type=search]').bind("webkitspeechchange", function(field) {
		field.target.form.submit();
	});	
});
