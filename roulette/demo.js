$(function(){

	$('.roulette').find('img').hover(function(){
	});
	var p = {
		startCallback : function() {
      $('.start').attr('disabled', 'true');
		},
		slowDownCallback : function() {
			$('.stop').attr('disabled', 'true');
		},
		stopCallback : function($stopElm) {
			$('.start').removeAttr('disabled');
			$('.stop').attr('disabled', 'true');
      var val = $stopElm.attr("src");
      var message = {
        type: 'image',
        originalContentUrl: val,
        previewImageUrl: val
      }
      liff.sendMessages([
        message,
      ]).then(function () {
        window.alert("結果を送信した");
      }).catch(function (error) {
        window.alert("Error sending message: " + error);
      });

		}

	}
	var rouletter = $('div.roulette');
	rouletter.roulette(p);
	$('.stop').click(function(){
		var stopImageNumber = $('.stopImageNumber').val();
		if(stopImageNumber == "") {
			stopImageNumber = null;
		}
		rouletter.roulette('stop');
	});
	$('.stop').attr('disabled', 'true');
	$('.start').click(function(){
		rouletter.roulette('start');
	});

	$('.image_sample').children().click(function(){
		var stopImageNumber = $(this).attr('data-value');
		$('#stopImageNumber').spinner('value', stopImageNumber);
		updateStopImageNumber(stopImageNumber);
	});
});
