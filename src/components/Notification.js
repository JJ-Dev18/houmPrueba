import React, { useState , useEffect,memo} from "react";
import { Bar, NotificacionItem } from "../styles/Notificacion";
import PropTypes from "prop-types";
import useModeContext from "../context/ModeContext";

/**
  Este componente sirve para cargar la Notificacion  
 */
const Notification = memo((props) => {
  const [exit, setExit] = useState(false);
  const [width, setWidth] = useState(0);
  const [intervalID, setIntervalID] = useState(null);
  const { value: modeValue } = useModeContext();
  const { state: modeState } = modeValue;

  const handleStartTimer = () => {
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

  const handlePauseTimer = () => {
    clearInterval(intervalID);
  };

  const handleCloseNotification = () => {
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
    if (width === 100) {
      // Cerrar Notificacion
      handleCloseNotification();
    }
  }, [width]);

  useEffect(() => {
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
      <Bar className={"bar"} style={{ width: `${width}%` }} />
    </NotificacionItem>
  );
});

export default Notification;

Notification.propTypes = { 
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  dispatch : PropTypes.func.isRequired,
};