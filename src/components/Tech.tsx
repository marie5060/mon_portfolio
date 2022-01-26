import React, { useRef } from 'react';

import { ReactComponent as LogoExpressjs } from '../../assets/LogoExpressjs.svg';
import { ReactComponent as LogoFigma } from '../../assets/LogoFigma.svg';
import { ReactComponent as LogoGit } from '../../assets/LogoGit.svg';
import { ReactComponent as LogoGithub } from '../../assets/LogoGithub.svg';
import { ReactComponent as LogoMySql } from '../../assets/LogoMySql.svg';
import { ReactComponent as LogoNodeJs } from '../../assets/LogoNodeJs.svg';
import { ReactComponent as LogoPostman } from '../../assets/LogoPostman.svg';
import { ReactComponent as LogoReact } from '../../assets/LogoReact.svg';
import { ReactComponent as LogoSass } from '../../assets/LogoSass.svg';
import { ReactComponent as LogoTypescript } from '../../assets/LogoTypescript.svg';
import UseElementOnScreen from '../hooks/UseElementOnScreen';

const Tech = () => {
  const titleRef = useRef<HTMLDivElement>(null);

  const isVisible = UseElementOnScreen(
    {
      root: null,
      marginRoot: '0px',
      treshold: 0.8,
    },
    titleRef,
  );
  const titleName = 'MY TECH';

  const vowel = ['M', 'C', 'E', 'Y', 'T'];

  return (
    <>
      <div className="tech__container">
        <p className="tech__container__title" ref={titleRef}>
          {titleName.split(' ').map((word, index) => (
            <div className="tech__container__title__name" key={index}>
              {word.split('').map((letter, index) => (
                <span
                  className="tech__container__title__name--letter"
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
      </div>
      <div className="tech__icons">
        <LogoFigma className="tech__icons__icon" />
        <LogoGit className="tech__icons__icon" />
        <LogoGithub className="tech__icons__icon" />
        <LogoMySql className="tech__icons__icon" />
        <LogoNodeJs className="tech__icons__icon" />
        <LogoReact className="tech__icons__icon" />
        <LogoSass className="tech__icons__icon" />
        <LogoTypescript className="tech__icons__icon" />
        <LogoExpressjs className="tech__icons__icon" />
        <LogoPostman className="tech__icons__icon" />
      </div>
    </>
  );
};

export default Tech;
