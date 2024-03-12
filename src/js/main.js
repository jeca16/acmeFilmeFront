import { getFilmes, getFilme, postFilme } from "./filmes.js"

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
    img.classList.add('flex-shrink-0','w-50', 'h-56', 'transition', 'ease-in-out', 'delay-75', 'hover:shadow-2xl', 'hover:scale-110', 'rounded-lg')



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
//     "nome": "Elementos",
//     "sinopse": "Elementos é um filme de animação que se passa em uma sociedade extraordinária chamada Cidade Elemento, na qual os quatro elementos da natureza - ar, terra, fogo e ar - vivem em completa harmonia. Na história, somos apresentados à Faísca (fogo, dublada por Leah Lewis), uma mulher espirituosa na faixa dos vinte anos, com um grande senso de humor e apaixonada pela família, mas que tem um temperamento um pouco quente; Gota (água, dublado por Mamoudou Athie) é um jovem empático, observador e extrovertido, que não tem medo de demonstrar suas emoções - na verdade, é até um pouco difícil controlá-las; Turrão (terra, dublado por Mason Wertheimer) é um garoto muito inteligente da terra que mora na Vila do Fogo, e está sempre perto de Faísca; e Névoa (ar, dublada por Wendi McLendon-Covey), que tem uma personalidade fofa e rosa, está sempre atenta às tendências da moda e é fã dos Windbreakers, um time de Air Ball.",
//     "duracao": "01:42:00",
//     "data_lancamento": "2023-06-22",
//     "data_relancamento": null,
//     "foto_capa": "https://br.web.img2.acsta.net/c_310_420/pictures/22/11/17/20/58/0132283.jpg",
//     "valor_unitario": 50
// }

// await postFilme(filme)