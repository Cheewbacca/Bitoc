var range = document.getElementById('r-slider');

noUiSlider.create(range, {
    start: 0,
    tooltips: false, 
    connect: [true, false], 
    padding: 0,

    range: {
        'min': 16,
        'max': 1000000
    }
});

var updateSliderValue = document.getElementById('dollars');

range.noUiSlider.on('update', function (values, handle) {
    updateSliderValue.value = values[handle] + " $";
});

updateSliderValue.addEventListener("change", function(){
    let temp = updateSliderValue.value.split("$"); 
    range.noUiSlider.set(temp);
});

// $('#subm').click(function(e){
//     e.preventDefault();
//     $('.milk').css("display", "block");
//     $('.alert').css({"top":"0", "z-index":"1000000000"});
//     $(this).unbind('submit').submit()
//     $("html, body").animate({ scrollTop: 0 }, "slow");
// });

$(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() >= '750' && $(this).width() >= '480') {
			$('.button').fadeIn();
		} else {
			if ( $(this).scrollTop() >= '240' && $(this).width() < '480'){
				$('.button').fadeIn();
			}
			else{
				$('.button').fadeOut();
			}
			
		}
	});
});

// document.getElementById('subm').addEventListener('submit', function(event){
//     event.preventDefault();
  
//     let form = event.target;
//     console.log(window.e = event, window.f = event.target);
//     // return;
  
//     $.ajax({
//       type: 'post',
//       url: form.action,
//       dataType: 'json',
//       data: {
//         _token: form['_token'].value,
//         wallet: form.wallet.value,
//       },
//       success: function(data, status){
//         console.log(data, status);
//         if(data.success == true)   alert(data.message);
//         else             alert('Error: ' + data.message);
//       },
//       error: function(data, status){
//         console.log(data, status);
//               if(data.status == 422 && data.responseJSON && data.responseJSON.errors){
//                   alert('Invalid form');
//                   let errors = '';
//                   for(e in data.responseJSON.errors){
//                       errors += data.responseJSON.errors[e].join('\n') + '\n';
//                   }
//                   alert(errors);
//                   return;
//               }
//               if(data.status == 302){
  
//                   return;
//               }
//               alert('Server error, try again later!');
//       }
//     });
//   });
