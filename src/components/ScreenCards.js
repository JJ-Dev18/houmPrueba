import React,{useState,useEffect} from 'react'
import { Buscador, ContainerPokemons } from '../styles/Main';
import { CardPokemon } from './CardPokemon';
import Skeleton from './Skeleton';
import PropTypes from "prop-types";

export const ScreenCards = ({data,loading,cantPokemones,infoPokemon}) => {
 
  const [pokemons, setpokemons] = useState(data)

   const handleFilter = (e) => {
     let name = e.target.value;
      if (name !== " ") {
       name = name.toLowerCase();
       setpokemons(
         data.filter((poke) => poke.name.toLowerCase().includes(name))
       );
     } else {
       setpokemons(data);
     }
   };

   useEffect(() => {
     setpokemons(data);
   }, [data]);

  return (
    <>
      <h1>Pokémones</h1>

      <Buscador onChange={handleFilter} placeholder="Filtrar Pokémon" />

      <ContainerPokemons>
        {loading ? (
          <>
            <Skeleton numPokemones={cantPokemones} />
          </>
        ) : (
          pokemons.map((pokemon) => (
            <CardPokemon
              key={pokemon.id}
              {...pokemon}
              infoPokemon={infoPokemon}
            />
          ))
        )}
      </ContainerPokemons>
    </>
  );
}

ScreenCards.propTypes = {
  data: PropTypes.array.isRequired,
  loading : PropTypes.bool.isRequired,
  cantPokemones : PropTypes.number.isRequired,
  infoPokemon : PropTypes.func.isRequired,
};