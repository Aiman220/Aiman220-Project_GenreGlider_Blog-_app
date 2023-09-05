import React from "react";
import classes from "./navbar.module.css";
import womanImg from "../../assets/woman.jpg";
import { useState } from "react";
import { logout } from "../../redux/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const [isScrolled, setIsScrolled] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [toggleMenu, setToggleMenu] = React.useState(false);
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };
  return (
    <div className={`${classes.container} ${isScrolled && classes.scrolled}`}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <Link to="/">
            <h2 className={classes.title}>GenreGlider</h2>
          </Link>
        </div>
        <div className={classes.center}>
          <ul className={classes.list}>
            <li className={classes.listItem}><a href='#'>Home</a></li>
            <li className={classes.listItem}><a href='#Footer'>About</a></li>
            <li className={classes.listItem}><a href='#Categories'>Categories</a></li>
            <li className={classes.listItem}><a href='#Footer'>Contact</a></li>
          </ul>
        </div>
        <p className={classes.username}>{user.username}</p>
        <div className={classes.right}>
        
          <img
            onClick={() => setShowModal((prev) => !prev)}
            src={womanImg}
            className={classes.img}
            alt="a"
          />
          {showModal && (
            <div className={classes.modal}>
              <Link to="/create">Create</Link>
              
              <span className={classes.logout} onClick={handleLogout}> Logout</span>
            </div>
          )}

        <div className={classes.app__navbar_smallscreen}>
        <GiHamburgerMenu fontSize={27} onClick={() => setToggleMenu(true)} className= {classes.overlay__open}  />
        {toggleMenu && (
          <div className= {classes.smallscreen_overlay} >
            <GiHamburgerMenu fontSize={27} className= {classes.overlay__close} onClick={() => setToggleMenu(false)} />
            <ul className= {classes.smallscreen_links}>
              <li><a href="#/" onClick={() => setToggleMenu(false)}>Home</a></li>
              <li><a href="#Footer" onClick={() => setToggleMenu(false)}>About</a></li>
              <li><a href="#Categories" onClick={() => setToggleMenu(false)}>Categories</a></li>
              <li><a href="#Footer" onClick={() => setToggleMenu(false)}>Contact</a></li>
            </ul>
          </div>
        )}
      </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
