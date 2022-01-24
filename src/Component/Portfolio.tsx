import React from 'react';

import lfpll from '../../assets/lfpll2.png';
import manomano from '../../assets/manomano.jpg';
import blind from '../../assets/blind.png';
import LiveUp from '../../assets/LiveUp1.jpg';
import IProject from '../interfaces/IProject';
import Polaroid from './Polaroid';

const Portfolio = () => {
  const projects: IProject[] = [
    {
      idProject: 1,
      title: 'Crash Blind Test',
      image: blind,
    },
    {
      idProject: 2,
      title: 'Hackathon Live Up',
      image: LiveUp,
    },
    {
      idProject: 3,
      title: 'Hackathon ManoMano',
      image: manomano,
    },
    {
      idProject: 4,
      title: 'Les Femmes Prennent Le Large',
      image: lfpll,
    },
  ];
  return (
    <>
      <div className="portfolio__title">
        <p className="portfolio__title__p">PORTFOLIO</p>
      </div>
      <div className="portfolio__polaroids">
        {/* Fait un map de ton tableau */}
        {projects.map((project) => (
          <Polaroid key={project.idProject} project={project} />
        ))}
      </div>
    </>
  );
};

export default Portfolio;
