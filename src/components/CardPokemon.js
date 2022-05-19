import React, { useState } from "react";
import { Card } from "../styles/Card";

export const CardPokemon = (props) => {
  const { name,sprites,id,types,infoPokemon ,weight} = props
  const tipo = types[0].type.name; 

  return (
    <Card type={tipo} onClick={()=>{infoPokemon(props);window.scrollTo(0,0)}}>
      <h2>#{id}</h2>
      <img src={sprites.front_default} alt={`sprite front ${name}`} />
      <h2>{name}</h2>
    </Card>
  );
};
