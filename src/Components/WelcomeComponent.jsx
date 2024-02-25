import { Link } from "react-router-dom";
export default function WelcomeComponent() {
    return (
      <div className="Welcome-sec">
        <h2 style={{ marginTop: "50px" }}>Welcome In </h2>
        <h1 style={{ color: "navy", fontWeight: "bold" }}>To Do Application </h1>
        <h5>
          Manage your Todos- <Link to="/todolist">Go here</Link>{" "}
        </h5>
      </div>
    );
  }