import React, { useEffect, useState } from 'react';

import AboutMe from './Componant/AboutMe';
import Contact from './Componant/Contact';
import Home from './Componant/Home';
import Portfolio from './Componant/Portfolio';
import Tech from './Componant/Tech';

function App() {
  const [heightScreen, setHeightScreen] = useState(0);
  const [scrollValue, setScrollValue] = useState(0);
  const [activeScroll, setActiveScroll] = useState(true);

  useEffect(() => {
    setHeightScreen(window.innerHeight);
    window.addEventListener('resize', () => {
      setHeightScreen(window.innerHeight);
    });
  }, []);

  const section = [
    { className: 'home', component: <Home /> },
    { className: 'aboutMe', component: <AboutMe /> },
    { className: 'portfolio', component: <Portfolio /> },
    { className: 'tech', component: <Tech /> },
    { className: 'contact', component: <Contact /> },
  ];
  const scroll = (valueScroll: number, index: number) => {
    if (scrollValue >= 0) {
      if (valueScroll > 0 && index < section.length - 1) {
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
      {section.map((el, index) => (
        <div
          key={index}
          className={el.className}
          style={{
            height: `${heightScreen}px`,
            transform: `translateY(-${heightScreen * scrollValue}px)`,
          }}
          onWheel={(e) => activeScroll && scroll(e.deltaY, index)}>
          {el.component}
        </div>
      ))}
    </div>
  );
}

export default App;
