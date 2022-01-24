import React from 'react';

// import LiveUp from '../../assets/LiveUp1.jpg';
import Polaroid from './Polaroid';

const Portfolio = () => {
  //Créer un tableau d'object exemple:

  //Tu peut également l'importer depuis un autre fichier

  //   const projects = [
  //     {
  //       idProject: 1,
  //       title: 'projet 1',
  //       image: LiveUp,
  //     },
  //     {
  //       idProject: 2,
  //       title: 'projet 2',
  //       image: LiveUp,
  //     },
  //     {
  //       idProject: 3,
  //       title: 'projet 3',
  //       image: LiveUp,
  //     },
  //     {
  //       idProject: 4,
  //       title: 'projet 4',
  //       image: LiveUp,
  //     },
  //   ];
  return (
    <div className="portfolio">
      <div className="portfolio__title">
        <p className="portfolio__title__p">PORTFOLIO</p>
      </div>
      <div className="portfolio__polaroids">
        <Polaroid />
        <Polaroid />
        <Polaroid />
        <Polaroid />
        {/* Fait un map de ton tableau */}
        {/* {projects.map((project) => (
          <Polaroid key={project.idProject} project={project} />
        ))} */}
      </div>
    </div>
  );
};

export default Portfolio;
