import styled , {css}from 'styled-components'
import { Card } from './Card';
//https://houm.com/static/brandImage/grayLogo.svg

 export const ContainerInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  /* flex-basis: 50%; */
  height: 50%vh;
`;

export const Pokedex = styled(Card)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 375px;
  position : relative;
  height: ${(props) => (props.home ? "200px" : "500px")};
  padding: 20px;

  &:hover {
    animation: none;
    border: 1px solid rgba(0, 0, 0, 0.35);
  }
  h1 {
    color: ${(props) => props.theme.secondary};
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