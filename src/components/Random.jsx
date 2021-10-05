import React, { Component } from 'react';




function Random (props) { 
    const{min,max}= props;
    const minStr = {min}.toString()
    const maxStr = {max}.toString()
    const randomNumber = (number) =>{
        Math.floor(Math.random()* ({max} - {min})+{min})
        return number;
   
    }

    // const value = randomNumber()
    return (
        <p>Random value between {minStr} and {maxStr}={randomNumber}</p>     
)
}


export default Random;