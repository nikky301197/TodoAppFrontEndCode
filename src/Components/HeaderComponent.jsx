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

    navigate("/login");
  }

  function loginFunction(event) {
    event.preventDefault();

    navigate("/login");
  }

  function registerFunction(event) {
    event.preventDefault();

    navigate("/register");
  }

  return (
    <header className="header-sec">
      <nav className="navbar navbar-expand-lg navbar-dark ">
        <Link
          className="navbar-brand"
          href="#"
          style={{
            fontWeight: "bold",
            color: "#343A40",
            fontSize: 22,
         
            marginLeft: 10,
            marginRight: 50,
          }}
          to="/"
        >
           <img src="icons/check_14610735.png" height={45} width={45}></img>
           {" "} To-Do App
         
        </Link>
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
          <ul className="navbar-nav mr-auto" style={{fontSize:17}}>
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
                className="btn btn-dark mr-lg-4  my-3 my-sm-0 m-3  font-weight-bold"
                type="submit"
                onClick={loginFunction}
              >
                Log In
              </button>
            )}

            {!isAuthenticated && (
              <button
                className="btn btn-dark mr-lg-4  my-3 my-sm-0 m-3  font-weight-bold"
                type="submit"
                onClick={registerFunction}
              >
                Register
              </button>
            )}

            {isAuthenticated && (
              <button
                className="btn btn-dark mr-lg-5 my-1 my-sm-0 m-0 font-weight-bold"
                type="submit"
                onClick={logoutFunction}
              >
                Log Out
              </button>
            )}
          </form>
        </div>
      </nav>
    </header>
  );
}
