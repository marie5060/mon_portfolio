import React, { useEffect, useRef, useState } from 'react';

import aboutMe from '../../assets/aboutMe.jpg';
import UseElementOnScreen from '../hooks/UseElementOnScreen';
// import IProject from '../interfaces/IProject';

const AboutMe = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState<number>(0);
  const [lauchCount, setLaunchCount] = useState<boolean>(false);
  const [text, setText] = useState<string>('');

  const isVisible: boolean = UseElementOnScreen(
    {
      rootElement: undefined,
      rootMargin: '0px',
      threshold: 0.8,
    },
    textRef,
  );

  const presentation: string[] = [
    `En reconversion professionnelle, j'ai suivi une formation de développeuse Web et Web Mobile au sein de la Wild Code School d'Anglet. Enthousiaste, volontaire et aimant le travail d'équipe, je suis à la recherche d'un stage à compter du 14 février 2022, afin de m'épanouir et d'avancer main dans la main avec ma future entreprise.`,
  ];

  const character: string[] = ['!', ',', '.', '?'];
  const titleName: string = 'ABOUT ME';
  const movingLetters: string[] = ['A', 'O', 'B', 'M'];

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
      <p className="aboutMe__name">
        {titleName.split(' ').map((word, index) => (
          <div className="aboutMe__name__word" key={index}>
            {word.split('').map((letter, index) => (
              <span
                className="aboutMe__name__word--letter"
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
    </>
  );
};

export default AboutMe;
