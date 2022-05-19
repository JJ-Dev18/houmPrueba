import styled from 'styled-components'  

export const MainContainer = styled.div`
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items : center;
  /* background: ${(props) => props.theme.text}; */
  h1 {
    color: white;
    text-align: center;
    margin: 10px;
  }
`;

export const ContainerPokemons = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  flex-basis: 50%;
`;


export const ContentButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;



export const Button = styled.button`
  border-radius: 100px;
  border: 1px solid ${(props) => props.theme.primary};
  height: 48px;
  cursor:pointer ;
  padding: 0px 48px;
  font-size: 0.9375rem
  line-height: 1.3em;
  color: white;
  width: 200px;
  margin: 10px 10px;
  background-color: ${(props) => props.theme.primary};

  &:hover{
    color: white;
    cursor: pointer;
    text-decoration: none;
    background-color: rgb(178, 48, 30);
    border: 1px solid rgb(178, 48, 30);
  }
`;