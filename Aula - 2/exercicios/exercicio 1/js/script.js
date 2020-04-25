/*
  Exercício 1
  -----------

  A função insertion cria elementos no DOM e para isso recebe três argumentos, o elemento, o ID de um elemento
  já existente no seu HTML e o texto que será inserido no elemento criado.   
*/

function insereElementoDeTexto(elemento,id,texto){
  
  const elementoNovo = document.createElement(elemento);
  elementoNovo.innerText = texto;
  const elementoExistente = document.querySelector(id);
  elementoExistente.appendChild(elementoNovo);
} 

insereElementoDeTexto('p','#container',"Fui criado com Javascript"); 