import React, { useRef } from 'react';

import UseElementOnScreen from '../hooks/UseElementOnScreen';

const Home = () => {
  const titleRef = useRef<HTMLHeadingElement>();
  const isVisible = UseElementOnScreen(
    {
      root: null,
      marginRoot: '0px',
      treshold: 0.8,
    },
    titleRef,
  );
  console.log(isVisible);

  const titleName = 'MARIE EMELINE LAINE';
  const titleDev = 'DEVELOPPEUSE WEB';
  const vowel = ['A', 'E', 'I', 'O', 'U'];

  return (
    <div>
      <div className="home__title">
        <div className="home__title__name" ref={titleRef}>
          {titleName.split(' ').map((word, index) => (
            <p className="home__title__name__word" key={index}>
              {word.split('').map((letter, index) => (
                <span
                  className="home__title__name__word--letter"
                  key={index}
                  style={{
                    transform:
                      !isVisible && vowel.includes(letter)
                        ? `translateY(-20px)`
                        : `translateY(0)`,
                    transitionDelay: `${index / 10}s`,
                    opacity: !isVisible ? '0' : '1',
                  }}>
                  {letter}
                </span>
              ))}
            </p>
          ))}
        </div>
        <div className="home__title__dev">
          <h1
            style={{
              opacity: isVisible ? '1' : '0',
              transform: isVisible ? `translateY(0)` : `translateY(40px)`,
            }}>
            {titleDev}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
