import React from 'react';
import './style.css';

function Card(props) {

    return (
        <div className="col-3 mb-3">        
          <img alt={props.name} src={props.image} onClick={props.handleClick} style={props.style} />          
        </div>
    )
}

export default Card;