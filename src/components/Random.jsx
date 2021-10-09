import React, { Component } from 'react';

const styleRandom = {
    fontSize: 20,
    borderStyle: "solid" ,
    width: 700,
    textAlign:"left",
    margin:10,
    color:"black"
    
  };


function Random (props) { 
    const{min,max}= props;
    const randomNumber = (number) =>{
        Math.floor(Math.random()* ({max} - {min})+{min})
        return number;
    }
   //const value = randomNumber()
        return (
            <div style= {styleRandom}>
            <p>Random value between {min} and {max} = {randomNumber()}</p>     
                
            </div> 

        );
    }



export default Random;