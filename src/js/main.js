// import { getFilmes, getFilme } from "./filmes.js"

// const filmes = [
//     {
//         nome: 'jessica pereira'
//     },
//     {
//         nome: 'frozen'
//     }


// ]

// function criarCard(filme) {
//     const card = document.createElement('div')
//     const title = document.createElement('h2')
//     const sinopse = document.createElement('button')

//     title.textContent = filme.nome
//     sinopse.textContent = filme.sinopse
//     card.append(title, sinopse)
//     return card
// }

// async function preencherContainer() {
//     const container = document.querySelector('body')
//     const filmes = await getFilmes()

//     filmes.forEach(filme => {
//         const card = criarCard(filme)
//         container.appendChild(card)
//     })


// }

// preencherContainer()