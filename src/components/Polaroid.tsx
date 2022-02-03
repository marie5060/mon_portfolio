import React from 'react';

import IProject from '../interfaces/IProject';

type Props = {
  project: IProject;
};
// Importe tes props içi
// const Polaroid = ({ project }: { project: object }) => {
const Polaroid: React.FC<Props> = ({ project }) => {
  return (
    <div className="polaroid">
      <div className="polaroid__photo">
        <img src={project.image} alt={project.title} />
        {/* Distribue les informations */}
        {/* <img src={project.image} alt={project.title} />  */}
      </div>
      <div className="polaroid__text">
        {/* distribue les informations */}
        {/* <p>{project.title}</p> */}
        <p>{project.title}</p>
      </div>
    </div>
  );
};

export default Polaroid;
