/*
  Exercício 3
  -----------

  Instruções:

  1. crie uma página com um h1 de "Minha lista de Livros"

  2. crie um array com objetos contendo informações dos livros que você mais gosta.
  
  ex.: {
    title: "Harry Potter e a Pedra Filosofal",
    author: "J. K. Rowling",
  }

 3. percorra pelo array de livros e, para cada livro, crie uma div com o título e autor do livro e 
  adicione ele na página.

  Bonus: adicione uma propriedade com a URL da imagem da capa do livro e crie também um img para cada livro

*/


const body = document.querySelector('body')
const tituloH1 = document.createElement('h1');
tituloH1.innerText = "Minha lista de Livros";
body.appendChild(tituloH1);

const booksArray = [ 
  {
    title: "Ensaio sobre a cegueira",
    author: "José Saramago",
  },
  {
  title: "Cem anos de solidãoo",
  author: "Gabriel García Marquez"
  },
  {
  title: "Precisamos falar sobre o Kevin",
  author: "Lionel Shriver"
  },
  {
  title: "Mulheres que correm com os lobos",
  author: "Clarissa Pinkola Estésu"
  }
]


for (i=0; i<booksArray.length; i++) {
  
  const divLivro = document.createElement('div')
  const tituloH2 = document.createElement('h2');
  const authorBook = document.createElement('p');
  tituloH2.innerText = booksArray[i].title;
  authorBook.innerText = booksArray[i].author;

  divLivro.appendChild(tituloH2);
  divLivro.appendChild(authorBook);
  body.appendChild(divLivro);
 
}

