const movesFilter = (state = '', action) => {
    if (action.type === 'SET_MOVES_FILTER') {
        return action.payload;
    }
    return state;
};

export default movesFilter;
