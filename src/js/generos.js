export async function deleteGenero(id){
    const url = `http://localhost:8080/v2/AcmeFilmes/genero/delete/${id}`
    const options = {
        method: 'DELETE',
    }
    const response = await fetch(url, options)
    return response.ok
}


export async function putGenero(generoId, genero){
    const url = `http://localhost:8080/v2/AcmeFilmes/genero/'${generoId}'`
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(genero)
    }
    const response = await fetch(url, options)
    return response.ok
}


export async function postGenero(genero){
    const url = `http://localhost:8080/v2/AcmeFilmes/genero`
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(genero)
    }
    const response = await fetch(url, options)
    return response.ok
}

export async function getGeneros(){
    const url = 'http://localhost:8080/v2/AcmeFilmes/generos'
    const response = await fetch (url)
    const data = await response.json()
    return data.genero
}
