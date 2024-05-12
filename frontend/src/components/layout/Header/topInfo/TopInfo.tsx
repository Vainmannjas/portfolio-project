import React, { FC } from "react";
import './TopInfo.scss';

interface TopInfoProps {
  handleSearchToggle: () => void;
}

const TopInfo: FC<TopInfoProps> = ({ handleSearchToggle }) => {
  return (
    <section className="top-info" onClick={handleSearchToggle}>
      <p className="top-info__text">Enjoy Free Shipping On All Orders</p>
    </section>
  );
};

export default TopInfo;
