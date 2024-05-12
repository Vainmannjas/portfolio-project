import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import search from '../../../../../public/images/navigation-icons/search.svg';
import person from '../../../../../public/images/navigation-icons/person.svg';
import favorite from '../../../../../public/images/navigation-icons/favorite.svg';
import bag from '../../../../../public/images/navigation-icons/bag.svg';
import './Links.scss';
import { useFavoriteContext } from "../../../../contexts/FavoriteContext";
import { useCartContext } from "../../../../contexts/CartContext";

interface LinksProps {
  handleSearchToggle: () => void
  handleToggleSidebar: () => void
}

const Links: FC<LinksProps> = ({ handleSearchToggle, handleToggleSidebar}) => {
  const { favorites } = useFavoriteContext();
  const { cart } = useCartContext();

  return (
    <div className="header__links links">
        <ul className="links__list">
          <li className="links-item">
            <NavLink to="/search">
              <button className="links__link" onClick={handleSearchToggle}>
                <img src={search} alt="" className="links__img"/>
              </button>
            </NavLink>
          </li>
          <li className="links__item">
            <NavLink to="signin" className="links__link">
              <img src={person} alt="" className="links__img"/>
            </NavLink>
          </li>
          <li className="links__item">
            <NavLink to="/favorite" className="links__link">
              <img src={favorite} alt="" className="links__img"/>
              <div className="links__quantity">{ favorites.length }</div>
            </NavLink>
          </li>
          <li className="links__item">
            <button className="links__link" onClick={handleToggleSidebar}>
              <img src={bag} alt="" className="links__img"/>
              <div className="links__quantity">{ cart.length }</div>
            </button>
          </li>
        </ul>
    </div>
  );
};

export default Links;
