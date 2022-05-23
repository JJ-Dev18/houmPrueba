import React,{useState,useEffect} from 'react'
import { Buscador, ContainerPokemons, ContentFiltro, SelectTarget } from '../styles/Main';
import { CardPokemon } from './CardPokemon';
import Skeleton from './Skeleton';
import PropTypes from "prop-types";

/**
  Este componente maneja la vista de las cards  
 */

export const ScreenCards = ({data,loading,cantPokemones,infoPokemon}) => {
  
  const [pokemons, setpokemons] = useState(data)
  const [target , settarget] = useState('name')

 //Funcion para filtrar las cards de pokemones que se estan mostrando por pagina 
   const handleFilter = (e) => {
     let name = e.target.value;
      if (name !== " ") {
       name = name.toLowerCase();
      target == "name"
        ? setpokemons(
            data.filter((poke) => poke.name.toLowerCase().includes(name))
          )
        : setpokemons(
            data.filter((poke) =>
              poke.types[0].type.name.toLowerCase().includes(name)
            )
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
      <ContentFiltro>
      <Buscador
        onChange={handleFilter}
        placeholder="Filter list by page"
       
      />
      <SelectTarget id="target" onChange={(e)=>settarget(e.target.value)}>
        <option value="name">Name</option>
        <option value="type">Type</option>
      </SelectTarget>

      </ContentFiltro>
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