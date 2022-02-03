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

  const presentation: string = `En reconversion professionnelle, j'ai suivi une formation de développeuse Web et Web Mobile au sein de la Wild Code School d'Anglet.Enthousiaste, volontaire et aimant le travail d'équipe, je suis à la recherche d'un stage à compter du 14 février 2022, afin de m'épanouir et d'avancer main dans la main avec ma future entreprise.`;
  const character: string[] = ['!', ',', '.', '?'];
  const titleName: string = 'ABOUT ME';
  const movingLetters: string[] = ['A', 'O', 'B', 'M'];

  useEffect(() => {
    const timeout = setTimeout(() => {
      isVisible && setLaunchCount(true);
    }, 1200);
    if (lauchCount && isVisible) {
      const interval = setInterval(
        () => {
          count < presentation.length - 1 && setCount(count + 1);
        },
        character.includes(presentation[count]) ? 500 : 20,
      );
      setText(
        presentation[count] === '.'
          ? text + presentation[count] + '\n'
          : text + presentation[count],
      );
      return () => {
        clearInterval(interval);
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
      <div className="aboutMe__name">
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
      </div>

      <div className="aboutMe__infos">
        <div className="aboutMe__infos__presentation" ref={textRef}>
          <div className="aboutMe__infos__presentation__text">
            {text.split('\n').map((sentence, index) => (
              <span key={index}>
                {sentence}
                {sentence.substring(sentence.length - 1) === '.' && <br />}
              </span>
            ))}
            <span className="aboutMe__infos__presentation__text--cursor">|</span>
          </div>
        </div>

        <img className="aboutMe__infos__picture" alt="" src={aboutMe} />
      </div>
    </>
  );
};

export default AboutMe;
