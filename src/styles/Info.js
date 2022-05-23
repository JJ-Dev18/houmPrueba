import styled , {css}from 'styled-components'
import { Card } from './Card';


 export const ContainerInfo = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   padding: 20px;
   margin-top: 30px;
   height: 50%vh;
 `;

export const Pokedex = styled(Card)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 350px;
  /* box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px; */
  /* box-shadow: 4px 4px 30px rgb(0 43 41 / 15%); */
  /* box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset; */
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  position: relative;
  height: ${(props) => (props.home ? "200px" : "500px")};
  /* transition: 0.5s ease all; */
  margin-top: 30px;
  span {
    background: ${(props) => props.theme.titulos};
    color: white;
    padding: 10px;
    position: absolute;
    border-radius: 10px;
    text-align: center;
    top: 0;
    margin-top: 10px;
    right: 10px;
    font-size: 0.8rem;
  }
  @media (min-width: 1280px) {
    margin-top: 0;
  }
  &:hover {
    animation: none;
    border: 2px solid ${(props) => props.theme.button};
   
  }
  h2 {
    color: ${(props) => props.theme.titulos};
    font-weight: bold;
    font-family: "Pokemon Solid";
  }
`;

export const ImagenPokemon = styled.img`
  width:50% ;
  height: 180px ;
  z-index: 99;
`;

export const LogoPokemon = styled.img`
position: absolute;
top: 0;
left:10px;
width:100px;
/* height:100px ; */

`
export const ContainerStats = styled.div`
  width: 100% !important;
  float: left;
  padding: 10px;

  ul {
    list-style: none;
    text-align: left;
  }
`;
export const ContainerCharact = styled.div`
  width: 100%;
  display: flex;
  padding: 10px;
  justify-content: space-between;

  /* position:absolute;
top:0; */

  /* border: 1px solid green; */
  border-radius: 0 0 20px 20px;
`;
export const Stat = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 5px;
  border-radius: 10px;
  /* border-top: ${(props) => props.theme.button} 1px solid; */
  border-bottom: ${(props) => props.theme.button} 1px solid;
 
`;
export const Logo = styled.img`
position: absolute;
bottom : 5px;
right: 5px;
width : 100px;
`