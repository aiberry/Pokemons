import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const PokemonLink = ({ filterName }) => (
    <NavLink
        exact
        to={'pokemon/' + filterName}
    >
        {filterName}
    </NavLink>
);

export default PokemonLink;

PokemonLink.propTypes = {
    filterName: PropTypes.string
};
