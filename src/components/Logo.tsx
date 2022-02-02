import React, { FC } from 'react';

import Icons from '../../assets/logos.svg';

interface Props {
  name: string;
  icon: string;
}

const Logo: FC<Props> = ({ name, icon }) => {
  return (
    <>
      <svg className="style">
        <use xlinkHref={`${Icons}#${icon}`}></use>
        {name}
      </svg>
    </>
  );
};

export default Logo;
