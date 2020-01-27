import React from "react";
import PropTypes from 'prop-types';

let Abilities = ({abilitiesData}) => (
   
    <ul className='singlePokemonUL'>
                    {abilitiesData.map((abilityItem, index) => (
                        <div key={index}>
                            <li>{abilityItem.ability.name} - </li> 
                            <p>{abilityItem.ability.is_hidden ? 'Hiddep' : 'Visible'}</p>
                        </div>
                    ))}
                </ul>
)

export default Abilities

Abilities.propTypes = {
    abilitiesData: PropTypes.array
};
