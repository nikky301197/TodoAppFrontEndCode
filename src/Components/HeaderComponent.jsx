import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { AuthContext } from "./Security/Auth";

export default function HeaderComponent() {
  const authContext = useContext(AuthContext);
  const isAuthenticated = authContext.isAuthenticated;
  const navigate = useNavigate();

  function logoutFunction(event) {
    event.preventDefault();
    authContext.setAuthenticated(false);

    navigate("/logout");
  }

  function loginFunction(event) {
    event.preventDefault();

    navigate("/");
  }

  return (
    <header className="header-sec">
      <nav className="navbar navbar-expand-lg navbar-dark ">
        <a className="navbar-brand" href="#">
          To-Do Application
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              {isAuthenticated && (
                <Link className="nav-link" to="/welcome">
                  Home <span className="sr-only">(current)</span>
                </Link>
              )}
            </li>
            <li className="nav-item active">
              {isAuthenticated && (
                <Link className="nav-link" to="/todolist">
                  View 
                </Link>
              )}
            </li>
            <li className="nav-item active">
              {isAuthenticated && (
                <Link className="nav-link" to="/addtodo">
                  Add 
                </Link>
              )}
            </li>
          </ul>
          <form className="form-inline  my-1 my-lg-0 d-flex justify-content-center align-items-center">
            {!isAuthenticated && (
              <button
                className="btn btn-outline-dark mr-lg-5  my-3 my-sm-0 m-3  font-weight-bold"
                type="submit"
                onClick={loginFunction}
              >
                LogIn
              </button>
            )}

            {isAuthenticated && (
              <button
                className="btn btn-outline-dark mr-lg-5 my-1 my-sm-0 m-0 font-weight-bold"
                type="submit"
                onClick={logoutFunction}
              >
                LogOut
              </button>
            )}
          </form>
        </div>
      </nav>
    </header>
  );
}
