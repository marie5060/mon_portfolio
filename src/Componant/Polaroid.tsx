import React from 'react';

import LiveUp1 from '../../assets/LiveUp1.jpg';

// Importe tes props içi
// const Polaroid = ({ project }: { project: object }) => {
const Polaroid = () => {
  return (
    <div className="polaroid">
      <div className="polaroid__photo">
        <img src={LiveUp1} alt="test" />
        {/* Distribue les informations */}
        {/* <img src={project.image} alt={project.title} />  */}
      </div>
      <div className="polaroid__text">
        {/* distribue les informations */}
        {/* <p>{project.title}</p> */}
        <p>Live Up</p>
      </div>
    </div>
  );
};

export default Polaroid;
