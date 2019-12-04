function Alert_green(){
    $('.alert').css("top", "0");
}

function Delete_Alert_green(){
    $('.alert').css("top", "-60px");
}

setTimeout(Alert_green, 500);

setTimeout(Delete_Alert_green, 5000);

$(document).ready(function () {
    $('input').focus(function(){
      $(this).data('placeholder',$(this).attr('placeholder'))
      $(this).attr('placeholder','');
    });
    $('input').blur(function(){
      $(this).attr('placeholder',$(this).data('placeholder'));
    });
});
