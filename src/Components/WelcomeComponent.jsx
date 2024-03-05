import { Link } from "react-router-dom";
import FooterComponent from "./FooterComponent";

export default function WelcomeComponent() {
  

 
    return (
      <div className="Welcome-sec">
        <h2 style={{ marginTop: "50px" }}>Welcome In </h2>
        <h1 style={{ color: "navy", fontWeight: "bold" }}>To Do Application </h1>
        <h5 style={{marginTop:"30px"}}>
          Manage your Todos - <Link to="/todolist">Go here</Link>
        </h5>
        <h5 style={{fontSize:"19px", marginTop:"20px"}}>
          Add a task - <Link to="/addtodo">Go here</Link>
        </h5>
        <FooterComponent/>
      </div>
    );
  }