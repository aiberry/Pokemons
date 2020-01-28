let single = (state = [], action) => {
    if (action.type === 'SET_SINGLE_POKEMON') {
        return [...state, action.payload];
    }
    return state;
};
export default single;
