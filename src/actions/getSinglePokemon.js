export const getSinglePokemon = (pokemonName) => (dispatch) => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then((response) => {
            return response.json();
        })
        .then((pokemonData) =>
            dispatch({ type: 'SET_SINGLE_POKEMON', payload: pokemonData })
        )
        .catch(console.log);
};
