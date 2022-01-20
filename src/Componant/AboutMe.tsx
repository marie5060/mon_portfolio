import React, { useEffect, useRef, useState } from 'react';

import moi from '../../assets/moi.jpg';
import UseElementOnScreen from '../hooks/UseElementOnScreen';

const AboutMe = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
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

  useEffect(() => {
    if (isVisible) {
      const test = setInterval(
        () => {
          count < presentation[0].length - 1 && setCount(count + 1);
        },
        character.includes(presentation[0][count]) ? 500 : 20,
      );
      setText(text + presentation[0][count]);
      return () => {
        clearInterval(test);
      };
    } else {
      setCount(0);
      setText('');
    }
  }, [count, isVisible]);

  return (
    <div>
      <div className="aboutMe__container">
        <h2 className="aboutMe__container__title">ABOUT ME</h2>
        <div className="aboutMe__infos">
          <div className="aboutMe__infos__presentation" ref={textRef}>
            <p>{text}</p>
          </div>
          <img className="aboutMe__infos__picture" alt="" src={moi} />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
