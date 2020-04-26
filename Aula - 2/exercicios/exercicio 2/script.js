/*
  Exercício 2
  -----------

  Instruções:

  1. Mude o estilo do body para que a font-family seja "Arial, sans-serif"

  2. Substitua cada span com informações suas.

  3. Percorra por cada li e altere sua propriedade class para "list-item". Em seguida adicione no HTML a tag style com a classe "list-item"
  para que a propriedade color de cada li seja red.

  4. Crie um elemento img e coloque no atributo src uma foto sua. Não se esqueça de adicionar o novo elemento na página.
  
*/

const body = document.querySelector('body'); 

body.style.fontFamily = "Arial, sans-serif";

const nickname = document.querySelector('#nickname');
const favorites = document.querySelector('#favorites');
const hometown = document.querySelector('#hometown');

nickname.innerText = "Lô";
favorites.innerText = "Viagens, ler, séries, tecnologia, cozinhar";
hometown.innerText = "São Paulo";

const lista = document.querySelectorAll('li'); 

for (i=0; i<lista.length; i++){
  lista[i].classList.add('list-item');
  lista[i].style.backgroundColor = "red";
}

const minhaFoto = document.createElement('img');
minhaFoto.src = "https://scontent.fcgh23-1.fna.fbcdn.net/v/t1.0-9/12642602_1097990556919837_8065009182128806472_n.jpg?_nc_cat=111&_nc_sid=174925&_nc_ohc=V5Gv7lqVfAAAX8Rf_bJ&_nc_ht=scontent.fcgh23-1.fna&oh=87b7748492fd19193f3beab255166540&oe=5EC8D266";
body.appendChild(minhaFoto);