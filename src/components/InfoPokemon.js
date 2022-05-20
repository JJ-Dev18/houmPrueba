import React, { memo,useRef,useState,useEffect } from 'react'
import { _handleError } from '../errors/errors';
import { ContainerInfo, ImagenPokemon, Logo, Pokedex } from '../styles/Info'
import { Buscador } from '../styles/Main';

export const InfoPokemon = memo(({data}) => {
  const [infoPokemon, setinfoPokemon] = useState(data)
  
  const tipo = infoPokemon?.types[0].type.name; 
  const inputRef = useRef()
  const buscarPokemon = async (e)=>{
       if(inputRef.current.value != "" && e.key === 'Enter'){
         try {
            const url = `https://pokeapi.co/api/v2/pokemon/${inputRef.current.value}`;
            const response = await fetch(url);
            if (!response.ok) {
              return _handleError(response.status);
            }
            const result = await response.json();
            setinfoPokemon(result)
            inputRef.current.value = ""
          
         } catch (error) {
           console.log(error)
         }
       }else return;
  }
  useEffect(() => {
    setinfoPokemon(data)
  }, [data])
  
  return (
    <ContainerInfo>
      <Buscador
        type="text"
        ref={inputRef}
        placeholder="Buscar Pokémon"
        search={true}
        onKeyDown={buscarPokemon}
      />
      {!infoPokemon ? (
        <>
          <img
            src="https://houm.com/static/brandImage/houmLogo.svg"
            alt="logo gris houm"
          />
          <h1>Pokédex</h1>
          <br />
        </>
      ) : (
        <Pokedex type={tipo}>
          <h1>{infoPokemon.name}</h1>
          <ImagenPokemon
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${infoPokemon.id}.svg`}
            alt={`imagen ${infoPokemon.name}`}
          />
          <div className="abilities">
            {infoPokemon.abilities.map((poke, i) => {
              return (
                <React.Fragment key={i}>
                  <div className="group">
                    <h2>{poke.ability.name}</h2>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
          <Logo
            src="https://houm.com/static/brandImage/grayLogo.svg"
            alt="logo houm"
          />
        </Pokedex>
      )}
    </ContainerInfo>
  );
})
