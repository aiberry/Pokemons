import React from 'react';
import PropTypes from 'prop-types';

let Moves = ({ movesData }) => (
    <ul className="singlePokemonListContent">
        {movesData.map((moveItem, index) => (
            <li key={index}>{moveItem.move.name}</li>
        ))}
    </ul>
);

export default Moves;

Moves.propTypes = {
    movesData: PropTypes.array
};
