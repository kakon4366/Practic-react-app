import React, { useState } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

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
        <div className='my-5'>
            <h1 className='text-secondary'><span>{battery}</span>%</h1>
            <button className='btn btn-warning me-3' onClick={batteryDown}>Battery Down</button>
            <button className='btn btn-success' onClick={batteryUp}>Battery Up</button>
        </div>
    );
};

export default Mobile;