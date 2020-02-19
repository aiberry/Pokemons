import React from 'react';
import PropTypes from 'prop-types';

export default class NameSearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onHandleChange(event) {
        this.props.handleChange(event.target.value);
    }

    onHandleSubmit(event) {
        event.preventDefault();
        this.props.handleSubmit();
    }

    render() {
        return (
            <form onSubmit={this.onHandleSubmit} className="nameSearchForm">
                <label>
                    Empty query for the whole list:
                    <input
                        type="text"
                        value={this.props.query}
                        onChange={this.onHandleChange}
                        placeholder="Find pokemon by name"
                        className="nameSearchTextInput"
                    />
                </label>
                <input type="submit" value="Submit" className="nameSearchButton" />
            </form>
        );
    }
}

NameSearchForm.propTypes = {
    handleChange: PropTypes.func,
    handleSubmit: PropTypes.func,
    query: PropTypes.string
};
