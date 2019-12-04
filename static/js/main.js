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
        'min': 100,
        'max': 50000
    }
});

var updateSliderValue = document.getElementById('dollars');

range.noUiSlider.on('update', function (values, handle) {
    updateSliderValue.value = values[handle] + "+" + " $";
});

updateSliderValue.addEventListener("change", function(){
    let temp = updateSliderValue.value.split("+"); 
    range.noUiSlider.set(temp);
});

$('#subm').click(function(e){
    e.preventDefault();
    $('.wrapper').addClass('milk');
    $('.alert').css({"top":"0", "z-index":"1000000000"});
    $(this).unbind('submit').submit()
});

// var subm = document.getElementById('subm');
// var wrap = document.getElementsByClassName('wrapper');
// var alrt = document.getElementById('alrt');

// subm.onsubmit = function(){
//     wrap.className += "milk";
//     alrt.style.top = "0px";
//     alrt.style.zIndex = "10000000";
// };

