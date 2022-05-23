import { _handleError, _throwSpecificError } from "../errors/errors";

//Funcion para traer la lista de los pokemones 
export const getPokemons = async (limit = 25, offset = 0) => {
  try {
    let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
    const response = await fetch(url);
    if (!response.ok) {
      return _handleError(response.status);
    }
    const data = await response.json();
    return data;
  } catch (err) {
    _throwSpecificError(err);
  }
};

//Funcion para traer la informacion de cada pokemon 
export const getPokemonData = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      return _handleError(response.status);
    }
    const data = await response.json();
    return data;
  } catch (err) {
    _throwSpecificError(err);
  }
};
