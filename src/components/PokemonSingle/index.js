import React from 'react';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getSinglePokemon } from '../../actions/getSinglePokemon';
import '../../styles/PokemonSingle.sass';

import Sprites from './Sprites';
import Abilities from './Abilities';
import Types from './Types';
import Moves from './Moves';
import Spin from './Spin';
import PropTypes from 'prop-types';

const PokemonSingle = ({ allSingles, onGetSinglePokemon }) => {
    const location = useLocation();
    const pokemonName = location.pathname.substr(9);
    if (allSingles.findIndex((pokemon) => pokemon.name === pokemonName) < 0) {
        onGetSinglePokemon(pokemonName);
    }
    const currentPokemonData = allSingles.find(
        (pokemon) => pokemon.name === pokemonName
    );

    if (currentPokemonData !== undefined) {
        return (
            <div className="singlePokemonWrapper">
                <h1>{currentPokemonData.name.toUpperCase()}</h1>
                <h2>Sprites</h2>
                <Sprites spritesData={currentPokemonData.sprites} />
                <div className="gridWrapper">
                    <Abilities abilitiesData={currentPokemonData.abilities} />
                    <Types typesData={currentPokemonData.types} />
                    <Moves movesData={currentPokemonData.moves} />
                </div>
            </div>
        );
    } else {
        return <Spin />;
    }
};

export default connect(
    (state) => ({
        allSingles: state.single
    }),
    (dispatch) => ({
        onGetSinglePokemon: (pokemonName) => {
            dispatch(getSinglePokemon(pokemonName));
        }
    })
)(PokemonSingle);

PokemonSingle.propTypes = {
    allSingles: PropTypes.array,
    onGetSinglePokemon: PropTypes.func
};
