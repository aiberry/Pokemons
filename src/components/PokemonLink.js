import React from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';

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
