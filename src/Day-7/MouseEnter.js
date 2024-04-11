
import { useState } from 'react';

function MouseEnter(){

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter =()=>{
        setIsHovered(true);
    };
    const handleMouseLeave =()=>{
        setIsHovered(false);
    };
    
  const textColor = isHovered ? 'red' : 'black';
  return (
    <div>
    <h1
      onMouseEnter={handleMouseEnter}
      MouseEnter={handleMouseEnter}
      style={{color: textColor}}
      >
        hover me to change color
      </h1>
    </div>
  );
};

export default MouseEnter;
