import React, { useRef } from 'react';

import moi from '../../assets/moi.jpg';
import UseElementOnScreen from '../hooks/UseElementOnScreen';

const AboutMe = () => {
  const textRef = useRef<HTMLDivElement>(null);
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

  return (
    <div>
      <div className="aboutMe__container">
        <h2 className="aboutMe__container__title">ABOUT ME</h2>
        <div className="aboutMe__infos">
          <div className="aboutMe__infos__presentation" ref={textRef}>
            {presentation.map((letter, index) => (
              <p key={index}>
                {letter.split('').map((el, index) => (
                  <span
                    style={{
                      opacity: isVisible ? '1' : '0',
                      transitionDelay: isVisible ? `${index / 50}s` : '',
                    }}
                    key={index}>
                    {el}
                  </span>
                ))}
              </p>
            ))}
          </div>
          <img className="aboutMe__infos__picture" alt="" src={moi} />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
