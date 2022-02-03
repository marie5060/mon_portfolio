import React, { useRef } from 'react';

// import music from '../../assets/music.svg';
// import tools from '../../assets/tools.svg';
// import surf from '../../assets/surf.svg';
// import game from '../../assets/game.svg';
import UseElementOnScreen from '../hooks/UseElementOnScreen';

const Portfolio = () => {
  // const projects: IProject[] = [
  //   {
  //     idProject: 1,
  //     title: 'Crash Blind Test',
  //     image: game,
  // text: Projet de Blind test musical avec la possibilité de jouer avec ses propres playlists grace à l'API Deezer.
  //   },
  //   {
  //     idProject: 2,
  //     title: 'Les Femmes Prennent Le Large',
  //     image: surf,
  //text: Premier projet avec un client, avec pour but de promouvoir les rencontres de surfeuses dans la pratique de leurs sport.
  //   },
  //   {
  //     idProject: 3,
  //     title: 'LiveUp',
  //     image: music,
  //text: Hackathon (32h) sur le thème de la musique. Nous avons effectué un site d'évènements musicaux.
  //   },
  //   {
  //     idProject: 4,
  //     title: 'ManoMano X Wild',
  //     image: tools,
  //text: Hackathon (48h) en partenariat avec ManoMano visant à améliorer l'experience utilisateur sur leur site.
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
    </>
  );
};

export default Portfolio;
