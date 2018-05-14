// Comecar novamente
var comecarNvm = document.querySelector('#b');


//  Seleciona todos quadrados
var quadrados = document.querySelectorAll('td');

// Limpa a mesa
function limparMesa(){
  for (var i = 0; i < quadrados.length; i++) {
    quadrados[i].textContent = '';
  }
}
comecarNvm.addEventListener('click', limparMesa);

// Checa a mesa
function trocarMarcadores(){
  if(this.textContent === ''){
    this.textContent = 'X';
  }else if (this.textContent === 'X') {
    this.textContent = 'O';
  }else {
    this.textContent = '';
  }
}

for (var i = 0; i < quadrados.length; i++) {
  quadrados[i].addEventListener('click', trocarMarcadores)
}
