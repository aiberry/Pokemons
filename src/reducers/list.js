const list = (state = [], action) => {
    if (action.type === 'SET_POKEMONS_TO_LIST') {
        return action.payload;
    }
    return state;
};

export default list;
