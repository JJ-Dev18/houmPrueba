import React from "react";
import ContentLoader from "react-content-loader";
import PropTypes from 'prop-types'

/**
  Este componente sirve para crear el skeleton de cada card 
 */

 const SkeletonCard =( props) => {
  return (
    <ContentLoader
      width={300}
      height={120}
      viewBox="0 0 750 290"
      backgroundColor="#f0f0f0"
      foregroundColor="#e6e6e6"
   
      {...props}
    >
      <rect x="8" y="4" rx="30" ry="30" width="730" height="290" />
    </ContentLoader>
  );
}

export const SkeletonInfo = (props) => (
  
  <ContentLoader
    speed={2}
    width={350}
    height={500}
    viewBox="0 0 350 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="20" ry="20" width="350" height="500" />
  </ContentLoader>

);
/**
  Este componente sirve para crear el numero de skleleton segun el numero de pokemones 
 */
const Skeleton = ({numPokemones = 12})=>{
   
   const list = []

  for(let i = 0; i < numPokemones; i++){
    list.push(
        <SkeletonCard key={i}/>
    );
  }
  return(
   <>
    {list}
   </>
  )
}

export default Skeleton;

Skeleton.propTypes = {
 numPokemones : PropTypes.number.isRequired
};