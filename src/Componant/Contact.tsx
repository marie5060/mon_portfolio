import React from 'react';

const Contact = ({
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
      className="contact"
      style={{
        height: `${heightScreen}px`,
        transform: `translateY(-${heightScreen * countSection}px)`,
      }}
      onWheel={(e) => scroll(e.deltaY)}>
      <div className="contact__header">
        <h2 className="contact__header__title">CONTACT ME</h2>
      </div>
      <div className="contact__container">
        <form className="contact__container__form">
          <input placeholder="lastname"></input>
          <input placeholder="name"></input>
          <input placeholder="email"></input>
          <textarea rows={15} cols={33} placeholder="votre demande ici"></textarea>
          <button>Envoyer</button>
        </form>
        <div className="contact__container__infos">
          <p>Mon adresse mail</p>
          <p>mon telephone</p>
          <div className="contact__container__infos__logo">
            <p>github</p>
            <p>linkdn</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
