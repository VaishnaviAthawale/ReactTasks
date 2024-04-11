import React, { useState } from 'react'; 
  
function OnFocus() { 
    const [isFocused, setIsFocused] = useState(false); 
  
    const handleOnFocus = () => { 
        setIsFocused(true); 
    }; 
  
    const handleBlur = () => { 
        setIsFocused(false); 
    }; 
  
    return ( 
        <div> 
        <h1>Onfocus Event</h1>
            <label htmlFor="myInput">Write something:  </label> 
            <input 
                type="text"
                id="myInput"
                onFocus={handleOnFocus} 
                onBlur={handleBlur} 
                style= 
                { 
                    { 
                        backgroundColor: isFocused ? 
                            'antiquewhite' : 'white', 
                            borderRadius: "5px"
                    } 
                } 
            /> 
        </div> 
    ); 
} 
  
export default OnFocus;