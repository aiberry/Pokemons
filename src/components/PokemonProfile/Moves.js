import React from 'react';
import PropTypes from 'prop-types';

const Moves = ({ filterValue, setFilter, totalMoves, movesData }) =>  {

    const onInputChange = (event) => {
        event.preventDefault();
        setFilter(event.target.value.toLowerCase());
    }

    return (
        <div className="movesGridItem">
            <h2>Moves</h2>
            <p>Moves Total: {totalMoves}</p>
            <input
                type="text"
                onChange={onInputChange}
                value={filterValue}
            />
            <ul className="singlePokemonDataContent">
                {movesData.map((moveItem, index) => (
                    <li key={index}>{moveItem.move.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default Moves;

Moves.propTypes = {
    movesData: PropTypes.array,
    setFilter: PropTypes.func,
    totalMoves: PropTypes.number,
    filterValue: PropTypes.string
};
