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
import {
  useNotification,
} from "./context/NotificacionProvider";
import { Pagination } from "./components/Pagination";
import { useCounter } from "./hooks/useCounter";
import { getPokemonData, getPokemons } from "./api/api";


/**
  Componente Main 
 */


// const cantPokemones = 10
const Main = () => {
  const [pokemons, setpokemons] = useState([]);
  const [cantPokemones, setCantPokemones] = useState(10)
  const [loading, setLoading] = useState(true);
  const [page, setpage] = useState(0);
  const [pokeDex, setPokeDex] = useState();
  // const [url, setUrl] = useState(
  //   `https://pokeapi.co/api/v2/pokemon?offset=0&limit=`
  // );

  const dispatchNotificacion = useNotification();
  const handleNewNotification = (error) => {
    dispatchNotificacion({
      type: "ERROR",
      message: `${error}`,
      title: "Error Request",
    });
  };
  const { value: modeValue } = useModeContext();
  const { state: modeState, dispatch } = modeValue;
  
  const toggleDarkmode = () => {
    modeState.darkMode ? dispatch(lightMode()) : dispatch(darkMode());
  };
  
  const infoPokemon = useCallback((poke) => setPokeDex(poke), []);

  const getPokemones = async () => {
    try {
      setLoading(true);
      const res = await getPokemons(cantPokemones, cantPokemones * page);
    
      const promises = res.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });
      const results = await Promise.all(promises);
      setpokemons(results)
      setLoading(false);
    } catch (error) {
      handleNewNotification(error);
    }
  };

  useEffect(() => {
    getPokemones();
  }, [cantPokemones,page]);

  


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
          {page > 0 && (
            <Button
              onClick={() => {
                setpage(page-1)
              }}
            >
              Anterior
            </Button>
          )}

       
            <Button
              onClick={() => {
               setpage(page + 1);
              }}
            >
              Siguiente
            </Button>
          
        </ContentButtons>
        <Pagination inicio={cantPokemones} final={123} total={1224} setCantPokemones={setCantPokemones} page={page+ 1}/>
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
