import React, { Component } from 'react';


     
const styleCredit = {
    height:200,
    width:300,
    borderColor:"grey",
    border:"solid",
   
}  
class CreditCard extends Component {
    render() {
    const {type,number, expirationMonth, expirationYear, bank, owner, bgColor, color}=this.props;
    
     return (
            <div style = {styleCredit}>
            <p>{type}</p>
            <p>**** **** *** {number.slice(12,16)}</p>
            <p>Expires 0{expirationMonth}/{expirationYear}       {bank}</p>
            <p>{owner}</p>
            <p>{bgColor}</p>
            <p>{color}</p>
     
            </div>
        );
    }
}

export default CreditCard;