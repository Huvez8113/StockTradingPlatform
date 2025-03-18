import { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

function Menu() {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = (index) => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const handleLogout = async() => {
    try{
      await axios.post("http://localhost:8080/logout",{},{withCredentials : true});
      localStorage.removeItem("token");
      window.location.href = "http://localhost:5173/";
    } catch(err){
      console.error("Logout failed", err);
    }
  }

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <>
      <div className="menu-container">
        <img src="logo.png" style={{ width: "50px" }} />
        <div className="menus">
          <ul>
            <li>
              <NavLink
                style={{ textDecoration: "none" }}
                to="/"
                onClick={() => handleMenuClick(0)}
              >
                <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                  Dashboard
                </p>
              </NavLink>
            </li>
            <li>
              <NavLink
                style={{ textDecoration: "none" }}
                to="/orders"
                onClick={() => handleMenuClick(1)}
              >
                <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>Orders</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                style={{ textDecoration: "none" }}
                to="/holdings"
                onClick={() => handleMenuClick(2)}
              >
                <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>Holdings</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                style={{ textDecoration: "none" }}
                to="/positions"
                onClick={() => handleMenuClick(3)}
              >
                <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>Positions</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                style={{ textDecoration: "none" }}
                to="/funds"
                onClick={() => handleMenuClick(4)}
              >
                <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>Funds</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                style={{ textDecoration: "none" }}
                to="/apps"
                onClick={() => handleMenuClick(5)}
              >
                <p className={selectedMenu === 5 ? activeMenuClass : menuClass}>Apps</p>
              </NavLink>
            </li>
          </ul>
          <hr />
          <div className="profile" onClick={handleProfileClick}>
            <div className="avatar">ZU</div>
            <p className="username" onClick={handleLogout}>Log Out</p>
          </div>
          {/* {isProfileDropdownOpen} */}
        </div>
      </div>
    </>
  );
}

export default Menu;
