import { Link, useNavigate } from "react-router-dom";
import FooterComponent from "./FooterComponent";

export default function WelcomeComponent() {
  const navigate = useNavigate();
  return (
    <div>

   
    <div className="welcome-sec">
      <h3 style={{ marginTop: "30px" }}>Welcome In </h3>
      <h1 style={{ color: "#343A40", fontWeight: "bold" }}>To-Do Application </h1>
      {/* <h5 style={{marginTop:"30px"}}>
          Manage your Todos - {"  "}
          <button
          type="submit"
          className="btn btn-outline-dark"
         
        >
          View Task
        </button>
           <Link to="/todolist">Go here</Link>
        </h5>
        <h5 style={{fontSize:"19px", marginTop:"20px"}}>
          Add a task - <Link to="/addtodo">Go here</Link>
        </h5> */}
      <div className="container  welcomebox">
        <div className="row ">
        <div className="  col-lg-6 welcomebox1">
          <h5>
            Manage Your Task
          </h5>
          <button className="btn btn-dark mt-4" onClick= {()=>navigate("/todolist")} >
             View Task
          </button>
        </div>
        <div className="  col-lg-6 welcomebox2  " >
        <h5>
            Add Your Task 
          </h5>
          <button className="btn btn-dark mt-4 " onClick= {()=>navigate("/addtodo")}>
             Add Task
          </button>
          </div>
        </div>
      </div>
      {/* <FooterComponent /> */}
    </div>
    </div>
  );
}
