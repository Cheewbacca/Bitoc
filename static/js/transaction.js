const progress_bars = document.querySelectorAll('.progress');

progress_bars.forEach(bar => {
    const { size } = bar.dataset;
    bar.style.width = `${size}%`;
});

function Alert_yellow(){
    $('.alert').css("bottom", "0");
}

setTimeout(Alert_yellow, 500);

$('.alert').click(function(){
  $('.alert').css("display", "none");
});

$('#trans').click(function(e){
  e.preventDefault();
  $('.milk').css("display","none");
})
