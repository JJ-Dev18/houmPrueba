import { createContext, useContext, useReducer } from "react";


export const ModeContext = createContext(null);

const initialState = JSON.parse(localStorage.getItem("mode")) || {
  darkMode: false,
  lightMode: true,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "darkMode": {
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
    case 'lightMode':{
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
    <ModeContext.Provider value={{ value }}>
      {children}
    </ModeContext.Provider>
  );
};

export function useModeContext() {
  const context = useContext(ModeContext);

  if (!context) {
    console.error("Error deploying App Context!!!");
  }

  return context;
}

export default useModeContext;

