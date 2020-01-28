import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import App from '../components/App';
import PokemonSingle from '../components/PokemonSingle';
import PageNotFound from '../components/PageNotFound';

const Root = ({ store }) => (
    <Provider store={store}>
        <Router>
            <Switch>
                <Route path="/" exact component={App} />
                <Route path="/:pokemonName" component={PokemonSingle} />
                <Route path="/404" component={PageNotFound} />
                <Redirect to="/404" />
            </Switch>
        </Router>
    </Provider>
);

export default Root;
