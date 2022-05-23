import React, { memo, useRef, useState, useEffect } from "react";
import { _handleError } from "../errors/errors";
import {
  ContainerCharact,
  ContainerInfo,
  ContainerStats,
  ContainerSkeleton,
  ImagenPokemon,
  LogoPokemon,
  Pokedex,
  Stat,
} from "../styles/Info";
import { Buscador } from "../styles/Main";
import LogoPokemons from "./../images/logopokemon.webp";
import { capitalizarPrimeraLetra } from "../utils/strings";
import { useNotification } from "../context/NotificacionProvider";
import PropTypes from "prop-types";
import { SkeletonInfo } from "./Skeleton";

/**
  Este componente sirve para mostrar la informacion generla del pokemon seleccionado o buscado en el "pokedex"
 */
export const InfoPokemon = memo(({ data }) => {
  const [infoPokemon, setinfoPokemon] = useState(data);
  const [error, seterror] = useState(false);
  const tipo = infoPokemon?.types[0].type.name;
  const inputRef = useRef();
  const dispatchNotificacion = useNotification();
  const imagen = infoPokemon?.sprites.other.dream_world.front_default;

  const handleNewNotification = (error) => {
    dispatchNotificacion({
      type: "ERROR",
      message: `${error}`,
      title: "Error Request",
    });
    setTimeout(() => {
      seterror(false);
    }, 400);
  };

  const buscarPokemon = async (e) => {
    if (inputRef.current.value != "" && e.key === "Enter") {
      try {
        seterror(true);
        let name = inputRef.current.value.toLowerCase();
        const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
        const response = await fetch(url);
        if (!response.ok) {
          return _handleError(response.status);
        }
        const result = await response.json();
        setinfoPokemon(result);
        seterror(false);
        inputRef.current.value = "";
      } catch (error) {
        //En caso de tener un error mostramos la notificacion usando el dispatch de la accion
        handleNewNotification(error);
      }
    } else return;
  };

  useEffect(() => {
    setinfoPokemon(data);
  }, [data]);

  return (
    <ContainerInfo>
      <Buscador
        disabled={error}
        type="text"
        ref={inputRef}
        placeholder="Search Pokémon"
        search={true}
        onKeyDown={buscarPokemon}
      />
      {!infoPokemon && !error ? (
        <>
          <img
            src="https://houm.com/static/brandImage/houmLogo.svg"
            alt="logo gris houm"
          />
          <h1>Pokédex</h1>
          <br />
        </>
      ) : !error ? (
        <Pokedex type={tipo}>
          <LogoPokemon src={LogoPokemons} alt="logo pokemon" />

          <ImagenPokemon src={imagen} alt={`imagen ${infoPokemon.name}`} />

          <h2>{infoPokemon.name}</h2>
          <span>{tipo.toUpperCase()}</span>
          <ContainerStats>
            <ul>
              {infoPokemon.stats.map((poke, i) => (
                <li key={i}>
                  <strong>{capitalizarPrimeraLetra(poke.stat.name)}</strong> :
                  {poke.base_stat}
                </li>
              ))}
            </ul>
          </ContainerStats>

          <ContainerCharact>
            <Stat>
              <h3>Experience</h3>
              <p>{infoPokemon.base_experience}</p>
            </Stat>
            <Stat>
              <h3>Height</h3>
              <p>{infoPokemon.height}</p>
            </Stat>
            <Stat>
              <h3>Weight</h3>
              <p>{infoPokemon.weight}</p>
            </Stat>
          </ContainerCharact>
        </Pokedex>
      ) : (
        <ContainerSkeleton>
          <SkeletonInfo />
        </ContainerSkeleton>
      )}
    </ContainerInfo>
  );
});

InfoPokemon.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    types: PropTypes.array.isRequired,
    height: PropTypes.number.isRequired,
    weight: PropTypes.number.isRequired,
    base_experience: PropTypes.number.isRequired,
    stats: PropTypes.array.isRequired,
  }),
};
