import React, { useEffect, useRef, useState } from 'react';

import moi from '../../assets/moi.jpg';
import UseElementOnScreen from '../hooks/UseElementOnScreen';

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
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dolor totam
  deserunt quasi ex odio iste atque inventore sed nulla! Est fugit rem, magni
  quae iusto porro eum vitae modi!`,
  ];

  const character = ['!', ',', '.', '?'];
  const titleName = 'ABOUT ME';

  const vowel = ['A', 'O', 'B', 'M'];

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
          <img className="aboutMe__infos__picture" alt="" src={moi} />
        </div>
      </div>
    </>
  );
};

export default AboutMe;
