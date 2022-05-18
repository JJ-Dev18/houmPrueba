import styled from 'styled-components'


export const ContainerInfo = styled.div`
  display:flex ;
  justify-content : center;
  align-items: center;
  /* flex-basis: 50%; */
  height: 50%vh  ;
  border:1px solid red ;
`;

export const Pokedex = styled.div`
display:flex ;
justify-content : flex-start;
align-items : center;
flex-direction : column;
width:400px ;
height:500px ;
border:1px solid orange ;
padding:20px ;

`

export const ImagenPokemon = styled.img`
  width:50% ;
  height: 180px ;
`;