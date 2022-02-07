import React, {useState} from 'react';

function Box(props) {
    let [increaseOne, increaseOneChange] = useState(0);

    return (
        <div className="box">
            <br/>
            {props.name} {increaseOne} <h3/>
            <button onClick={ () => { increaseOneChange(increaseOne + 1) } }>Add {props.emoji}</button>
        </div>
    )
}

export default Box;