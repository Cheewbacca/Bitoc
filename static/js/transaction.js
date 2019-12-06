const progress_bars = document.querySelectorAll('.progress');

progress_bars.forEach(bar => {
    const { size } = bar.dataset;
    bar.style.width = `${size}%`;
});


$('#trans').click(function(e){
  e.preventDefault();
  $('.milk').css("display","none");
})

let closure = function(tokens = true){
  let price = parseFloat(document.getElementById('payment-form').getAttribute('data-price'));

  if(tokens){
    let another = document.getElementById('payment-form-money');
    return function(event){
      this.value = this.value.replace(/[^0-9\.]/ig, '');
      if(this.value != ''){
        another.value = Math.round(parseInt(this.value) * price * 1000) / 1000;
      }
    }
  }
  else{
    let another = document.getElementById('payment-form-tokens');
    return function(event){
      this.value = this.value.replace(/[^0-9\.]/ig, '');
      if(this.value != ''){
        another.value = Math.floor(parseFloat(this.value) / price);
      }
    }
  }
}

let pft = document.getElementById('payment-form-tokens');
pft.addEventListener('input', closure());
pft.addEventListener('paste', closure());

let pfm = document.getElementById('payment-form-money');
pfm.addEventListener('input', closure(false));
pfm.addEventListener('paste', closure(false));