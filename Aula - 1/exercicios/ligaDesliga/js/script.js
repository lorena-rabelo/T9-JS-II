/*
  Exercício 1
  -----------

  Liga e desliga

  1. selecione a imagem do documento.
  2. selecione o body do documento. 
  3. crie a função "changeBg", essa função deve alterar o background do body quando o usuário clicar na imagem.

    
*/



const bg = document.querySelector('body');
const tetxo = document.querySelector('h4');

function changeBg () {
  if (bg.style.backgroundColor == 'white'){
    bg.style.backgroundColor = 'black';
    tetxo.style.color = 'white';
  }
  else {
    bg.style.backgroundColor = 'white';
    tetxo.style.color = 'black';
  }
}