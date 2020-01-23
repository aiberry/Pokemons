import React from "react";
import { connect } from 'react-redux';
import { getSinglePokemon } from '../actions/getSinglePokemon';
import { useLocation } from 'react-router-dom'

const dataListClass = 'singlePokemonUL';

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
                <div className='spriteWrapper'>
                    <div className='sprite'>
                        <p>Default</p>
                        <img src={currentPokemonData.sprites.front_default}/>
                    </div>
                    <div  className='sprite'>
                        <p>Shiny</p>
                        <img src={currentPokemonData.sprites.front_shiny}/>
                    </div> 
                </div>
               
                <h2 className="secondPokemonHeader">Abilities</h2>
                <ul className={dataListClass}>
                    {currentPokemonData.abilities.map((abilityItem, index) => (
                        <div key={index}>
                            <li>{abilityItem.ability.name} - </li> 
                            <p>{abilityItem.ability.is_hidden ? 'Hiddep' : 'Visible'}</p>
                        </div>
                    ))}
                </ul>
                <h2 className="secondPokemonHeader">Types</h2>
                <ul className={dataListClass}>
                    {currentPokemonData.types.map((typeItem, index) => (
                        <div key={index}>
                            <li>{typeItem.type.name}</li> 
                            <p> - Slot: {typeItem.slot}</p>
                        </div>
                    ))}
                </ul>
                <h2 className="secondPokemonHeader">Moves</h2>
                    <p>Moves Total: {currentPokemonData.moves.length}</p>
                <ul className={dataListClass}>
                    {currentPokemonData.moves.map((moveItem, index) => (
                        <div key={index}>
                            <li>{moveItem.move.name}</li> 
                        </div>
                    ))}
                </ul>
                
                
                               
            </div>
            )
    } else {
        return (
            <div>
                <h6>Data loading / / /(spinn TBD)</h6>
            </div>
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
