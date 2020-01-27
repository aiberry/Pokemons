import React from "react";
import PropTypes from 'prop-types';

let Sprites = ({spritesData}) => (
    <div className='spriteWrapper'>
         
        <div className='sprite'>
            <p>Default</p>
            <img src={spritesData.front_default}/>
        </div>
        <div  className='sprite'>
            <p>Shiny</p>
            <img src={spritesData.front_shiny}/>
        </div> 
    </div>
)

export default Sprites

Sprites.propTypes = {
    spritesData: PropTypes.object
};
