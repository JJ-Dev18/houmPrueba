import styled from 'styled-components'  

export const MainContainer = styled.div`
  height:100%;
  width:100% ;
  display: flex;
 
  flex-direction: column;
  /* justify-content: center; */
  align-items : center;
  /* overflow-y:scroll; */
  /* background: ${(props) => props.theme.text}; */
  h1 {
    color: ${props => props.theme.text};
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
  @media (max-width: 768px) {
  
  }
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

position:absolute ;
top: 5px;
right : 50%;
`
