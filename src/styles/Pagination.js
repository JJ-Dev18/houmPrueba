import styled from "styled-components";

export const ContentButtons = styled.div`
  display: flex;
  width: 375px;
  margin: 10px 0;
  justify-content: space-around;
`;

export const Button = styled.button`
  border-radius: 100px;
  border: 1px solid ${(props) => props.theme.button};
  height: 48px;
  cursor:pointer ;
  padding: 0px 48px;
  font-size: 0.9375rem
  line-height: 1.3em;
  font-weight : bold;
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

export const ContainerPagination = styled.div`
  display: flex;
  justify-content: space-around;
  color: ${(props) => props.theme.text};
  padding: 10px;
  width: 100%;
  @media screen and (min-width:720px) {
    width: 375px;
  }
`;