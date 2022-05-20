import styled , {css}from 'styled-components'
import { Card } from './Card';
//https://houm.com/static/brandImage/grayLogo.svg

 export const ContainerInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin-top: 15px;
  /* flex-basis: 50%; */
  height: 50%vh;
`;

export const Pokedex = styled(Card)`
  display: flex;
  justify-content: flex-start;
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
  transition: 0.5s ease all;
  margin-top: 30px;
  @media (min-width: 1280px) {
    margin-top: 0;
  }
  &:hover {
    animation: none;
    border: 1px solid rgba(0, 0, 0, 0.35);
  }
  h1 {
    color: ${(props) => props.theme.titulos};
    font-weight: bold;
  }
`;

export const ImagenPokemon = styled.img`
  width:50% ;
  height: 180px ;
`;

export const Logo = styled.img`
position: absolute;
bottom : 5px;
right: 5px;
width : 100px;
`