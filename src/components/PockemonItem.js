import React from "react"
import FilterLink from './PokemonLink'

export default function Pokemon_item ({name, clickAction}) {
    return (
        <li onClick={clickAction}>
            <FilterLink filterName={name}/>
        </li>
    )
}