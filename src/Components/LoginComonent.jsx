import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./Security/Auth";
import { useContext } from "react";

export default function LoginComponent() {
    let [username, setUsername] = useState();
    let [password, setPassword] = useState();
    let [userauth, setUserauth] = useState();
    const navigate = useNavigate();
    const authContext = useContext(AuthContext);
  
    function saveUsername(event) {
      setUsername(event.target.value);
    }
    function verifyUsernamePassword(event) {
      event.preventDefault();
      console.log("function");
      if (username === "test" && password === "test") {
        setUserauth(true);
        console.log("success login :" + userauth);
        authContext.setAuthenticated(true);
        console.log(authContext.isAuthenticated);
        navigate("/welcome");
      } else {
        setUserauth(false);
        console.log("failed login:" + userauth);
      }
    }
  
    return (
      <div className="login-sec">
        <form>
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
            className="btn btn-primary"
            onClick={verifyUsernamePassword}
          >
            Submit
          </button>
  
          <div style={{ marginTop: "20px" }}>
            {userauth == true ? (
              <small style={{ color: "green", fontSize: "15px" }}>
                {" "}
                Authentication Success
              </small>
            ) : (
              <small style={{ color: "red", fontSize: "15px" }}>
                {" "}
                Authentication failed please try again
              </small>
            )}
          </div>
        </form>
      </div>
    );
  }