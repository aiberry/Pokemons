import React from 'react';
import PropTypes from 'prop-types';

let Types = ({ typesData }) => (
    <div className="typesGridItem">
        <h2>Types</h2>
        <ul className="singlePokemonListContent">
            {typesData.map((typeItem, index) => (
                <div key={index}>
                    <li>{typeItem.type.name}</li>
                    <p> - Slot: {typeItem.slot}</p>
                </div>
            ))}
        </ul> 
    </div>
);

export default Types;

Types.propTypes = {
    typesData: PropTypes.array
};
