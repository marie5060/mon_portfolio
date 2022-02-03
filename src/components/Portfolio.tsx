import React, { useRef } from 'react';

import UseElementOnScreen from '../hooks/UseElementOnScreen';

const Portfolio = () => {
  // const projects: IProject[] = [
  //   {
  //     idProject: 1,
  //     title: 'Crash Blind Test',
  //     image: blind,
  //   },
  //   {
  //     idProject: 2,
  //     title: 'Les Femmes Prennent Le Large',
  //     image: lfpll,
  //   },
  //   {
  //     idProject: 3,
  //     title: 'Hackathon LiveUp',
  //     image: LiveUp,
  //   },
  //   {
  //     idProject: 4,
  //     title: 'Hackathon ManoMano',
  //     image: manomano,
  //   },
  // ];
  const titleRef = useRef<HTMLDivElement>(null);

  const isVisible: boolean = UseElementOnScreen(
    {
      rootElement: undefined,
      rootMargin: '0px',
      threshold: 0.8,
    },
    titleRef,
  );
  const titleName: string = 'PORTFOLIO';
  const movingLetters: string[] = ['P', 'R', 'F', 'O'];

  return (
    <>
      <div className="portfolio__name" ref={titleRef}>
        {titleName.split(' ').map((word, index) => (
          <div className="portfolio__name__word" key={index}>
            {word.split('').map((letter, index) => (
              <span
                className="portfolio__name__word--letter"
                key={index}
                style={{
                  transform:
                    !isVisible && movingLetters.includes(letter)
                      ? `translateY(-20px)`
                      : `translateY(0)`,
                  transitionDelay: isVisible ? `${index / 10}s` : '',
                  opacity: !isVisible ? '0' : '1',
                }}>
                {letter}
              </span>
            ))}
          </div>
        ))}
      </div>
      <div className="portfolio__polaroids">
        {/* Fait un map de ton tableau */}
        {/* {projects.map((project) => (
          <Polaroid key={project.idProject} project={project} />
        ))} */}
      </div>
    </>
  );
};

export default Portfolio;
