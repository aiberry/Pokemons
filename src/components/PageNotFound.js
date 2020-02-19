import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => (
    <div>
        <h1>404...Page not found</h1>
        <Link to="/">Back to the main page</Link>
        <p> Unfortunately, there is no such pokemons</p>
        <h4> :) ;) :)</h4>
    </div>
);

export default PageNotFound;
