export const getPokemons = () => dispatch => {
    return fetch('https://pokeapi.co/api/v2/pokemon/')
    .then((response) => {
        return response.json();
    })
    .then((myJson) => 
        dispatch({type: 'SET_POKEMONS_TO_LIST', payload: myJson.results})
    ).catch(console.log);
}; 
