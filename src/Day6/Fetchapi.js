import React, { useEffect, useState } from 'react'

function Fetchapi() {
    const [post , setPost]=useState([]);
useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response)=> {
       response.json().then((result) => {
        //returns promise
        setPost(result);
    })
})

});
  return (
    <div>
      <h1>fetch Api</h1>
      <ul>
        {
            post.map(pst => {
                return(
                    <>
                    <li>{pst.id}</li>
                    <li>{pst.title}</li>
                    </>
                )
            })
        }
      </ul>
    </div>
  )
}

export default Fetchapi;
