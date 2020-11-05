import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="https://png2.cleanpng.com/dy/cec5fac1c994d99559d8065c188cd2aa/L0KzQYm3VcAyN5NwiZH0aYP2gLBuTgR4cZRqRd54Z3Awe373jCAucqp1Rdd3dHX1hLLwjv1mdqUyjOY2YXzlhb60gB93baMyTdNuOHa6SbW7g8Y5QGMzSKc9NEO5R4e4VcI2OmI8Sao6M0G2PsH1h5==/kisspng-twice-logo-k-pop-jyp-entertainment-tt-album-cover-5ae8f79d4c6882.054436761525217181313.png"
          alt="amazon-logo"
        />
      </Link>

      <div className="header_search">
        <input className="header_searchInput" type="text">
          {/* Logo */}
        </input>
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header_option">
            <span className="header_optionLineOne">
              Hello {user ? user?.email : "Guest"}
            </span>
            <span className="header_optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to={"/Orders"}>
          <div className="header_option">
            <span className="header_optionLineOne">Returns</span>
            <span className="header_optionLineTwo">& Orders</span>
          </div>{" "}
        </Link>

        <div className="header_option">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header_optionBasket">
            <ShoppingBasketIcon />
            <span className="header_optionLineTwo header_basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
