import React from 'react';
import PropTypes from 'prop-types';

let Moves = ({ movesData }) => (
    <div className="movesGridItem">
        <h2>Moves</h2>
        <p>Moves Total: {movesData.length}</p>
        <ul className="singlePokemonListContent">
            {movesData.map((moveItem, index) => (
                <li key={index}>{moveItem.move.name}</li>
            ))}
        </ul>
    </div>
);

export default Moves;

Moves.propTypes = {
    movesData: PropTypes.array
};
