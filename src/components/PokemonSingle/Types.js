import React from "react";

let Types = ({typesData}) => (
   
    <ul className='singlePokemonUL'>
        {typesData.map((typeItem, index) => (
            <div key={index}>
                <li>{typeItem.type.name}</li> 
                <p> - Slot: {typeItem.slot}</p>
            </div>
        ))}
    </ul>
)

export default Types
