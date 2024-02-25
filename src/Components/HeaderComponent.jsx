import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { AuthContext } from "./Security/Auth";


export default function HeaderComponent() {
  const authContext = useContext(AuthContext);
  const isAuthenticated = authContext.isAuthenticated;
 

  const navigate = useNavigate();
  return (
    <header className="header-sec">
      <nav className="navbar navbar-expand-lg navbar-dark ">
        <a className="navbar-brand" href="#">
          Todo Application
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
                {isAuthenticated &&  <Link className="nav-link" to="/welcome">
                Home <span className="sr-only">(current)</span>
              </Link>}
             
            </li>
            <li className="nav-item active">
                { isAuthenticated &&   <Link className="nav-link" to="/todolist">
                Todos
              </Link>}
             
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0  ">
            { !isAuthenticated &&   <button
              className="btn btn-outline-dark  my-2 my-sm-0 m-3 font-weight-bold"
              type="submit"
              onClick={() => navigate("/")}
            >
              LogIn
            </button>}
           
           {isAuthenticated && <button
              className="btn btn-outline-dark my-2 my-sm-0 m-3 font-weight-bold"
              type="submit"
              onClick={() => navigate("/logout")}
            >
              LogOut
            </button> }  
          </form>
        </div>
      </nav>
    </header>
  );
}
