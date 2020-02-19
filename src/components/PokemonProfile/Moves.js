import React from 'react';
import PropTypes from 'prop-types';

export default class Moves extends React.Component {
    constructor(props) {
        super(props);
        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange (event) {
        event.preventDefault();
        this.props.setFilter(event.target.value.toLowerCase());
    }

    render () {
        return (
           <div className="movesGridItem">
                <h2>Moves</h2>
                <p>Moves Total: {this.props.totalMoves}</p>
                <input 
                    type="text" 
                    onChange={this.onInputChange} 
                    value={this.props.filterValue}
                />
                <ul className="singlePokemonDataContent">
                    {this.props.movesData.map((moveItem, index) => (
                        <li key={index}>{moveItem.move.name}</li>
                    ))}
                </ul>
            </div> 
        )
    }
} 

Moves.propTypes = {
    movesData: PropTypes.array
};
