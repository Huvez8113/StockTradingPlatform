import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top bg-light border-bottom">
        <div className="container p-2">
          <NavLink className="navbar-brand" to="/">
            <img src="/images/logo.svg" alt="" style={{ width: "30%" }} />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex" role="search">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink  className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}  to="/signup">
                    Signup
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink  className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}  to="/about">
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink  className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}  to="/products">
                    Products
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink  className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}  to="/pricing">
                    Pricing
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink  className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}  to="/support">
                    Support
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink  className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}  to="/">
                    <i className="fa-solid fa-bars"></i>
                  </NavLink>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
