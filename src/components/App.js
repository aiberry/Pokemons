import React from 'react';
import '../styles/App.sass';
import PokemonItem from './PokemonItem';
import NameSearchForm from './NameSearchForm';
import { connect } from 'react-redux';
import { getPokemons } from '../actions/getPokemons';
import { setQuery } from '../actions/setQuery';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

const App = ({ pokemonList, onGetPokemons, onSetCurrentQuery, searchQuery }) => {
    const history = useHistory();
    const onSearchHandler = () => {
        if (searchQuery === '') {
            onGetPokemons();
        } else {
            history.push('/pokemon/' + searchQuery.toLowerCase());
        }
    };

    const onSearchChange = (query) => {
        onSetCurrentQuery(query);
    }

    return (
        <div>
            <h1>Pockemon Search</h1>
            <NameSearchForm 
                handleSubmit={onSearchHandler} 
                handleChange={onSearchChange}
                query={searchQuery}
            />
            <ul className="pokemonsToChose">
                {pokemonList.map((pokemon, index) => (
                    <PokemonItem key={index} name={pokemon.name} />
                ))}
            </ul>
        </div>
    );
};

export default connect(
    (state) => ({
        pokemonList: state.list.filter(pokemon => state.query === "" ? true : pokemon.name.toLowerCase().includes(state.query.toLowerCase())),
        singlePokemons: state.single,
        searchQuery: state.query
    }),

    (dispatch) => ({
        onGetPokemons: () => {
            dispatch(getPokemons());
        },
        onSetCurrentQuery: (query) => {
            dispatch(setQuery(query));
        }
    })
)(App);

App.propTypes = {
    pokemonList: PropTypes.array,
    onGetPokemons: PropTypes.func
};
