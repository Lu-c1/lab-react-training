import React, { Component } from 'react';


     
const styleCredit = {
    height:200,
    width:300,
    border:" 3px solid grey",
    margin: 5,
    borderRadius:10

    
   
}  
class CreditCard extends Component {
    render() {
    const {type,number, expirationMonth, expirationYear, bank, owner}=this.props;
    
     return (
        <div  style = {{...styleCredit, backgroundColor: bank === "Santander" ?  "#BEBEBE": bank === "Deutsche Bank" ?  "#20B2AA":  "#2271b3", color: bank === "Santander" ? "black":"white"}}>
            <p>{type}</p>
            <p>**** **** *** {number.slice(12,16)}</p>
            <p>Expires 0{expirationMonth}/{expirationYear}       {bank}</p>
            <p>{owner}</p>
            
         </div>

        );
    }
}
// ver como poner a cada una un backgroundColor diferente
export default CreditCard;