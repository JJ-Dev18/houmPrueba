import React from 'react'
import styled from 'styled-components'

const ContainerPagination = styled.div ` 
display : flex;
justify-content :space-around;

`

export const Pagination = ({inicio,final,total,setCantPokemones,page}) => {
  
  const onSelected = (e) => {
    // setCantPokemones(e.target.value)
    let cantidad = (e.target.value);
    setCantPokemones(cantidad);
    // setUrl(url + cantidad)
  };
  
  return (
    <ContainerPagination>
      <label>Pokemones por pagina</label>
      <p>page { page} </p>
      <select onChange={onSelected}>
        <option value={10}>
          10
        </option>
        <option value={20} >
          20
        </option>
        <option value={30}>
          30
        </option>
        <option value={40} >
          40
        </option>
        <option value={50}>
          50
        </option>
      </select>

      <span>{inicio} - {final} de {total}</span>
    </ContainerPagination>
  );
}


