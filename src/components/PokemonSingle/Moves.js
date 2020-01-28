import React from 'react';
import PropTypes from 'prop-types';

let Moves = ({ movesData }) => (
    <ul className="singlePokemonUL">
        {movesData.map((moveItem, index) => (
            <div key={index}>
                <li>{moveItem.move.name}</li>
            </div>
        ))}
    </ul>
);

export default Moves;

Moves.propTypes = {
    movesData: PropTypes.array
};
