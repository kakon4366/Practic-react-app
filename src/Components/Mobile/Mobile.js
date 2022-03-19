import React, { useState } from 'react';

const Mobile = () => {
    const [battery, setBattery] = useState(100);

    const batteryDown = () => {
        if(battery === 0){
         return;   
        }
        setBattery(battery - 10);
    }
    
    const batteryUp = () => {
        if(battery === 100){
         return;   
        }
        setBattery(battery + 10);
    }

    return (
        <div>
            <h1><span>{battery}</span>%</h1>
            <button onClick={batteryDown}>Battery Down</button>
            <button onClick={batteryUp}>Battery Down</button>
        </div>
    );
};

export default Mobile;