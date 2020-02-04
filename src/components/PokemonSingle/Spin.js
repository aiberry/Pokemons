import React from 'react';
import ClockLoader from "react-spinners/ClockLoader";
import '../../styles/Spin.sass';

let Spin = () => (
    <div  className="onLoadingSpin">
        <ClockLoader 
            size={200}
            color={"#27aedb"}
        />
    </div>
);
export default Spin;
