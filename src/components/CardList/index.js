import React from "react";
import Card from '../Card/index';

function CardList(props) {
  return (
    <div className="row mb-3">    
      {props.chars.map((character, index) => {
        return (
          <Card
            key={character.id}
            name={character.name}
            image={character.image}
            style={props.imageStyle}
            handleClick={props.handleClick}            
          />
        );
      })}
    </div>
  );
}

export default CardList;
