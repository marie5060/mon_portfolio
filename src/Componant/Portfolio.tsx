import React from 'react';

import Polaroid from './Polaroid';

const Portfolio = () => {
  return (
    <div className="portfolio">
      <div className="portfolio__polaroids">
        <Polaroid />
        <Polaroid />
        <Polaroid />
      </div>
      <div className="portfolio__title">
        <h2 className="portfolio__title__project">PORTFOLIO</h2>
      </div>
    </div>
  );
};

export default Portfolio;
