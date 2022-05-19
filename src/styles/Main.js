import styled from 'styled-components'  

export const MainContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  /* overflow-x:hidden; */
  /* background: ${(props) => props.theme.text}; */
  h1 {
    color: ${(props) => props.theme.text};
    text-align: center;
    margin: 10px;
  }
`;

export const ContainerPokemons = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  /* flex-basis: 50%; */
`;


export const ContentButtons = styled.div`
  display: flex;
  width: 375px ;
  margin: 10px 0;
  justify-content: space-around;
  /* align-items: center; */
 
`;



export const Button = styled.button`
  border-radius: 100px;
  border: 1px solid ${(props) => props.theme.button};
  height: 48px;
  cursor:pointer ;
  padding: 0px 48px;
  font-size: 0.9375rem
  line-height: 1.3em;
  color: white;
  width: 180px;
  margin-bottom: 10px;
  /* margin: 10px 10px; */
  background-color: ${(props) => props.theme.button};

  &:hover{
    color: white;
    cursor: pointer;
    text-decoration: none;
    background-color: ${(props) => props.theme.hoverButton};
    border: 1px solid${(props) => props.theme.hoverButton}
  }
`;


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
  top: 5px;

  @media (min-width: 768px) {
    right: 20px;
  }
  &:after {
    content: "";
    display: block;
    width: 30px;
    height: 30px;
    position: absolute;
    background-color: ${(props) =>
      props.active ? props.theme.background : props.theme.button};
    left: ${(props) => (props.active ? "unset" : 0)};
    top: 0;
    right: ${(props) => (props.active ? 0 : "unset")};
    border-radius: 100px;
    transition: 0.2s ease all;
    box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.2);
  }
  span {
    width: 30px;
    height: 30px;
    line-height: 30px;
    display: block;
    background: none;
    color: ${(props) =>
      props.active ? props.theme.background : props.theme.text};
  }
`;
