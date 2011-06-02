$(document).ready(function() {
	
	/**
	 * Augment the given field with speech input capabilities:
	 */
	function enableSpeech(inputElement) {
		$(inputElement).attr('x-webkit-speech', '');
		$(inputElement).bind('webkitspeechchange', function(field) {
			var fieldname = $(field.target).attr('name');
			if (fieldName == 'q' || fieldName == 'search') {
				field.target.form.submit();
			}
		})		
	}
	
	// augment all text input fields and search fields with speech input capabilities:
	$('input').each(function(index, element) {
		var type = element.type;
		if (type == 'text' || type == 'search') {
			enableSpeech(element);
		}
	});
	
	// speech input currently not available for textareas, but let's try anyway to be safe for the future:
	$('textarea').each(function(index, element) {
		enableSpeech(element);
	});
	
	// special handling for xing.com:
	if (window.location.hostname.indexOf('xing') >= 0) {
		$('body').attr('lang', 'de');
		$('html').attr('lang', 'de');
		$('.usearchform button').css('right', '-16px');		
	}
	
});
