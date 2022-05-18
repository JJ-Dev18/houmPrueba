import React, { useState, useEffect } from "react";
import {  _handleError, _throwSpecificError } from "./errors/getPokemons";
import "./App.css";

const Main = () => {
  const [pokemons, setpokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [errorState, setErrorState] = useState({ hasError: false });

  const handleError = (err) => {
    setErrorState({ hasError: true, message: err.message });
  };


  return (
    <div className="app">

    
      {errorState.hasError && <div>{errorState.message}</div>}
     
    </div>
  );
};

export default Main;
