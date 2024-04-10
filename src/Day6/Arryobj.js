import React, { useState } from 'react'

function Arryobj(){
const users = [{id:1, name: 'nisha'},{id:2, name:'sneha'}];
const[usersList, setUsers] = useState(users);

  return (
    <div>
      <h1>
       array of objects</h1>
      {usersList.map(User => <li key={User.id}>{User.name}</li>)}
    </div>
  ) 
}

export default Arryobj;
