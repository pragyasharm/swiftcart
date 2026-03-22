import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { totalQuantitySelector } from "../feature/cartSelectors";

const Header = () => {
  const navigate = useNavigate();
  const totalQuantity = useSelector(totalQuantitySelector)
  return (
    <header className="d-flex px-4 py-3 position-sticky top-0 bg-white shadow-sm z-3">
      <img className="mx-4" style={{ width: "100px" }} src={logo} alt="logo" />
      <nav className="me-auto d-flex align-items-center gap-3">
        <NavLink to="/" className="nav-link-custom">
          Home
        </NavLink>
        <NavLink to="/about" className="nav-link-custom">
          About
        </NavLink>
      </nav>
      <div className="position-relative" onClick={() => navigate("/cart")}>
        <button className="btn bg-white rounded-circle border">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="blue"
            className="bi bi-cart"
            viewBox="0 0 16 16"
          >
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
          </svg>
        </button>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {totalQuantity}
        </span>
      </div>
    </header>
  );
};

export default Header;
