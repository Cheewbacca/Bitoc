(function(){
  let progress = document.getElementById('progress-container');
  let sections = progress.getAttribute('data-progress-sections'),
    value = parseInt(progress.getAttribute('data-progress-value')),

    current;

  let span = document.getElementById('prg');
  span.textContent = value;

  if(isNaN(value) || value < 0) throw new Error('Invalid progress value');
  
  current = null;
  sections = sections.split(',');
  for(let i = 0; i < sections.length; i++){
    sections[i] = parseInt(sections[i]);
    if(isNaN(sections[i]) || sections[i] < 1) throw new Error('Invalid values for sections markup');
    if(value <= sections[i] && current == null) current = i;
  }
  if(current == null) throw new Error('Progress value is bigger that last section limit');
  current++;

  progress.style.width = (value * ((100 / sections.length) * current) / sections[current - 1]) + '%';
})();

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