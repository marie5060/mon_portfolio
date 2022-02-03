import React, { useRef } from 'react';

import { ReactComponent as LogoMail } from '../../assets/email.svg';
import { ReactComponent as LogoLinkedin } from '../../assets/linkedin2.svg';
import { ReactComponent as LogoGithub } from '../../assets/LogoGithub.svg';
import CV from '../../assets/Marie_Emeline_LAINE_ CV.pdf';
import { ReactComponent as LogoResume } from '../../assets/resume.svg';
import UseElementOnScreen from '../hooks/UseElementOnScreen';

const Contact = () => {
  const titleRef = useRef<HTMLDivElement>(null);

  const isVisible: boolean = UseElementOnScreen(
    {
      rootElement: undefined,
      rootMargin: '0px',
      threshold: 0.8,
    },
    titleRef,
  );
  const titleName: string = 'CONTACT ME';
  const movingLetters: string[] = ['C', 'N', 'A', 'T', 'E'];

  return (
    <>
      <div className="contact__name" ref={titleRef}>
        {titleName.split(' ').map((word, index) => (
          <div className="contact__name__word" key={index}>
            {word.split('').map((letter, index) => (
              <span
                className="contact__name__word--letter"
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

      <div className="contact__infos">
        <a href={CV} download>
          <LogoResume className="contact__infos__icon" />
        </a>

        <a href="mailto:marie.emlaine@gmail.com">
          <LogoMail className="contact__infos__icon" />
        </a>
        <a href="https://github.com/marie5060" target="_blank" rel="noreferrer">
          <LogoGithub className="contact__infos__icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/marie-lain%C3%A9-a12924222/"
          target="_blank"
          rel="noreferrer">
          <LogoLinkedin className="contact__infos__icon" />
        </a>
      </div>
    </>
  );
};

export default Contact;
