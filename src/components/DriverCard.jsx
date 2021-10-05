import React, { Component } from 'react';

class DriverCard extends Component {
  render() {
    const { name, rating, img, car } = this.props;
    return (
      <div>
        <p>{name}</p>
        <p>{rating}</p>
        <img src="" alt="" />
        <p>{car}</p>
      </div>
    );
  }
}

export default DriverCard;
