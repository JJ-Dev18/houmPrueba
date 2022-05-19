import { createGlobalStyle } from "styled-components";



export const ligthTheme = {
  background: "white",
  text: "black",
  titulos: "black",
  button: " #FF452B ",
  hoverButton: "rgb(178, 48, 30)",
};

export const darkTheme = {
  button: " #FF452B ",
  titulos: "#263238",
  text: "white",
  background: "#607D8B ",
  hoverButton: "rgb(178, 48, 30)",
};

export const GlobalStyles = createGlobalStyle`
 
 body{
   background-color : ${props => props.theme.background}
 }
`