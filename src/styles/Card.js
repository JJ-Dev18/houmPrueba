import styled, { css, keyframes } from "styled-components";

const bounce = keyframes`
  0%{
    transform: scale(1);
  }
  50%{
    transform: scale(1.1);
  }
  100%{
    transform : scale(1)
  }
`;
export const Card = styled.div`
  display: flex;
  padding: 15px 10px 15px 15px;
  border-radius: 20px;
  justify-content : space-between;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  /* box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px; */
  height: 120px;
  width: 300px;
  border: 1px solid rgba(0, 0, 0, 0.35);
  margin: 5px;
  /* font-family : 'Pokemon Hollow'; */
  ${(props) => {
    switch (props.type) {
      case "rock":
        return css`
          background-color: rgb(148, 81, 81);
        `;
      case "ghost ":
        return css`
          background-color: rgb(247, 247, 247);
        `;
      case "electric":
        return css`
          background-color: rgb(255, 255, 161);
        `;
      case "bug":
        return css`
          background-color: #f6d6a7;
        `;
      case "poison":
        return css`
          background-color: #e0a7f6;
        `;
      case "fairy":
        return css`
          background-color: rgba(255, 192, 203, 0.863);
        `;
      case "fire":
        return css`
          background-color: #fbe3df;
        `;
      case "grass":
        return css`
          background-color: #e2f9e1;
        `;
      case "water":
        return css`
          background-color: #e0f1fd;
        `;
      default:
        return css`
          background-color: #f4f4f4;
        `;
    }
  }}

  &:hover {
    animation: ${bounce} 0.5s;
    border: 1px solid ${(props) => props.theme.secondary};
  }
`;

export const ImagenPokemon = styled.img` 
width : 100px;
height : 100px;
`
