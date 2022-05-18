import React from 'react'
import { ContainerInfo, ImagenPokemon, Pokedex } from '../styles/Info'

export const InfoPokemon = ({data}) => {
  
  return (
    <ContainerInfo>
      {!data ? (
        ""
      ) : (
        <Pokedex>
          <p>{data.name}</p>
          <ImagenPokemon
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}
        alt=""
      />
        </Pokedex>
      )}
    </ContainerInfo>
  );
}
