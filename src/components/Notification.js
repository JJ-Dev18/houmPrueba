import React, { useState , useEffect,memo} from "react";
import { Bar, NotificacionItem } from "../styles/Notificacion";
import PropTypes from "prop-types";
import useModeContext from "../context/ModeContext";

/**
  Este componente sirve para cargar la Notificacion  
 */
const Notification = (props) => {
  const [exit, setExit] = useState(false);
  const [width, setWidth] = useState(0);
  const [intervalID, setIntervalID] = useState(null);
  const { value: modeValue } = useModeContext();
  const { state: modeState } = modeValue;
  
  const handleStartTimer = () => {
    //Creamos un interval cad 20 segundos aumente el width 
    const id = setInterval(() => {
      setWidth((prev) => {
        if (prev < 100) {
          return prev + 0.5;
        }

        clearInterval(id);
        return prev;
      });
    }, 20);

    setIntervalID(id);
  };
  //Limpiamos el interval
  const handlePauseTimer = () => {
    clearInterval(intervalID);
  };

  const handleCloseNotification = () => {
    //Pausamos el timer, cambiamos la variable exit que le da la animacion ala notificacion y disparamos el dispatch para remover la notificacion
    handlePauseTimer();
    setExit(true);
    setTimeout(() => {
      props.dispatch({
        type: "REMOVE_NOTIFICATION",
        id: props.id,
      });
    }, 400);
  };

  useEffect(() => {
    //Cuando el width llega a 100 se cierra 
    if (width === 100) {
      // Cerrar Notificacion
      handleCloseNotification();
    }
  }, [width]);

  useEffect(() => {
    //Cada que se renderice empezamos con el timer 
    handleStartTimer();
  }, []);

  return (
    <NotificacionItem
      onMouseEnter={handlePauseTimer}
      onMouseLeave={handleStartTimer}
      exit={exit}
      dark={modeState.darkMode}
    >
      <p>{props.message}</p>
      {/* Le damos la propiedad width a la barra  */}
      <Bar className={"bar"} style={{ width: `${width}%` }} />
    </NotificacionItem>
  );
};

export default Notification;

Notification.propTypes = { 
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  dispatch : PropTypes.func.isRequired,
};