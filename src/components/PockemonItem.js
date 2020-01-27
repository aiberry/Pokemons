import React from "react"
import FilterLink from './PokemonLink'
import PropTypes from 'prop-types';

export default function Pokemon_item ({name, clickAction}) {
    return (
        <li onClick={clickAction}>
            <FilterLink filterName={name}/>
        </li>
    )
}

Pokemon_item.propTypes = {
    name: PropTypes.string,
    clickAction: PropTypes.func
};
