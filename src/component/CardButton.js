import '../css/CardButton.css';
import React from 'react';

function CardButton(props) {
  return (
    <button className='cardButton'>
        <span>{props.title}</span>
      <div className="img-container">
        <img src={props.image}></img>
      </div>
    </button>
  );
}

export default CardButton;
