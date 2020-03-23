import React from 'react';

export default class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="footer">
                <p>
                    This site has been devloped to demonstrate possibilities of {` `}<a href="https://pokeapi.co">Pokemon API</a>{`. `}
                
                    If there are any questsions or suggestsions feel free to contact:{` `}
                    <a href="mailto:aleexpost@gmail.com">
                        aleexpost@gmail.com
                    </ a>
                </p> 
            </div>
        );
    }
}

