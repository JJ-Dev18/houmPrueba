import React from 'react'
import { ContainerInfo, ImagenPokemon, Logo, Pokedex } from '../styles/Info'

export const InfoPokemon = ({data}) => {
  const tipo = data?.types[0].type.name; 
  
  return (
    <ContainerInfo>
      {!data ? (
        <>
          <img src="https://houm.com/static/brandImage/houmLogo.svg" />
          <h1>Pokedex</h1>
          <br />
        </>
      ) : (
        <Pokedex type={tipo}>
          <h1>{data.name}</h1>
          <ImagenPokemon
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}
            alt={`imagen ${data.name}`}
          />
          <div className="abilities">
            {data.abilities.map((poke) => {
              return (
                <>
                  <div className="group">
                    <h2>{poke.ability.name}</h2>
                  </div>
                </>
              );
            })}
          </div>
          <Logo src="https://houm.com/static/brandImage/grayLogo.svg" alt="logo houm" />
        </Pokedex>
      )}
    </ContainerInfo>
  );
}
