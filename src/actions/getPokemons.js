export const getPokemons = (list = '') => (dispatch) => {
    return fetch('https://pokeapi.co/api/v2/pokemon/' + list)
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
            dispatch({ type: 'SET_POKEMONS_TO_LIST', payload: myJson.results });
            myJson.next
                ? dispatch({ type: 'SET_NEXT_LIST', payload: myJson.next })
                : '';
            myJson.previous
                ? dispatch({ type: 'SET_PREVIOUS_LIST', payload: myJson.previous })
                : '';
            return myJson;
        })
        .catch(console.log); // eslint-disable-line
};
