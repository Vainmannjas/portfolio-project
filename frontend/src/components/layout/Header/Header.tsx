import { FC, useState } from "react";
import './Header.scss';
import logo from '../../../../public/images/logo/Logo.svg';
import TopInfo from "./topInfo/TopInfo";
import Nav from "./nav/Nav";
import Links from "./links/Links";
import { NavLink } from "react-router-dom";
import SearchPanel from "./searchPanel/SearchPanel";

interface INavigation {
  handleToggleSidebar: () => void
}

const Navigation: FC<INavigation> = ({handleToggleSidebar}) => {
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  const handleSearchToggle = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <header className="header">
      <TopInfo handleSearchToggle={handleSearchToggle} />
      <div className="container">
        <div className="header__row">
          {/* <div className="header__content"> */}
            {isSearchOpen ? (
              <SearchPanel />
            ) : (
              <>
                <div className="header__logo logo">
                  <NavLink to="/" className="logo__link">
                    <img src={logo} alt="logo" className="logo__img" />
                  </NavLink>
                </div>
                <Nav />
                <Links 
                  handleSearchToggle={handleSearchToggle}
                  handleToggleSidebar={handleToggleSidebar}
                />
              </>
            )}
          {/* </div> */}
        </div>
      </div>
    </header>
  );
};

export default Navigation;
