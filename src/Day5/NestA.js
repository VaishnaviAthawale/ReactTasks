import React from 'react'
import NestB from './NestB';

function NestA({data}) {
  return (
    <div>
      <NestB data={data}/>
    </div>
  )
}

export default NestA;
