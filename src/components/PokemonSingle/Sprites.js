import React from "react";

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
