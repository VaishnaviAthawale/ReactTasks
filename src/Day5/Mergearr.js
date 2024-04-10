import React, { useEffect } from 'react'

function Mergearr() {
    let arr1 =[1,2,3,15];
    let arr2 =[5,8,9,12];
    let arr3 =[];

    useEffect(() => {
      arr3 =[...arr1,...arr2]
     console.log(arr3)
  

  },[arr3])
  
  return (
   <div>

   <p></p>
 </div>
  )
}

export default Mergearr;
