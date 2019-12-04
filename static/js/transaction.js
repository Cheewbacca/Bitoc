const progress_bars = document.querySelectorAll('.progress');

progress_bars.forEach(bar => {
    const { size } = bar.dataset;
    bar.style.width = `${size}%`;
});

function Alert_yellow(){
    $('.alert').css("bottom", "0");
}

setTimeout(Alert_yellow, 500);

$(document).ready(function () {
    $('input').focus(function(){
      $(this).data('placeholder',$(this).attr('placeholder'))
      $(this).attr('placeholder','');
    });
    $('input').blur(function(){
      $(this).attr('placeholder',$(this).data('placeholder'));
    });
});

$('.alert').click(function(){
    $('.alert').css("display", "none");
});