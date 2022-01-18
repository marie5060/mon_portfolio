import React from 'react';
import LiveUp1 from '../../assets/LiveUp1.jpg';

const Polaroid = () => {
  return (
    <div className="polaroid">
      <div className="polaroid__photo">
        <img src={LiveUp1} alt="test" />
      </div>
      <div className="polaroid__text">
        <p>LIVE UP </p>
      </div>
    </div>
  );
};

export default Polaroid;
