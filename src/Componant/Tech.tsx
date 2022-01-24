import React, { useRef } from 'react';
import UseElementOnScreen from '../hooks/UseElementOnScreen';

// import apirest from '../../assets/api-rest.png';
// import express from '../../assets/Expressjs.svg';
// import figma from '../../assets/figma.png';
// import git from '../../assets/git.png';
// import github from '../../assets/github.png';
// import javascript from '../../assets/javascript.png';
// import mysql from '../../assets/mysql.png';
// import nodjs from '../../assets/nodjs.png';
// import react from '../../assets/react.png';
// import sass from '../../assets/sass.png';
// import typescript from '../../assets/typescript.png';

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
        {/* <div className="tech__container">
        //   <div className="tech__container__1">
        //     <img src={apirest} alt="apirest" />
        //     <img src={express} alt="express" />
        //     <img src={figma} alt="figma" />
        //   </div>
        //   <div className="tech__container__2">
        //     <img src={git} alt="git" />
        //     <img src={github} alt="github" />
        //     <img src={javascript} alt="javascript" />
        //     <img src={mysql} alt="mysql" />
        //   </div>
        //   <div className="tech__container__3">
        //     <img src={nodjs} alt="nodjs" />
        //     <img src={react} alt="react" />
        //     <img src={sass} alt="sass" />
        //     <img src={typescript} alt="typescript" />
        //   </div>
        // </div> */}
      </div>
    </>
  );
};

export default Tech;
