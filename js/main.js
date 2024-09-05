(function ($, undefined) {
	//title
	var param = window.location.search.match(/(r=)([\%\w\d]+)+/g);
	if (param) {
		document.title = window.decodeURI(param[0].split('=')[1]);
	}

	//count
	var weddingDate = new Date('2024/10/2 12:18:18').getTime();
	function formatTime (time, digit) {
		return ('0' + time).slice(0 - (digit || 2));
	}

	function setMessage (count) {
		if (count < 0) {
			count = 0 - count;
			$('.invite-count').addClass('success');
		}
		return count;
	}

	setInterval(function () {
		var during = Math.ceil((weddingDate - (new Date()).getTime())/1000);
		var count = setMessage(during);
		var date = {
			day: Math.floor(count/86400),
			hour: formatTime(Math.floor((count%86400)/3600)),
			minute: formatTime(Math.floor((count%3600)/60)),
			second: formatTime(Math.floor(count%60))
		};
		$.each('day hour minute second'.split(' '), function (index, key) {
			$('.count-' + key).html(date[key]);
		});
	}, 250);


})(jQuery);
