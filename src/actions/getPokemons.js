export const getPokemons = () => dispatch => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = () => resolve (JSON.parse(xhr.responseText).results)
        xhr.onerror = () => reject(xhr.statusText)
        xhr.open("GET", 'https://pokeapi.co/api/v2/pokemon/')
        xhr.send()
    })
    .then(pokemons => dispatch({type: 'SET_POKEMONS_TO_LIST', payload: pokemons}), console.log)
}; 
