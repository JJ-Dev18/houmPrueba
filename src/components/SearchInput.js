import React,{ useState } from 'react'
import { Buscador } from '../styles/Main'

export const SearchInput = () => {
  const [search, setsearch] = useState('')
  const handleSearch = (e)=>{
   console.log(e.target.value)
   setsearch(e.target.value)
  }
  return (
    <>
    <Buscador  onChange={handleSearch}/>
    <p>{search}</p>
    </>
  )
}
