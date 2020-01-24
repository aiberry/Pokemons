import React from "react";

let Moves = ({movesData}) => (
    <ul className='singlePokemonUL'>
        {movesData.map((moveItem, index) => (
            <div key={index}>
                <li>{moveItem.move.name}</li> 
            </div>
        ))}
    </ul>
)

export default Moves
