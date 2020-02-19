import React from 'react';
import PropTypes from 'prop-types';

export default class ButtonNext extends React.Component {
    constructor(props) {
        super(props);
        this.nextClickAction = this.nextClickAction.bind(this);
    }

    nextClickAction(event) {
        event.preventDefault();
        this.props.onNextClick();
    }

    render() {
        return <button onClick={this.nextClickAction}>Next</button>;
    }
}

ButtonNext.propTypes = {
    onNextClick: PropTypes.func
};
