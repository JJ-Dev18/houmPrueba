import React, { useState, useEffect } from "react";
import { _handleError, _throwSpecificError } from "./errors/errors";
import "./App.css";
import {
  Button,
  ContainerPokemons,
  ContentButtons,
  MainContainer,
  Toogle,
} from "./styles/Main";
import { CardPokemon } from "./components/CardPokemon";
import { InfoPokemon } from "./components/InfoPokemon";
import Skeleton from "./components/Skeleton";
import useModeContext from "./context/ModeContext";
import { darkTheme, GlobalStyles, ligthTheme } from "./utils/modes";
import { ThemeProvider } from "styled-components";
import { darkMode, lightMode } from "./context/actions";

const cantPokemones = 10;


const Main = () => {
  const [pokemons, setpokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const [pokeDex, setPokeDex] = useState();
  const [url, setUrl] = useState(
    `https://pokeapi.co/api/v2/pokemon?offset=0&limit=${cantPokemones}`
  );
  const [errorState, setErrorState] = useState({ hasError: false });
  const { value } = useModeContext();
  const { state, dispatch } = value;
  console.log(state)

  const handleError = (err) => {
    setErrorState({ hasError: true, message: err.message });
  };
  const toggleDarkmode = ()=>{
   
   (state.darkMode) ? dispatch(lightMode()) : dispatch(darkMode());
    console.log(state.darkMode);
  }
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
    <ThemeProvider theme={state.darkMode ? darkTheme : ligthTheme}>
      <GlobalStyles/>
      <MainContainer>
        <InfoPokemon data={pokeDex} />
        <h1>Pokémones</h1>

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
                infoPokemon={(pok) => setPokeDex(pok)}
              />
            ))
          )}
        </ContainerPokemons>
        {errorState.hasError && <div>{errorState.message}</div>}
        <ContentButtons className="btn-group">
          {prevUrl && (
            <Button
              onClick={() => {
                setpokemons([]);
                setUrl(prevUrl);
              }}
            >
              Anterior
            </Button>
          )}

          {nextUrl && (
            <Button
              onClick={() => {
                setpokemons([]);
                setUrl(nextUrl);
              }}
            >
              Siguiente
            </Button>
          )}
        </ContentButtons>
        <Toogle onClick={toggleDarkmode}>Cambiar modo</Toogle>
      </MainContainer>
    </ThemeProvider>
  );
};

export default Main;
