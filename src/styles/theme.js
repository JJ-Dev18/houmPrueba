import { createGlobalStyle } from "styled-components";
import pokemonSolid from '../fonts/PokemonSolid.ttf'
import pokemonHollow from "../fonts/PokemonHollow.ttf";


export const ligthTheme = {
  background: "white",
  text: "black",
  titulos: "black",
  button: " #FF452B ",
  hoverButton: "rgb(178, 48, 30)",
  inputs: " #f5f5f5",
  inputHover: "rgba(0, 0, 0, 0.09)",
  border : "none"
};

export const darkTheme = {
  button: " #FF452B ",
  titulos: "#263238",
  text: "white",
  background: "#0d1117",
  hoverButton: "rgb(178, 48, 30)",
  inputs: "#263238",
  inputHover: "#263240",
  border: "#8b949e",
};

export const GlobalStyles = createGlobalStyle`
 @font-face {
        font-family: 'Pokemon Solid';
        src :url(${pokemonSolid}) ;
    }

    @font-face {
        font-family: 'Pokemon Hollow';
         src: url(${pokemonHollow}) ;
    }

 body{
   background-color : ${(props) => props.theme.background};
 }
 
`;