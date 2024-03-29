import { createContext, useContext, useReducer } from "react";

/**
  Este archivo crea el context del modo, como sus distintas acciones en el reducer 
 */
export const ModeContext = createContext(null);

//Utilizamos lo que haya en el localstorage como initialState si no damos un initialState
const initialState = JSON.parse(localStorage.getItem("mode")) || {
  darkMode: false,
  lightMode: true,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "darkMode": {
      //guardamos lo que hicimos para mantener las preferencias del usuario
      localStorage.setItem(
        "mode",
        JSON.stringify({
          darkMode: true,
          lightMode: false,
        })
      );
      return {
        darkMode: true,
        lightMode: false,
      };
    }
    case "lightMode": {
      localStorage.setItem(
        "mode",
        JSON.stringify({
          darkMode: false,
          lightMode: true,
        })
      );
      return {
        darkMode: false,
        lightMode: true,
      };
    }
    default:
      return state;
  }
};
export const ModeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return (
    <ModeContext.Provider value={{ value }}>{children}</ModeContext.Provider>
  );
};

export const useModeContext = () => {
  const context = useContext(ModeContext);

  return context;
};

export default useModeContext;
