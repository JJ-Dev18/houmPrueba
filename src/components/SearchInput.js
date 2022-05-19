import React,{ useState } from 'react'
import { Buscador } from '../styles/Main'

export const SearchInput = ({handleFilter}) => {
  const [search, setsearch] = useState('')
 
  return (
    <>
    <Buscador  onChange={(e)=>handleFilter(e.target.value)}/>
    <p>{search}</p>
    </>
  )
}
