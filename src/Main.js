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
  
  //Funcion que muestra la notificacion cuando existe un error
  const handleNewNotification = (error) => {
    dispatchNotificacion({
      type: "ERROR",
      message: `${error}`,
      title: "Error Request",
    });
  };
  //Funcion para cambiar el mode con el switch
  const toggleDarkmode = () => {
    modeState.darkMode ? dispatch(lightMode()) : dispatch(darkMode());
  };
  //Funcion que cambia el estado del pokedex 
  const infoPokemon = useCallback((poke) => setPokeDex(poke), []);
  //Funcion que carga los pokemones
  const getPokemones = async () => {
    try {
      //ponemos el loading en true para mostrar el skeleton
      setLoading(true);
      //hacemos el llamado a la funcion de get pokemons pasando parametros de offset y limit
      const res = await getPokemons(cantPokemones, cantPokemones * page);
      //damos valor al total 
      total.current =res.count;
      /*Ya que el resultado de getPokemons solo trae url y nombre, ejecutamos la funcion de getPokemon data
        haciendo un map en el resultado de la peticion */
      const promises = res.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });
      //Ejecutamos todas las promesas 
      const results = await Promise.all(promises);
      //cambiamos el estado de pokemon con todos los nuevos pokemones con sus respectivos datos 
      setpokemons(results)
      //cambiamos el loading para ocultar el skeleton 
      setLoading(false);
    } catch (error) {
      handleNewNotification(error);
    }
  };

  useEffect(() => {
    //Usamos el hook para cargar los pokemones cada que cambie la cantidad de pokemones o el numero de pagina
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
          page={page}
        />
        <Toogle
          onClick={toggleDarkmode}
          active={modeState.lightMode}
          aria-label="change mode"
        >
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
