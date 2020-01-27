import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const PokemonLink = ({ filterName }) => (
    <NavLink
    
        exact 
        to={filterName}
        activeStyle={{
            textDecoration: 'none',
            color: 'black'
        }}
    >
        {filterName}
    </NavLink>
)

export default PokemonLink

PokemonLink.propTypes = {
    filterName: PropTypes.string
};
