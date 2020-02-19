export const setMovesFilter = (filter) => (dispatch) => {
    dispatch({ type: 'SET_MOVES_FILTER', payload: filter })
};
