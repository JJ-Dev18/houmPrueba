import styled ,{keyframes}from 'styled-components'

const SlideTop = keyframes`
   0% {
        margin-top: 100px;
    }

    100% {
        margin-top: -100px;
    }
`;

const SlideBottom = keyframes`
    0% {
        margin-top: -100px;
    }


    100% {
        margin-top: 100px;
    }
`;

export const NotificacionItem = styled.div`
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 20px;
  animation: ${(props) => (props.exit ? SlideTop : SlideBottom)} 4s;
  animation-fill-mode: forwards;
  width: 300px;
  padding: 10px;
  border: 1px solid #ff452b;
  color: ${(props) => (props.dark ? "white" : "black")};
  background-color: ${(props) => (props.dark ?  "#0d1117" : 'white')};
`;

export const WrapperNotificacion = styled.div`
  position: fixed;
  top: 0;
  left: 70px;
  width: 300px;
  z-index:999;

`;


export const Bar = styled.div`
  height: 10px;
  background-color: #ff452b;

`;