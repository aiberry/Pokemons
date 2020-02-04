import { useHistory } from "react-router-dom";

export const getSinglePokemon = (pokemonName) => (dispatch) => {
    const history = useHistory();
    return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then((response) => {
            return response.json();
        })
        .then((pokemonData) =>
            dispatch({ type: 'SET_SINGLE_POKEMON', payload: pokemonData })
        )
        .catch(error => {
            history.push("/pokemon/404");
            console.log(error);
        });
};
