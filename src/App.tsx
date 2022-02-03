import React, { ReactElement, useEffect, useState } from 'react';

import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Tech from './components/Tech';

type Section = {
  className: string;
  component: ReactElement;
  scrollNumber: number;
};

function App() {
  const [heightScreen, setHeightScreen] = useState<number>(0);
  const [scrollValue, setScrollValue] = useState<number>(0);
  const [activeScroll, setActiveScroll] = useState<boolean>(true);
  const [firstPageVisible, setFirstPageVisible] = useState<boolean>(true);

  useEffect(() => {
    setHeightScreen(window.innerHeight);
    window.addEventListener('resize', () => {
      setHeightScreen(window.innerHeight);
    });
  }, []);

  const sections: Section[] = [
    {
      className: 'home',
      component: <Home setFirstPageVisible={setFirstPageVisible} />,
      scrollNumber: 0,
    },
    { className: 'aboutMe', component: <AboutMe />, scrollNumber: 1 },
    { className: 'portfolio', component: <Portfolio />, scrollNumber: 2 },
    { className: 'tech', component: <Tech />, scrollNumber: 3 },
    { className: 'contact', component: <Contact />, scrollNumber: 4 },
  ];
  const scroll = (valueScroll: number, index: number) => {
    if (scrollValue >= 0) {
      if (valueScroll > 0 && index < sections.length - 1) {
        setScrollValue(index + 1);
        setActiveScroll(false);
      } else {
        if (scrollValue > 0) {
          setScrollValue(index - 1);
          setActiveScroll(false);
        }
      }
      setTimeout(() => {
        setActiveScroll(true);
      }, 1000);
    }
  };
  return (
    <div
      className="app"
      style={{
        height: `${heightScreen}px`,
      }}>
      {scrollValue === 0 && firstPageVisible && (
        <div className="app__menu">
          <div onClick={() => setScrollValue(1)} role="presentation">
            About me
          </div>
          <div onClick={() => setScrollValue(2)} role="presentation">
            Portfolio
          </div>
          <div onClick={() => setScrollValue(3)} role="presentation">
            Tech
          </div>
          <div onClick={() => setScrollValue(4)} role="presentation">
            Contact
          </div>
        </div>
      )}
      {scrollValue > 0 && (
        <div className="app__menu--right">
          {sections.map((section, index) => (
            <div
              key={index}
              onClick={() => setScrollValue(section.scrollNumber)}
              role="presentation"
              className={`app__menu--right__ronron app__menu--right__ronron${
                section.scrollNumber === scrollValue
                  ? '--selected'
                  : scrollValue % 2
                  ? '--darker'
                  : '--light'
              }`}></div>
          ))}
        </div>
      )}

      {sections.map((section, index) => (
        <div
          key={index}
          className={section.className}
          style={{
            height: `${heightScreen}px`,
            transform: `translateY(-${heightScreen * scrollValue}px)`,
          }}
          onWheel={(e) => activeScroll && scroll(e.deltaY, index)}>
          {section.component}
        </div>
      ))}
    </div>
  );
}

export default App;
