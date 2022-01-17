import React from 'react';

const Home = ({
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
  //     //calcule la taille a louverture de la page
  //     setHeightScreen(window.innerHeight);
  //     // ecouteur d'evenelenrts, qd fenetre redimensionnée renvoie les valeurs qui changent
  //     window.addEventListener('resize', () => {
  //       setHeightScreen(window.innerHeight);
  //     });
  //   }, []);

  return (
    <div
      className="home"
      style={{
        height: `${heightScreen}px`,
        transform: `translateY(-${heightScreen * countSection}px)`,
      }}
      onWheel={(e) => scroll(e.deltaY)}>
      <div className="home__title">
        <h1 className="home__title__name">MARIE EMELINE LAINE</h1>
        <h2 className="home__title__dev">DEVELOPPEUSE WEB</h2>
      </div>
    </div>
  );
};

export default Home;
