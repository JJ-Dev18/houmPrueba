import React from "react";
import ContentLoader from "react-content-loader";
import PropTypes from 'prop-types'


 const SkeletonCard =( props) => {
   
  return (
    <ContentLoader
      width={300}
      height={120}
      viewBox="0 0 750 290"
      // backgroundColor="#dedede"
      backgroundColor="#f0f0f0"
      foregroundColor="#e6e6e6"
      // foregroundColor="#f0f0f0"
      {...props}
    >
      <rect x="8" y="4" rx="30" ry="30" width="730" height="290" />
    </ContentLoader>
  );
}

const Skeleton = ({numPokemones = 12})=>{
 
   const list = []

  for(let i = 0; i < numPokemones; i++){
    list.push(
        <SkeletonCard/>
    );
  }
  return(
   <>
    {list}
   </>
  )
}

export default Skeleton;