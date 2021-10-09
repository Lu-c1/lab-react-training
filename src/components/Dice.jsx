/* import React, { Component } from 'react';

const styleArray = {
    width:100,
    height:100
}

class Dice extends Component {

    let imagesArray = new Array ();
    
    imagesArray[0]=new Image ();
    imagesArray[0].src = "/img/dice1.png";
    
    imagesArray[1]=new Image ();
    imagesArray[1].src = "/img/dice2.png";

    imagesArray[2]=new Image ();
    imagesArray[2].src = "/img/dice3.png";

    imagesArray[3]=new Image ();
    imagesArray[3].src = "/img/dice4.png";

    imagesArray[4]=new Image ();
    imagesArray[4].src = "/img/dice5.png";

    imagesArray[5]=new Image ();
    imagesArray[5].src = "/img/dice6.png";

    const newArray = (images) => imagesArray.forEach ((image) => newArray.push());

    const randomPicture = imagesArray.forEach ((image) => (Math.floor(Math.Random ()) * 6 + 1));
        
    state = {
        img:randomPicture
    }
    diceFunction = (btn) => {
       this.setState({img: btn === "click" ? img === "/img/dice-empty.png":null}) 
       this.setState({img: btn === "unclick" ? img === "randomPicture":null})
    }

    render() 
        const {img} = this.props;
        return (

            <div>
                <button style= {{styleArray}} onClick = {() => this.diceFunction ("click")}></button>
                    
            </div>
        );
    }


export default Dice; */