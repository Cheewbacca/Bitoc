$(document).ready(function () {
    $('input,textarea').focus(function(){
      $(this).data('placeholder',$(this).attr('placeholder'))
      $(this).attr('placeholder','');
    });
    $('input,textarea').blur(function(){
      $(this).attr('placeholder',$(this).data('placeholder'));
    });
});

var range = document.getElementById('r-slider');

noUiSlider.create(range, {
    start: 0,
    tooltips: false, 
    connect: [true, false], 
    padding: 0,

    range: {
        'min': 0,
        'max': 3250
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

$('#subm').click(function(){
    $('.wrapper').addClass('milk');
    $('.alert').css("top", "0");
});

