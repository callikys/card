import React from "react";
import '../css/PlusButton.css';

function PlusButton(props) {
    return (
        <button className='plus' onClick={props.onClick}>+</button>
    )
}

export default PlusButton;