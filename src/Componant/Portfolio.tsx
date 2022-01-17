import React from 'react';

const MyProjects = ({
  heightScreen,
  countSection,
  scroll,
}: {
  heightScreen: number;
  countSection: number;
  scroll: Function;
}) => {
  // const [heightScreen, setHeightScreen] = useState(0);

  // useEffect(() => {
  //   setHeightScreen(window.innerHeight);
  //   window.addEventListener('resize', () => {
  //     setHeightScreen(window.innerHeight);
  //   });
  // }, []);

  return (
    <div
      className="portfolio"
      style={{
        height: `${heightScreen}px`,
        transform: `translateY(-${heightScreen * countSection}px)`,
      }}
      onWheel={(e) => scroll(e.deltaY)}>
      <h2>My projects</h2>
      <div className="myProject__polaroids"></div>
    </div>
  );
};

export default MyProjects;
