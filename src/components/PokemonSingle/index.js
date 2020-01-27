import React from "react";
import { connect } from 'react-redux';
import { getSinglePokemon } from '../../actions/getSinglePokemon';
import { useLocation } from 'react-router-dom'
import Sprites from './Sprites'
import Abilities from './Abilities'
import Types from './Types'
import Moves from './Moves'
import Spin from './Spin'
import PropTypes from 'prop-types';

let PokemonSingle = ({allSingles, onGetSinglePokemon}) => {
    let location = useLocation();
    let pokemonName = location.pathname.substr(1);
    if (allSingles.findIndex((pokemon) => (pokemon.name === pokemonName)) < 0) {
        onGetSinglePokemon(pokemonName)
    }
    let currentPokemonData = allSingles.find((pokemon) => (pokemon.name === pokemonName))

    if (currentPokemonData !== undefined) {
        return (
            <div className="singlePokemonWrapper">
                <h1>Pockemon {currentPokemonData.name.toUpperCase()}</h1>
                <h2 className="secondPokemonHeader">Sprites</h2>
                <Sprites spritesData={currentPokemonData.sprites}/>
                <h2 className="secondPokemonHeader">Abilities</h2>
                <Abilities abilitiesData={currentPokemonData.abilities}/>
                <h2 className="secondPokemonHeader">Types</h2>
                <Types typesData={currentPokemonData.types} />
                <h2 className="secondPokemonHeader">Moves</h2>
                <p>Moves Total: {currentPokemonData.moves.length}</p>
                <Moves movesData={currentPokemonData.moves}/>            
            </div>
        )
    } else {
        return (
            <Spin />
        )
    }
}

export default connect (
    state => ({
        allSingles: state.single
    }),
    dispatch =>({
        onGetSinglePokemon: (pokemonName) => {
            dispatch(getSinglePokemon(pokemonName));
        }
    })
)(PokemonSingle);

PokemonSingle.propTypes = {
    allSingles: PropTypes.array,
    onGetSinglePokemon: PropTypes.func
};
