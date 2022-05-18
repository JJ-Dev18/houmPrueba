import React, { useState, useEffect } from "react";
import { _handleError, _throwSpecificError } from "./errors/getPokemons";
import "./App.css";

const Main = () => {
  const [pokemons, setpokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const [pokeDex, setPokeDex] = useState();
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [errorState, setErrorState] = useState({ hasError: false });

  const handleError = (err) => {
    setErrorState({ hasError: true, message: err.message });
  };
  const getPokemons = async () => {
    try {
      setLoading(true);
      const response = await fetch(url);
      if (!response.ok) {
        return _handleError(response.status);
      }
      const res = await response.json();
      setNextUrl(res.next);
      setPrevUrl(res.previous);
      getObjectPokemons(res.results);
      setLoading(false);
    } catch (error) {
      handleError(error);
    }
  };

  const getObjectPokemons = async (res) => {
    try {
      res.map(async (pokemon) => {
        const response = await fetch(pokemon.url);
        if (!response.ok) {
          return _handleError(response.status);
        }
        const result = await response.json();
        setpokemons((state) => {
          state = [...state, result];
          state.sort((a, b) => (a.id > b.id ? 1 : -1));
          return state;
        });
      });
    } catch (error) {
      handleError(error);
    }
  };

  useEffect(() => {
    getPokemons();
  }, [url]);

  return (
    <div className="app">
      {errorState.hasError && <div>{errorState.message}</div>}
    </div>
  );
};

export default Main;
