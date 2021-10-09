import React, { Component } from 'react';

const likebtnStyle  = {

    padding:"10px",
    width:"90px",
    color:"white",
    margin:"10px"
}

class LikeButton extends Component {
    
    state ={
        number:0,
        numberTwo:0
        }
    changeNumber = (btn)=>{
        console.log ("is clicking?")
    
    this.setState({number : btn ==="increase" ? this.state.number + 1 : null})
    this.setState ({numberTwo : btn === "decrease" ? this.state.numberTwo -1 : null})

}
    render() {
        const {number, numberTwo}=this.state
        
        return (

            <div>
                <button style = {{...likebtnStyle, backgroundColor : number > 5 ? "orange":"blue"}} onClick = {()=> this.changeNumber("increase")}>{number} Likes</button>
                <button style = {{...likebtnStyle, backgroundColor: numberTwo < -5 ? "purple": "blue"}} onClick = {() => this.changeNumber ("decrease")}>{numberTwo} Likes</button>
             
            </div>
            
        );
    }
}

export default LikeButton;
