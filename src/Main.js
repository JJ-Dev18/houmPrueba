import React, { useState, useEffect, useCallback, useRef } from "react";
import "./App.css";
import {
  MainContainer,
  Toogle,
} from "./styles/Main";
import { InfoPokemon } from "./components/InfoPokemon";
import useModeContext from "./context/ModeContext";
import { darkTheme, GlobalStyles, ligthTheme } from "./styles/theme";
import { ThemeProvider } from "styled-components";
import { darkMode,lightMode } from "./context/actions";
import { ScreenCards } from "./components/ScreenCards";
import {
  useNotification,
} from "./context/NotificacionProvider";
import { Pagination } from "./components/Pagination";
import { getPokemonData, getPokemons } from "./api/api";


/**
  Componente Main 
 */


const Main = () => {

  const [pokemons, setpokemons] = useState([]);
  const [cantPokemones, setCantPokemones] = useState(10)
  const [loading, setLoading] = useState(true);
  const [page, setpage] = useState(0);
  const [pokeDex, setPokeDex] = useState();
  const { value: modeValue } = useModeContext();
  const { state: modeState, dispatch } = modeValue;
  const dispatchNotificacion = useNotification();
  const total = useRef()
  
  
  const handleNewNotification = (error) => {
    dispatchNotificacion({
      type: "ERROR",
      message: `${error}`,
      title: "Error Request",
    });
  };
  
  const toggleDarkmode = () => {
    modeState.darkMode ? dispatch(lightMode()) : dispatch(darkMode());
  };
  
  const infoPokemon = useCallback((poke) => setPokeDex(poke), []);

  const getPokemones = async () => {
    try {
      setLoading(true);
      const res = await getPokemons(cantPokemones, cantPokemones * page);
      
      total.current =res.count;
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
        
        <Pagination
          inicio={cantPokemones * page}
          final={cantPokemones * page + cantPokemones}
          total={total.current}
          setCantPokemones={setCantPokemones}
          setpage={setpage}
          page={page }
        />
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
