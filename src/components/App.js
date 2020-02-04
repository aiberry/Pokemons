import React from 'react';
import '../styles/App.sass';
import PokemonItem from './PockemonItem';
import { connect } from 'react-redux';
import { getPokemons } from '../actions/getPokemons';
import PropTypes from 'prop-types';
import { useHistory } from "react-router-dom";

const App = ({ pokemonList, onGetPokemons }) => {
    const history = useHistory();
    const onSearchHandler = (event) => {
        if (event.keyCode === 13) {
            if (event.target.value === '') {
                onGetPokemons();
            } else {
               history.push("/pokemon/" + event.target.value.toLowerCase());
            }
        }
    };

    return (
        <div>
            <h1>Pockemon Search</h1>
            <p className="underSearchText">Find pockemon by name</p>
            <input
                placeholder="Empty query for the whole list"
                className="searchInput"
                onKeyUp={onSearchHandler}
            ></input>
            <ul className="pokemonList">
                {pokemonList.map((pokemon, index) => (
                    <PokemonItem key={index} name={pokemon.name} />
                ))}
            </ul>
        </div>
    );
};

export default connect(
    (state) => ({
        pokemonList: state.list,
        singlePokemons: state.single
    }),
    (dispatch) => ({
        onGetPokemons: () => {
            dispatch(getPokemons());
        }
    })
)(App);

App.propTypes = {
    pokemonList: PropTypes.array,
    onGetPokemons: PropTypes.func
};
