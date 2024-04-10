import { useState } from 'react';

function Img() {
   let [firstImage, setImage] = useState("https://www.google.com/url?sa=i&url=https%3A%2F%2Ftinyjpg.com%2F&psig=AOvVaw1xQ9dHu0oMlmMKoQlG4-cx&ust=1712400310470000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJCMvLjyqoUDFQAAAAAdAAAAABAE.jpg");
   function Defaulting(){
    setImage=("https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F1%2F17%2FLitter_of_kittens.jpg%2F1200px-Litter_of_kittens.jpg&tbnid=TCyVQ7241yyy-M&vet=10CBYQxiAoB2oXChMIkIy8uPKqhQMVAAAAAB0AAAAAEBg..i&imgrefurl=https%3A%2F%2Fen.m.wikipedia.org%2Fwiki%2FFile%3ALitter_of_kittens.jpg&docid=WzIvsiCPURoEFM&w=1200&h=667&itg=1&q=.jpg%20imgaes&ved=0CBYQxiAoB2oXChMIkIy8uPKqhQMVAAAAAB0AAAAAEBg");
}
  return (
    <div>
    <img src={firstImage} alt="" onError={Defaulting}/>
    <button onClick={Defaulting}>Click</button>
    </div>
  );
}

export default Img;
