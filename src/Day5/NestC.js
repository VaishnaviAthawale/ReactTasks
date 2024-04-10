import React, { useContext } from 'react'
import { NameContext } from '../App';
import NestA from './NestA';

function NestC({name}) {

  return (
    <div>
     <h1>Welcome to reactjs {name}</h1>

    </div>
  )
}

export default NestC;
