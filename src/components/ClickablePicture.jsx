import React, { Component } from 'react';

 const buttonStyle = {
     height:500,
     width:600,
     padding:50,
     backgroundSize :"cover"
    
 }
 
class ClickablePicture extends Component{
    
    state = {
        img:`url("/img/persons/maxence.png")`,
        imgClicked: `url("/img/persons/maxence-glasses.png")`
    }

      changeImg = (btn) => {
        this.setState ({img: btn = "clicked" ? this.state.imgClicked : null});
        this.setState ({imgClicked: btn = "unclicked" ? this.state.img : null});
    }

   render(){
    const {img,imgClicked} = this.state;
 
        return (
            <div>
                <button style = {{...buttonStyle, backgroundImage: img === img ? img : imgClicked}} onClick = {() => this.changeImg("clicked")}></button>
                
            </div>
        );
    }
}


export default ClickablePicture;