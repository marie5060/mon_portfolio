import React, { useEffect, useRef, useState } from 'react';

import aboutMe from '../../assets/aboutMe.jpg';
import UseElementOnScreen from '../hooks/UseElementOnScreen';
// import IProject from '../interfaces/IProject';

const AboutMe = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const [lauchCount, setLaunchCount] = useState(false);
  const [text, setText] = useState('');

  const isVisible = UseElementOnScreen(
    {
      root: null,
      marginRoot: '0px',
      treshold: 0.8,
    },
    textRef,
  );

  const presentation = [
    `En reconversion professionelle, et après une formation de developpement web et web mobile au sein de la Wild Code School d'Anglet, me voilà à prendre mon envol. De nature enthousiaste, volontaire pour appronfondir mes connaissances et aimant le travail d'équipe, je suis à la recherche d'un stage d'une durée de 4 a 6 mois à compter du 14 février 2022, pouvant me permettre de m'épanouir et d'avancer main dans la main avec ma future entreprise.`,
  ];

  const character = ['!', ',', '.', '?'];
  const titleName = 'ABOUT ME';
  const vowel = ['A', 'O', 'B', 'M'];

  // const projects: IProject[] = [
  //   {
  //     idProject: 1,
  //     title: 'en recherche de stage',
  //     image: aboutMe,
  //   },
  // ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      isVisible && setLaunchCount(true);
    }, 1200);
    if (lauchCount && isVisible) {
      const test = setInterval(
        () => {
          count < presentation[0].length - 1 && setCount(count + 1);
        },
        character.includes(presentation[0][count]) ? 500 : 20,
      );
      setText(text + presentation[0][count]);
      return () => {
        clearInterval(test);
        clearTimeout(timeout);
      };
    } else {
      setCount(0);
      setText('');
      setLaunchCount(false);
    }
  }, [count, isVisible, lauchCount]);

  return (
    <>
      <div className="aboutMe__container">
        <p className="aboutMe__container__title">
          {titleName.split(' ').map((word, index) => (
            <div className="aboutMe__container__title__name" key={index}>
              {word.split('').map((letter, index) => (
                <span
                  className="aboutMe__container__title__name--letter"
                  key={index}
                  style={{
                    transform:
                      !isVisible && vowel.includes(letter)
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
        </p>

        <div className="aboutMe__infos">
          <div className="aboutMe__infos__presentation" ref={textRef}>
            <p className="aboutMe__infos__presentation__text">
              {text}
              <span className="aboutMe__infos__presentation__text--bar">|</span>
            </p>
          </div>

          <img className="aboutMe__infos__picture" alt="" src={aboutMe} />
        </div>
      </div>
    </>
  );
};

export default AboutMe;
