import React from 'react'
import NestC from './NestC';
function NestB({data}) {
  return (
    <div>
     <NestC name ={data}/>
    </div>
  )
}

export default NestB;
