import React, { Component } from 'react';

const styleId = {
  
    width: 900,
    height: 100, 
    padding : 25,
    margin:10,
    border: "4px solid black",
    display:"flex",
    alignItems:"center",
    justifyContent:"start",
       
}
const styleText = {
    fontSize:12,
    lineHeight:0.5,
    textAlign:"left",
    marginLeft: 20
       
}

class IdCard extends Component {
    render() {
        //destructuring
        //render only gives strings, don let to render an object, so we must convert everything in strings
        const{firstName,lastName,gender,height,birth,picture}= this.props
        return (
            <div style = {styleId}> 
              <img src={picture} alt="{picture}" width = "120" height = "120"/>
                <div style = {styleText}>
                    <h3>First name: {firstName}</h3>
                    <h3>Last name: {lastName}</h3>
                    <h3>Gender: {gender}</h3>
                    <h3>Height: {height} cm</h3>
                    <h3>Birth: {birth.toDateString()}</h3>
               </div>
            </div>
        );
    }
}

export default IdCard;