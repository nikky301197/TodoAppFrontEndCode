import { useContext, useState } from "react";
import FooterComponent from "./FooterComponent";
import axios from "axios";
import { AuthContext } from "./Security/Auth";
import { useNavigate } from "react-router-dom";

export default function RegisterComponent() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userVerification, setUserVerification] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  function registerUser(event) {
    event.preventDefault();
    if (username === "" && password === "") {
      setUserVerification(true);
      setErrorMsg("Username and password cannot be empty ");
    } else {
      const api = "http://localhost:8080/todoapi/v1/";
      axios
        .post(api, { username, password })
        .then((result) => {
          console.log(result);
          setUserVerification(false);
          alert("Account created successfully!");
          authContext.setAuthenticated(true);
          navigate("/login");
        })
        .catch((error) => {
          console.log(error);
          authContext.setAuthenticated(false);
          setUserVerification(true);
          setErrorMsg(
            "User is already exist with this mail id, Try with some another mail id ."
          );
        });
    }
  }
  
  return (
    <div className="resgister-sec container  p-5 mt-lg-1 mt-md-5 mt-5">
      <div className="row " style={{ boxShadow:"#FB945A 4px 3px 2px"
        }}>
      <div className="col-md-6 col-2 ">
      <img className="loginImg" src="images/Mobile login-pana.png" ></img>
      </div>
      <div className="col-md-6  col-10 ">
      <form>
        <h3 className="createAccountHeading"
          style={{ color: "#343A40", marginBottom: "25px", fontWeight: "bold" }}
        >
          CREATE ACCOUNT{" "}
        </h3>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">User name </label>{" "}
          <input
            type="email"
            className="form-control inputField  "
            id="usernamefield"
            aria-describedby="emailHelp"
            placeholder="Enter Email id"
            onChange={(event) => {
              setUserVerification(false);
              setUsername(event.target.value);
            }}
          />
          {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control inputField"
            id="passwordfield"
            placeholder="Enter Password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </div>

        <button type="submit" className="btn btn-dark" onClick={registerUser}>
          Register
        </button>

        <div style={{ marginTop: "10px" }}>
          {userVerification ? (
            <small style={{ color: "red", fontSize: "15px" }}>{errorMsg}</small>
          ) : (
            <small style={{ color: "navy", fontSize: "17px" }}></small>
          )}
        </div>
      </form>
      </div>
      </div>
     
      {/* {<FooterComponent />} */}
    </div>
  );
}
