var range = document.getElementById('r-slider');

noUiSlider.create(range, {
    start: 0,
    tooltips: false, 
    connect: [true, false], 
    padding: 0,

    range: {
        'min': 16,
        'max': 500000
    }
});

var updateSliderValue = document.getElementById('dollars');
var updateSliderValueDLR = document.getElementById('dlr');


range.noUiSlider.on('update', function (values, handle) {
	updateSliderValue.value = values[handle] + " $";
	updateSliderValueDLR = values[handle];
});

updateSliderValue.addEventListener("change", function(){
    let temp = updateSliderValue.value.split("$"); 
    range.noUiSlider.set(temp);
});


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
