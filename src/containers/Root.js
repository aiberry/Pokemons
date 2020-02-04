import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from '../components/App';
import PokemonSingle from '../components/PokemonSingle';
import PageNotFound from '../components/PageNotFound';

const Root = ({ store }) => (
    <Provider store={store}>
        <Router>
            <Switch>
                <Route path="/" exact component={App} />
                <Route path="/pokemon/404" component={PageNotFound} />
                <Route path="/pokemon/:pokemonName" component={PokemonSingle} />
            </Switch>
        </Router>
    </Provider>
);

Root.propTypes = {
    store: PropTypes.object
};

export default Root;
