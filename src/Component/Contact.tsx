import React, { useRef } from 'react';

import { ReactComponent as LogoMail } from '../../assets/email.svg';
import { ReactComponent as LogoLinkedin } from '../../assets/linkedin2.svg';
import { ReactComponent as LogoGithub } from '../../assets/LogoGithub.svg';
import CV from '../../assets/Marie_Emeline_LAINE_ CV.pdf';
import { ReactComponent as LogoResume } from '../../assets/resume.svg';
import UseElementOnScreen from '../hooks/UseElementOnScreen';

const Contact = () => {
  const titleRef = useRef<HTMLDivElement>(null);

  const isVisible = UseElementOnScreen(
    {
      root: null,
      marginRoot: '0px',
      treshold: 0.8,
    },
    titleRef,
  );
  const titleName = 'CONTACT ME';
  const vowel = ['C', 'N', 'A', 'T', 'E'];

  return (
    <>
      <div className="contact__container">
        <p className="contact__container__title" ref={titleRef}>
          {titleName.split(' ').map((word, index) => (
            <div className="contact__container__title__name" key={index}>
              {word.split('').map((letter, index) => (
                <span
                  className="contact__container__title__name--letter"
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
      <div className="contact__infos">
        <a href={CV} download="Marie_Emeline_LAINE_CV.pdf">
          <LogoResume className="contact__infos__icon" />
        </a>

        <a href="mailto:marie.emlaine@gmail.com">
          <LogoMail className="contact__infos__icon" />
        </a>
        <a href="https://github.com/marie5060">
          <LogoLinkedin className="contact__infos__icon" />
        </a>
        <a href="https://www.linkedin.com/in/marie-lain%C3%A9-a12924222/">
          <LogoGithub className="contact__infos__icon" />
        </a>
      </div>
    </>
  );
};

export default Contact;
