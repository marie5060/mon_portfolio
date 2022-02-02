import React, { useEffect, useState } from 'react';

import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Tech from './components/Tech';

type Section = {
  className: string;
  component: React.ComponentType;
};

function App() {
  const [heightScreen, setHeightScreen] = useState<number>(0);
  const [scrollValue, setScrollValue] = useState<number>(0);
  const [activeScroll, setActiveScroll] = useState<boolean>(true);

  useEffect(() => {
    setHeightScreen(window.innerHeight);
    window.addEventListener('resize', () => {
      setHeightScreen(window.innerHeight);
    });
  }, []);

  const sections: Section[] = [
    { className: 'home', component: Home },
    { className: 'aboutMe', component: AboutMe },
    { className: 'portfolio', component: Portfolio },
    { className: 'tech', component: Tech },
    { className: 'contact', component: Contact },
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
      {sections.map((section, index) => (
        <div
          key={index}
          className={section.className}
          style={{
            height: `${heightScreen}px`,
            transform: `translateY(-${heightScreen * scrollValue}px)`,
          }}
          onWheel={(e) => activeScroll && scroll(e.deltaY, index)}>
          {<section.component />}
        </div>
      ))}
    </div>
  );
}

export default App;
