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


// // percorrendo o array de livros usando o for
// for (let contador = 0; contador < arrayLivros.length; contador++) {
//   // console.log no titulo e autor dos livros
//   //console.log('Titulo', arrayLivros[contador].titulo, "Autora", arrayLivros[contador].autor)

//   // criando a div que vai receber as info do livro
//   const divLivro = document.createElement('div')

//   // criar um h2 para receber o titulo do livro
//   const tituloH2 = document.createElement('h2')
//   tituloH2.innerText = `Título: ${arrayLivros[contador].titulo}`

//   // criar um paragrafo que vai receber a autora do livro
//   const autoraParagrafo = document.createElement('p')
//   autoraParagrafo.innerText = `Autora: ${arrayLivros[contador].autor}`

//   // criar img para receber a capa do livro
//   const capaImg = document.createElement('img')
//   capaImg.src = arrayLivros[contador].capa

//   //adicionando o tituloH2 e o autoraParágrfo dentro da divLivro
//   divLivro.appendChild(capaImg)
//   divLivro.appendChild(tituloH2)
//   divLivro.appendChild(autoraParagrafo)

//   // adicionando divLivro no body
//   body.appendChild(divLivro)

//   // outra forma de referenciar o body aqui
//   //document.body.appendChild(divLivro)
  
//   console.log(divLivro)

// }