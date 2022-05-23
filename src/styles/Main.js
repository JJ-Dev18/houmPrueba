import styled from 'styled-components'  
import poke from '../images/pokebola.webp'
import logoPokemon from "../images/logopokemon.webp";


export const MainContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  h1 {
    color: ${(props) => props.theme.text};
    text-align: center;
    margin: 10px;
  }
`;

export const ContainerPokemons = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

 
`;

export const SelectTarget = styled.select`
  position: absolute;
  padding: 5px ;
  right: 10px;
  top: 15px;
  width:70px ;
  border : none;
  background : ${props => props.theme.background};
  color : ${ props => props.theme.text}
`;

export const ContentFiltro = styled.div` 
position: relative;
`


export const Toogle = styled.button`
  background-color: ${(props) =>
    props.active ? props.theme.button : props.theme.titulos};
  color: ${(props) => (props.active ? props.theme.text : props.theme.button)};
  border-radius: 1000px;
  border: none;
  display: flex;
  outline: none;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 3px ;
  margin: 10px 0;

  @media (min-width: 768px) {
    right: 20px;
  }
  &:after {
    content: "";
    display: block;
    width: 30px;
    height: 30px;
    position: absolute;
    background: url(${poke}) center;
    background-size: 30px 30px;

    background-color: ${(props) =>
      props.active ? props.theme.background : props.theme.button};
    left: ${(props) => (props.active ? "unset" : 0)};
    top: 0;
    right: ${(props) => (props.active ? 0 : "unset")};
    border-radius: 100px;
    transition: 4s ease all;
    box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.2);
  }
  span {
    width: 33px;
    height: 33px;
    line-height: 33px;
    display: block;
    background: none;
    color: ${(props) =>
      props.active ? props.theme.background : props.theme.text};
  }
`;

export const Buscador = styled.input`
  font: inherit;
  color: ${(props) => props.theme.text};
  width: ${(props) => (props.search ? "260px" : "300px")};
  height: 0.7em;
  border: none;
  margin: 0;
  display: block;
  background-color: ${(props) => props.theme.inputs};
  min-width: 0;
  box-sizing: content-box;
  animation-name: mui-auto-fill-cancel;
  letter-spacing: inherit;
  animation-duration: 10ms;
  -webkit-tap-highlight-color: transparent;
  padding: 12px 16px;
  border-radius: 2rem;
  padding-right: 24px;
  margin: 10px 0;
  position: ${(props) => (props.search ? "absolute" : "static")};
  top: 0;
  right: 70px;
  @media screen and (min-width: 768px) {
    right: 90px;
    width : 300px;
  }
  &:focus {
    border: 2px solid ${(props) => props.theme.button};
    outline: none;
  }
  &:hover {
    background-color: ${(props) => props.theme.inputHover};
  }
`;

