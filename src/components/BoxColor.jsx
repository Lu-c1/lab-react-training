import React, { Component } from 'react';

const rgbValue = () =>{
    return Math.floor(Math.random() * 256);
}
const colorRGB =()=> {
    let color = "("+ rgbValue(255)+","+rgbValue(255) +","+rgbValue(255 )+")"
    /* let color = "("+{r}+","+{g}+","+{b}+")" */
    return "rgb"+color;
}
const styleBox ={
        width:200,
        height:50,
        border: "solid black",
        padding:20, 
        backgroundColor:colorRGB() 
    } 
function BoxColor (props) {
    const{r,g,b}= props;
     return (
            <div style={styleBox}>rgb({r} {g} {b})</div>
  
        );
    }  

    

 
        
      

 
           
export default BoxColor;