import { useContext, useState } from "react";
import FooterComponent from "./FooterComponent";
import axios from "axios";
import { AuthContext } from "./Security/Auth";
import { useNavigate } from "react-router-dom";

export default function RegisterComponent() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userVerification, setUserVerification] = useState(false);
  const [errorMsg , setErrorMsg] = useState("");

  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  function registerUser(event) {
    event.preventDefault();
    if (username === "" && password === "")
    {
        setUserVerification(true);
        setErrorMsg("Username and password cannot be empty ");
    }
else{
   
    const api = "http://localhost:8080/todoapi/v1/";
    axios
      .post(api, { username, password })
      .then((result) => {
        console.log(result);
        setUserVerification(false);
        alert("Account created successfully!")
        authContext.setAuthenticated(true);
        navigate("/welcome");
      })
      .catch((error) => {
        console.log(error);
        authContext.setAuthenticated(false);
        setUserVerification(true);
        setErrorMsg("User is already exist with this mail id, Try with some another mail id .");
      });

    }
  }

  return (
    <div className="resgister-sec">
      <form>
        <h3
          style={{ color: "#343A40", marginBottom: "25px", fontWeight: "bold" }}
        >
          CREATE ACCOUNT{" "}
        </h3>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">User name </label>{" "}
          <input
            type="email"
            className="form-control inputField"
            id="usernamefield"
            aria-describedby="emailHelp"
            placeholder="Enter Email id"
            onChange={(event) => { 
                setUserVerification(false);
                setUsername(event.target.value)}}
          />
          {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control inputField"
            id="exampleInputPassword1"
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
            <small style={{ color: "red", fontSize: "15px" }}>
              {errorMsg}
            </small>
          ) : (
            <small style={{ color: "navy", fontSize: "17px" }}></small>
          )}
        </div>
      </form>
      {/* <FooterComponent /> */}
    </div>
  );
}
