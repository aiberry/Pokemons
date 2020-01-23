import React from "react";
import  '../styles/App.sass';
import PokemonItem from './PockemonItem';
import { connect } from 'react-redux';
import { getPokemons } from '../actions/getPokemons';

let App = ({pokemonList, onGetPokemons}) => {
    let onSearchHandler = (event) => {
        if (event.keyCode === 13) {
            if (event.target.value === '') {
                onGetPokemons();
            }
        }
    }

    return (
        <div>
            <h1>Pockemon Search</h1>
            <h2 className="underSearchText">Find pockemon by name</h2>
            <input
                placeholder="Empty query for the whole list"
                className="searchInput"
                onKeyUp={onSearchHandler}
            ></input>
            <ul className='pokemonList'>
                {pokemonList.map((pokemon, index) => <PokemonItem key={index} name={pokemon.name}/>)}
            </ul>
        </div>
    );
}

export default connect (
    state => ({
        pokemonList: state.list,
        singlePokemons: state.single
    }),
    dispatch =>({
        onGetPokemons: () => {
            dispatch(getPokemons());
        }
    })
)(App);