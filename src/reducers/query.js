const query = (state = "BULBASAUR", action) => {
    if (action.type === 'SET_QUERY') {
        return action.payload;
    }
    return state;
};

export default  query;
