import React from 'react';

export default class NameSearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
        this.props.handleChange(event.target.value)
        
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.handleSubmit()
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}  className="nameSearchForm"> 
            <label>
                Empty query for the whole list:
                <input 
                    type="text" 
                    value={this.props.query}
                    onChange={this.handleChange} 
                    placeholder="Find pokemon by name"
                    className="nameSearchTextInput"
                />
            </label>
            <input 
                type="submit" 
                value="Submit"  
                className="nameSearchButton"
            />
        </form>
      );
    }
  }