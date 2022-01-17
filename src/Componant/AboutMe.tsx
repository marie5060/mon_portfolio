import React from 'react';
import moi from '../../assets/moi.jpg';

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
      <div className="aboutMe__container">
        <h2 className="aboutMe__container__title">ABOUT ME</h2>
        <div className="aboutMe__infos">
          <p className="aboutMe__infos__presentation">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dolor totam
            deserunt quasi ex odio iste atque inventore sed nulla! Est fugit rem, magni
            quae iusto porro eum vitae modi!
          </p>
          <img className="aboutMe__infos__picture" alt="" src={moi} />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
