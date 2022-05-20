import React, { useState } from "react";
import { Bar, NotificacionItem } from "../styles/Notificacion";

const Notification = (props) => {
  const [exit, setExit] = useState(false);
  const [width, setWidth] = useState(0);
  const [intervalID, setIntervalID] = useState(null);

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

  React.useEffect(() => {
    if (width === 100) {
      // Close notification
      handleCloseNotification();
    }
  }, [width]);

  React.useEffect(() => {
    handleStartTimer();
  }, []);

  return (
    <NotificacionItem
      onMouseEnter={handlePauseTimer}
      onMouseLeave={handleStartTimer}
      exit={exit}
      className={`
        props.type === "SUCCESS" ? "success" : "error"
      } ${exit ? "exit" : ""}`}
    >
      <p>{props.message}</p>
      <Bar className={"bar"} style={{ width: `${width}%` }} />
    </NotificacionItem>
  );
};

export default Notification;
