import React, { Component } from 'react';

class IdCard extends Component {
    render() {
        //destructuring
        //render only gives strings, don let to render an object, so we must convert everything in strings
        const{firstName,lastName,gender,height,birth,picture}= this.props
        return (
            <div>
            <h1>Name: {firstName} {lastName}</h1>
            <h1>Gender :{gender}</h1>
            <h1>Height: {height} cm</h1>
            <h1>Birthday: {birth.toDateString()}</h1>
            <img src={picture} alt="{picture}"/>
            </div>
        );
    }
}

export default IdCard;