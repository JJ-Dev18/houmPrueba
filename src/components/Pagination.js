import React, {memo} from 'react'
import { ContentButtons, Button, ContainerPagination } from '../styles/Pagination'
import PropTypes from "prop-types";


/**
  Este componente sirve para cargar y manejar la paginacion  
 */

export const Pagination = memo(({inicio,final,total,setCantPokemones,page,setpage}) => {
  
  
  const onSelected = (e) => {
    let cantidad = parseInt(e.target.value);
    setCantPokemones(cantidad);
  };
  
  return (
    <>
      <ContentButtons className="btn-group">
        {page > 0 && (
          <Button
            onClick={() => {
              setpage(page - 1);
            }}
          >
            Anterior
          </Button>
        )}
       
        <Button
          onClick={() => {
            setpage(page + 1);
          }}
        >
          Siguiente
        </Button>
      </ContentButtons>
      <ContainerPagination>
        <label htmlFor="cantPokemones">Pokemones por pagina</label>
        <select onChange={onSelected} id="cantPokemones">
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={30}>30</option>
          <option value={40}>40</option>
          <option value={50}>50</option>
        </select>

        <span>
          {inicio + 1} - {final} de {total}
        </span>
        <br />
        {/* <p>page: {page + 1 }</p> */}
      </ContainerPagination>
    </>
  );
})


Pagination.propTypes = {
  inicio : PropTypes.number.isRequired,
  final : PropTypes.number.isRequired,
  total : PropTypes.number,
  setCantPokemones : PropTypes.func.isRequired,
  page : PropTypes.number.isRequired,
  setpage : PropTypes.func.isRequired,
};