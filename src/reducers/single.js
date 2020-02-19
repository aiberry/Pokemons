const initState = [{
    "name" : "bulbasaur",
    "sprites": {
        "front_default": "123"
    },
    "abilities" : [],
    "types": [],
    "moves": [
        {
            "move": {
                "name": "pokeapi"
            }
        },
        {
            "move": {
                "name": "index"
            }
        },{
            "move": {
                "name": "setingdata"
            }
        },{
            "move": {
                "name": "loadinglife"
            }
        },{
            "move": {
                "name": "pikapika"
            }
        },{
            "move": {
                "name": "pikabuika"
            }
        },{
            "move": {
                "name": "pikamovie"
            }
        },
    ],
}]

const single = (state = initState, action) => {
    if (action.type === 'SET_SINGLE_POKEMON') {
        return [...state, action.payload];
    }
    return state;
};
export default single;
