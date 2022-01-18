import React, { useEffect, useState } from 'react';

import AboutMe from './Componant/AboutMe';
import Contact from './Componant/Contact';
import Home from './Componant/Home';
import Portfolio from './Componant/Portfolio';

function App() {
  const [heightScreen, setHeightScreen] = useState(0);
  const [countSection, setCountSection] = useState(0);

  useEffect(() => {
    setHeightScreen(window.innerHeight);
    window.addEventListener('resize', () => {
      setHeightScreen(window.innerHeight);
    });
  }, []);

  const scroll = (value: number) => {
    if (value > 0) {
      setCountSection(1);
    } else if (value < 0) {
      setCountSection(countSection - 1);
    }
  };

  return (
    <div
      className="app"
      style={{
        height: `${heightScreen}px`,
      }}>
      <Home heightScreen={heightScreen} countSection={countSection} scroll={scroll} />
      <Contact heightScreen={heightScreen} countSection={countSection} scroll={scroll} />
      <AboutMe heightScreen={heightScreen} countSection={countSection} scroll={scroll} />
      <Portfolio
        heightScreen={heightScreen}
        countSection={countSection}
        scroll={scroll}
      />
    </div>
  );
}

export default App;
