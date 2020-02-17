export const setQuery = (query) => (dispatch) => {
    dispatch({ type: 'SET_QUERY', payload: query })
};
