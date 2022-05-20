import React, { createContext, useContext, useReducer, useState } from "react";
import { v4 } from "uuid";
import Notification from "../components/Notification";
import { WrapperNotificacion } from "../styles/Notificacion";


const NotificationContext = createContext();

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

export const useNotification = () => {
  const dispatch = useContext(NotificationContext);

  return (props) => {
    dispatch({
      type: "ADD_NOTIFICATION",
      payload: {
        id: 1,
        ...props,
      },
    });
  };
};



export default NotificationProvider;
