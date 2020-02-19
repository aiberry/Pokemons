import React from 'react';
import '../styles/App.sass';
import PokemonItem from './PokemonItem';
import NameSearchForm from './NameSearchForm';
import ButtonNext from './ButtonNext';
import ButtonPrevious from './ButtonPrevious';
import { connect } from 'react-redux';
import { getPokemons } from '../actions/getPokemons';
import { setQuery } from '../actions/setQuery';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

const App = ({
    pokemonList,
    onGetPokemons,
    onSetCurrentQuery,
    searchQuery,
    nextQuery,
    previousQuery
}) => {
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
    };

    const openNext = () => {
        onGetPokemons(nextQuery);
    };

    const openPrevious = () => {
        onGetPokemons(previousQuery);
    };

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
            {previousQuery ? <ButtonPrevious onPreviousClick={openPrevious} /> : ''}
            {nextQuery ? <ButtonNext onNextClick={openNext} /> : ''}
        </div>
    );
};

export default connect(
    (state) => ({
        pokemonList: state.list.filter((pokemon) =>
            state.query === ''
                ? true
                : pokemon.name.toLowerCase().includes(state.query.toLowerCase())
        ),
        singlePokemons: state.single,
        searchQuery: state.query,
        nextQuery: state.nextList,
        previousQuery: state.previousList
    }),

    (dispatch) => ({
        onGetPokemons: (listNumber) => {
            dispatch(getPokemons(listNumber));
        },
        onSetCurrentQuery: (query) => {
            dispatch(setQuery(query));
        }
    })
)(App);

App.propTypes = {
    pokemonList: PropTypes.array,
    onGetPokemons: PropTypes.func,
    onSetCurrentQuery: PropTypes.func,
    searchQuery: PropTypes.string,
    nextQuery: PropTypes.string,
    previousQuery: PropTypes.string
};
