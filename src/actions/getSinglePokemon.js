export const getSinglePokemon = (pokemonName) => dispatch => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = () => resolve (JSON.parse(xhr.responseText))
        xhr.onerror = () => reject(xhr.statusText)
        xhr.open('GET', `https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        xhr.send()
    })
    .then(pokemonData => dispatch({type: 'SET_SINGLE_POKEMON', payload: pokemonData}), console.log)
}; 
