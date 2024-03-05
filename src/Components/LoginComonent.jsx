import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext, useAuth } from "./Security/Auth";
import { useContext } from "react";
import axios from "axios";
import FooterComponent from "./FooterComponent";

export default function LoginComponent() {
  let [username, setUsername] = useState();
  let [password, setPassword] = useState();
  let [userauth, setUserauth] = useState(false);

  const navigate = useNavigate();
  const authContext = useContext(AuthContext);

  function saveUsername(event) {
    setUsername(event.target.value);
    authContext.setUsername(event.target.value);
  }

  const verifyUsernamePassword = async (event) => {
    event.preventDefault();
    try {
      let response = await axios.post("http://localhost:8080/todoapi/v1/", {
        username,
        password,
      });

      console.log("response" + response.data);
      if (response.data) {
        setUserauth(false);
        authContext.setAuthenticated(true);
        navigate("/welcome");
        console.log("authenticated successfully");
      } else {
        setUserauth(true);
        authContext.setAuthenticated(false);
        console.log("authentication failed");
      }
    } catch (error) {
      setUserauth(true);
      authContext.setAuthenticated(false);
    }
  };

  return (
    <div className="login-sec">
      <form>
        <h3 style={{ color: "navy", marginBottom: "25px", fontWeight: "bold" }}>
          Welcome to Microsoft To Do{" "}
        </h3>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">User name </label>{" "}
          <input
            type="text"
            className="form-control inputField"
            id="usernamefield"
            aria-describedby="emailHelp"
            placeholder="Enter username"
            onChange={saveUsername}
          />
          {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control inputField"
            id="exampleInputPassword1"
            placeholder="Password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </div>

        <button
          type="submit"
          className="btn btn-dark"
          onClick={verifyUsernamePassword}
        >
          Submit
        </button>

        <div style={{ marginTop: "10px" }}>
          {userauth ? (
            <small style={{ color: "red", fontSize: "15px" }}>
              Authentication failed please try again
            </small>
          ) : (
            <small style={{ color: "navy", fontSize: "17px" }}></small>
          )}
        </div>
      </form>
      <FooterComponent/>
    </div>
   
  );

}
