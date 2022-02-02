import React, { useRef } from 'react';

import UseElementOnScreen from '../hooks/UseElementOnScreen';
import Logo from './Logo';

const techList = [
  { name: 'CSS', icon: 'logos-css' },
  { name: 'HTML', icon: 'logos-html' },
  { name: 'Javascript', icon: 'logos-javascript' },
  { name: 'React', icon: 'logos-react' },
  { name: 'NodeJs', icon: 'logos-nodejs' },
  { name: 'TS', icon: 'logos-typescript' },
  { name: 'Github', icon: 'logos-github' },
  { name: 'Sass', icon: 'logos-sass' },
  { name: 'Postman', icon: 'logos-postman' },
  { name: 'Figma', icon: 'logos-figma' },
  { name: 'mysql', icon: 'logos-mysql' },
];

const Tech = () => {
  const titleRef = useRef<HTMLDivElement>(null);

  const isVisible: boolean = UseElementOnScreen(
    {
      rootElement: undefined,
      rootMargin: '0px',
      threshold: 0.8,
    },
    titleRef,
  );
  const titleName: string = 'MY TECH';

  const movingLetters: string[] = ['T', 'E', 'H'];

  return (
    <>
      <div className="tech__container">
        <p className="tech__container__name" ref={titleRef}>
          {titleName.split(' ').map((word, index) => (
            <div className="tech__container__name__word" key={index}>
              {word.split('').map((letter, index) => (
                <span
                  className="tech__container__name__word--letter"
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
        <div className="tech__container__icons">
          <ul className="tech__container__icons__list">
            {techList.map((tech, index) => (
              <li key={index}>
                <Logo name={tech.name} icon={tech.icon} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Tech;
