$(function(){

	$('.roulette').find('img').hover(function(){
		console.log($(this).height());
	});
	var p = {
		startCallback : function() {
		},
		slowDownCallback : function() {
			$('.stop').attr('disabled', 'true');
		},
		stopCallback : function($stopElm) {
			$('.start').removeAttr('disabled');
			$('.stop').attr('disabled', 'true');
      var val = $stopElm.attr("value");

      var params = {
        val: val,
      }
      var messages = {
        type: 'text',
        text: '獲得したのは ' + val
      }
      alert('send message');
      liff.sendMessages([
        messages,
      ]).then(function () {
        window.alert("送信した");
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
