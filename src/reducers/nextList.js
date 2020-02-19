const nextList = (state = '', action) => {
    if (action.type === 'SET_NEXT_LIST') {
        return action.payload.substr(34);
    }
    return state;
};

export default nextList;
