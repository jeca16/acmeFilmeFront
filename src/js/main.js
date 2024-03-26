import { getFilmes, getFilme, postFilme, deleteFilme } from "./filmes.js"

const filmes = [
    {
        nome: 'jessica pereira'
    },
    {
        nome: 'frozen'
    }


]

function criarCard(filme) {

    const card = document.createElement('div')
    const img = document.createElement('img')
    img.src = filme.foto_capa
    img.classList.add('flex-shrink-0','w-50', 'h-56', 'transition', 'ease-in-out', 'delay-75', 'hover:shadow-2xl', 'hover:scale-110', 'rounded-lg', 'cursor-pointer')



    // const title = document.createElement('h2')
    // const sinopse = document.createElement('button')

    // title.textContent = filme.nome
    // sinopse.textContent = filme.sinopse
    card.append(img)
    return card
}

async function preencherContainer() {
    const containerFilme = document.getElementById('Filmes')
    const filmes = await getFilmes()

    filmes.forEach(filme => {
        const card = criarCard(filme)
        containerFilme.appendChild(card)
    })


}

preencherContainer()


//teste 

// const filme ={
//     "nome": "frozen",
//     "sinopse": "Acompanhada por um vendedor de gelo, a jovem e destemida princesa Anna parte em uma jornada por perigosas montanhas de gelo na esperança de encontrar sua irmã, a rainha Elsa, e acabar com a terrível maldição de inverno eterno, que está provocando o congelamento do reino",
//     "duracao": "01:02:00",
//     "data_lancamento": "2014-01-03",
//     "data_relancamento": null,
//     "foto_capa": "https://upload.wikimedia.org/wikipedia/pt/e/e5/Frozen_2013.png",
//     "valor_unitario": 15
// }

// await postFilme(filme)

