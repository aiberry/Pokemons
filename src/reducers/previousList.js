const previousList = (state = '', action) => {
    if (action.type === 'SET_PREVIOUS_LIST') {
        return action.payload.substr(34);
    }
    return state;
};

export default previousList;
