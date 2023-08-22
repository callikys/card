import '../css/Button.css';
import React from 'react';

function Button(props) {
  return (
    <button className='button'>
      {props.icon && <props.icon />}
      {props.title}
    </button>
  );
}

export default Button;