import React from 'react';
import PropTypes from 'prop-types';

export default class ButtonPrevious extends React.Component {
    constructor(props) {
        super(props);
        this.previousClickAction = this.previousClickAction.bind(this);
    }

    previousClickAction(event) {
        event.preventDefault();
        this.props.onPreviousClick();
    }

    render() {
        return <button onClick={this.previousClickAction}>Previous</button>;
    }
}

ButtonPrevious.propTypes = {
    onPreviousClick: PropTypes.func
};
