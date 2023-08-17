import React from "react";
import '../css/PlusButton.css';

function MinusButton(props) {
    return (
        <button className='plus' onClick={props.onClick}>-</button>
    )
}

export default MinusButton;