import React, { Component } from 'react';

function BoxColor (props) {
    const{r,g,b}= props;
    const colorRGB =()=> {

        let color = "("+r+","+g+","+b+")"
        return "rgb"+color;
    }
    const styleBox ={ 
        width:500,
        margin:10,
        padding:60, 
        border: "solid black",
        
        backgroundColor:colorRGB() 
     }

     return (
            <div style={styleBox}>rgb({r} {g} {b})</div>
  
        );
    }  

    

 
        
      

 
           
export default BoxColor;