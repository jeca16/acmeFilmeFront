'use strict'
import {getGeneros, postGenero, putGenero, deleteGenero  } from "./generos.js";


function criarLinha(genero) {

    const linha = document.createElement('td')
    const tr = document.createElement('tr')
    // img.src = filme.foto_capa
    // img.classList.add('flex-shrink-0','w-50', 'h-56', 'transition', 'ease-in-out', 'delay-75', 'hover:shadow-2xl', 'hover:scale-110', 'rounded-lg', 'cursor-pointer')
    linha.textContent = genero.nome_genero
    linha.classList.add('border', 'border-slate-400', 'pl-14')
    tr.append(linha)
    return tr
}

async function preencherLinha (){
    const containerGenero = document.getElementById('generos')
    const generos = await getGeneros()
    generos.forEach(genero => {
        const tr = criarLinha(genero)
        containerGenero.appendChild(tr)
        
    });
}
preencherLinha()

