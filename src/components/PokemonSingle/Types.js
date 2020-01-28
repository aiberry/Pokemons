import React from 'react';
import PropTypes from 'prop-types';

let Types = ({ typesData }) => (
    <ul className="singlePokemonUL">
        {typesData.map((typeItem, index) => (
            <div key={index}>
                <li>{typeItem.type.name}</li>
                <p> - Slot: {typeItem.slot}</p>
            </div>
        ))}
    </ul>
);

export default Types;

Types.propTypes = {
    typesData: PropTypes.array
};
