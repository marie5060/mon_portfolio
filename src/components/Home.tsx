import React, { useEffect, useRef } from 'react';

import UseElementOnScreen from '../hooks/UseElementOnScreen';

interface Props {
  setFirstPageVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const Home: React.FC<Props> = ({ setFirstPageVisible }) => {
  const titleRef = useRef<HTMLDivElement>(null);
  const isVisible: boolean = UseElementOnScreen(
    {
      rootElement: undefined,
      rootMargin: '0px',
      threshold: 0.8,
    },
    titleRef,
  );

  useEffect(() => {
    setFirstPageVisible(isVisible);
  }, [isVisible]);

  const titleName: string = 'MARIE EMELINE LAINE';
  const titleDev: string = 'DEVELOPPEUSE WEB';
  const movingLetters: string[] = ['A', 'E', 'I', 'O', 'U'];

  return (
    <>
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
                      !isVisible && movingLetters.includes(letter)
                        ? `translateY(-20px)`
                        : `translateY(0)`,
                    transitionDelay: isVisible ? `${index / 10}s` : '',
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
    </>
  );
};

export default Home;
