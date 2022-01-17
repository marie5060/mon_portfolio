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
      <form>
        <input placeholder="lastname"></input>
        <input placeholder="name"></input>
        <input placeholder="email"></input>
        <input placeholder="texaera"></input>
      </form>
    </div>
  );
};

export default Contact;
