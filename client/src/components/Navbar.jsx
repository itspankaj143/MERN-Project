import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../../store/auth-store";

const Navbar = () => {
  // Get authentication status using the useAuth hook
  const { isLoggedIn } = useAuth();
  // Get the current location using the useLocation hook
  const location = useLocation();
  return (
    <>
      <header>
        <div className="container1">
          <div className="logo-brand">
            <NavLink
              to="/"
              className="text-[2rem] uppercase bg-gray-400 p-1 rounded-sm"
            >
              Pankaj Kumar
            </NavLink>
          </div>
          {/* Navigation */}
          <nav>
            <ul>
              {/* Navigation Links */}
              <li>
                <NavLink to="/"> Home </NavLink>
              </li>
              <li>
                <NavLink to="/about"> About </NavLink>
              </li>
              <li>
                <NavLink to="/service"> Services </NavLink>
              </li>
              <li>
                <NavLink to="/contact"> Contact </NavLink>
              </li>
              {/* Conditional rendering for Logout link */}
              {isLoggedIn && location.pathname !== "/login" ? (
                <li>
                  <NavLink to="/logout"> Logout </NavLink>
                </li>
              ) : (
                // Conditional rendering for Sign Up and Login links
                !isLoggedIn && (
                  <>
                    <li>
                      <NavLink to="/register"> Sign Up </NavLink>
                    </li>
                    <li>
                      <NavLink to="/login"> Login </NavLink>
                    </li>
                  </>
                )
              )}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
export default Navbar;
