export async function getFilmes(){
    const url = 'http://localhost:8080/v2/AcmeFilmes/filmes'
    const response = await fetch (url)
    const data = await response.json()
    return data.filmes
}

export async function getFilme(id){
    const url = `http://localhost:8080/v2/AcmeFilmes/filmes/${id}`
    const response = await fetch (url)
    const data = await response .json()
    return data
}

export async function postFilme(filme){
    const url = `http://localhost:8080/v2/AcmeFilmes/filme`
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(filme)
    }
    const response = await fetch(url, options)
    return response.ok
}

export async function putFilme(filme){
    const url = `http://localhost:8080/v2/AcmeFilmes/filme/'${filmeId}'`
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(filme)
    }
    const response = await fetch(url, options)
    return response.ok
}

export async function deleteFilme(id){
    const url = `http://localhost:8080/v2/AcmeFilmes/filme/'${Id}'`
    const options = {
        method: 'DELETE',
    }
    const response = await fetch(url, options)
    return response.ok
}