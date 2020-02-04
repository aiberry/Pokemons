import React from 'react';
import PropTypes from 'prop-types';

const Abilities = ({ abilitiesData }) => (
    <div className="abilitiesGridItem">
        <h2>Abilities</h2>
        <ul className="singlePokemonListContent">
        {abilitiesData.map((abilityItem, index) => (
            <div key={index}>
                <li>{abilityItem.ability.name} - </li>
                <p>{abilityItem.ability.is_hidden ? 'Hiddep' : 'Visible'}</p>
            </div>
        ))}
        </ul>
    </div>
);

export default Abilities;

Abilities.propTypes = {
    abilitiesData: PropTypes.array
};
