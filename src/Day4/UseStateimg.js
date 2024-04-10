
import { useState } from "react";
 
function UseStateimg(){
    const [Firstimg, setFirstName] = useState("https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg");
    
function img(){
    setFirstName('https://avatars.mds.yandex.net/i?id=3042e48e6070e46c0fc785a5a4dd10db-5235616-images-taas-consumers&n=27&h=480&w=480')
}

return(
         <div>
            <img src={Firstimg} alt=""/>
            <button onClick={img}>Click Me</button>
         </div>

)
}
export default UseStateimg;