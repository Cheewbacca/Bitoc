if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    $('input').focus(function(){
        $('.logo').css("margin-top", "0px");
    });
}
