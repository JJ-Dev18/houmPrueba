import styled ,{keyframes}from 'styled-components'

const SlideLeft = keyframes`
   0% {
        margin-left: 80%;
    }

    100% {
        margin-left: 0;
    }
`;

const SlideRight = keyframes`
    0% {
        margin-left: 0;
    }

    100% {
        margin-left: 80%;
    }
`;

export const NotificacionItem = styled.div`
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 20px;
  animation: ${(props) => (props.exit ? SlideLeft : SlideRight)} 4s ;
  animation-fill-mode: forwards;
  width: 300px;
  padding: 10px;
  border: 1px solid #ff452b;
  z-index: 9999;

`;

export const WrapperNotificacion = styled.div`
  position: fixed;
  top: 10px;
  left: 10px;
  width: 300px;
`;



export const Bar = styled.div`
  height: 10px;
  background-color: #ff452b;
`;