import { _handleError, _throwSpecificError } from "../errors/errors";

export const getPokemons = async (limit = 25, offset = 0) => {
  try {
    let url = `https://pokeapi.co/api/v2/pokemon/12312312`;
    const response = await fetch(url);
      if (!response.ok) {
        return _handleError(response.status);
      }
    const data = await response.json();
    return data;
  } catch (err) {
   

  }
};

export const getPokemonData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {
   
  }
};
