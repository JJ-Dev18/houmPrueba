import React, { useState, useEffect, useCallback, useRef } from "react";
import { _handleError, _throwSpecificError } from "./errors/errors";
import "./App.css";
import {
  Button,
  ContentButtons,
  Footer,
  MainContainer,
  Toogle,
} from "./styles/Main";
import { InfoPokemon } from "./components/InfoPokemon";
import useModeContext from "./context/ModeContext";
import { darkTheme, GlobalStyles, ligthTheme } from "./styles/theme";
import { ThemeProvider } from "styled-components";
import { darkMode, hasHerror, lightMode } from "./context/actions";
import { ScreenCards } from "./components/ScreenCards";
import useErrorContext, {
  useNotification,
} from "./context/NotificacionProvider";
import { Pagination } from "./components/Pagination";
import { useCounter } from "./hooks/useCounter";
import { parse } from "uuid";

/**
  Componente Main 
 */



const Main = () => {
  const [pokemons, setpokemons] = useState([]);
  const [cantPokemones, setCantPokemones] = useState(10)
  const [loading, setLoading] = useState(true);
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const [pokeDex, setPokeDex] = useState();
  const [url, setUrl] = useState(
    `https://pokeapi.co/api/v2/pokemon?offset=0&limit=`
  );
  console.log(url)
  const { counter, increment, decrement, reset } = useCounter(10);
  const total = useRef();
  const dispatchNotificacion = useNotification();

  const handleNewNotification = (error) => {
    dispatchNotificacion({
      type: "ERROR",
      message: `${error}`,
      title: "Successful Request",
    });
  };

  const { value: modeValue } = useModeContext();
  const { state: modeState, dispatch } = modeValue;

  const toggleDarkmode = () => {
    modeState.darkMode ? dispatch(lightMode()) : dispatch(darkMode());
  };
  const onSelected = (e)=> {
    // setCantPokemones(e.target.value)
    let cantidad = parseInt(e.target.value)
    setCantPokemones(cantidad)
    setUrl(url + cantidad)
  }
  const infoPokemon = useCallback((poke) => setPokeDex(poke), []);

  const getPokemons = async (cantidad) => {
    
    try {
      setLoading(true);
      const response = await fetch(url );
      if (!response.ok) {
        return _handleError(response.status);
      }
      const res = await response.json();

      setNextUrl(res.next);
      setPrevUrl(res.previous);
      getObjectPokemons(res.results);
      total.current = res.count;
      setLoading(false);
    } catch (error) {
      handleNewNotification(error);
    }
  };

  const getObjectPokemons = (res) => {
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
      handleNewNotification(error);
    }
  };
  useEffect(() => {
    getPokemons();
  }, [cantPokemones]);

  


  return (
    <ThemeProvider theme={modeState.darkMode ? darkTheme : ligthTheme}>
      <GlobalStyles />
      <MainContainer>
        <InfoPokemon data={pokeDex} />
        <ScreenCards
          data={pokemons}
          loading={loading}
          cantPokemones={cantPokemones}
          infoPokemon={infoPokemon}
        />
        {/* {errorState.hasError && <div>{errorState.message}</div>} */}
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
        <Pagination inicio={cantPokemones} final={123} total={total.current} onSelected={onSelected}/>
        <Toogle onClick={toggleDarkmode} active={modeState.lightMode}>
          <span>
            <i className="fas fa-sun"></i>
          </span>
          <span>
            <i className="fas fa-moon"></i>
          </span>
        </Toogle>
      </MainContainer>
    </ThemeProvider>
  );
};

export default Main;
