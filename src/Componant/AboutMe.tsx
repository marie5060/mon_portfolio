import React from 'react';

const AboutMe = ({
  heightScreen,
  countSection,
  scroll,
}: {
  heightScreen: number;
  countSection: number;
  scroll: Function;
}) => {
  //   const [heightScreen, setHeightScreen] = useState(0);

  //   useEffect(() => {
  //     setHeightScreen(window.innerHeight);
  //     window.addEventListener('resize', () => {
  //       setHeightScreen(window.innerHeight);
  //     });
  //   }, []);

  return (
    <div
      className="aboutMe"
      style={{
        height: `${heightScreen}px`,
        transform: `translateY(-${heightScreen * countSection}px)`,
      }}
      onWheel={(e) => scroll(e.deltaY)}>
      <h2>About Me</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dolor totam
        deserunt quasi ex odio iste atque inventore sed nulla! Est fugit rem, magni quae
        iusto porro eum vitae modi!
      </p>
    </div>
  );
};

export default AboutMe;
