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
    cover: "https://lojasaraiva.vteximg.com.br/arquivos/ids/2295746/1004559662.jpg?v=637014958182500000"
  },
  {
  title: "Cem anos de solidão",
  author: "Gabriel García Marquez",
  cover: "https://lojasaraiva.vteximg.com.br/arquivos/ids/12101664/1006572684.jpg?v=637142220459200000"
  },
  {
  title: "Precisamos falar sobre o Kevin",
  author: "Lionel Shriver",
  cover: "https://images-na.ssl-images-amazon.com/images/I/51SbHPRYdrL._SX346_BO1,204,203,200_.jpg"
  },
  {
  title: "Mulheres que correm com os lobos",
  author: "Clarissa Pinkola Estésu",
  cover: "https://www.expressaopopular.com.br/loja/wp-content/uploads/2018/11/mulheres-que-correm-como-lobos-novo.jpg"
  }
]


for (i=0; i<booksArray.length; i++) {
  
  const divBook = document.createElement('div')
  const tituloH2 = document.createElement('h2');
  const authorBook = document.createElement('p');
  const coverBook = document.createElement('img');
  tituloH2.innerText = `Titulo: ${booksArray[i].title}`;
  authorBook.innerText = `Autor: ${booksArray[i].author}`;
  coverBook.src = booksArray[i].cover;
  
  body.appendChild(divBook);
  divBook.appendChild(tituloH2);
  divBook.appendChild(authorBook);
  divBook.appendChild(coverBook);
 
}

