import React, { memo, useState } from "react";
import { Card } from "../styles/Card";
import PropTypes from "prop-types";

export const CardPokemon = memo((props) => {
  const { name,sprites,id,types,infoPokemon } = props
  const tipo = types[0].type.name; 
  
  return (
    <Card type={tipo} onClick={()=>{infoPokemon(props);window.scrollTo(0,0)}}>
      <h2>#{id}</h2>
      <img src={sprites.front_default} alt={`sprite front ${name}`} />
      <h2>{name}</h2>
    </Card>
  );
});

CardPokemon.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  infoPokemon: PropTypes.func.isRequired,
  types : PropTypes.array.isRequired,
  sprites : PropTypes.object.isRequired

};