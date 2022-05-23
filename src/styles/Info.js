import styled from 'styled-components'
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
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  position: relative;
  height: ${(props) => (props.home ? "200px" : "500px")};

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
  border-bottom: ${(props) => props.theme.button} 1px solid;
 
`;
export const Logo = styled.img`
position: absolute;
bottom : 5px;
right: 5px;
width : 100px;
`
export const ContainerSkeleton = styled.div`
  margin-top: 30px;

  @media (min-width: 1280px) {
    margin-top: 0;
  }
`;