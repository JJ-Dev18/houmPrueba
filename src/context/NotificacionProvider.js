import React, { createContext, useContext, useReducer, useState } from "react";
import { v4 } from "uuid";
import Notification from "../components/Notification";
import { WrapperNotificacion } from "../styles/Notificacion";

/**
  Este archivo crea el context de la alerta o notificacion , como tambien el componente que maneja la notificacion
 */

const NotificationContext = createContext();

//Provider para tener las distintas acciones de la notificacion 
const NotificationProvider = (props) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "ADD_NOTIFICATION":
        return [...state, { ...action.payload }];
      case "REMOVE_NOTIFICATION":
        return state.filter((el) => el.id !== action.id);
      default:
        return state;
    }
  }, []);
  //Retornamos la notificacion envuelta en el provider 
  return (
    <NotificationContext.Provider value={dispatch}>
      <WrapperNotificacion>
        {state.map((note, i) => {
          return <Notification dispatch={dispatch} key={i} {...note} />;
        })}
      </WrapperNotificacion>
      {props.children}
    </NotificationContext.Provider>
  );
};

//funcion para usar la notificacion y el context 
export const useNotification = () => {
  const dispatch = useContext(NotificationContext);
   
  return (props) => {
    dispatch({
      type: "ADD_NOTIFICATION",
      payload: {
        id: v4(),
        ...props,
      },
    });
  };
};



export default NotificationProvider;
