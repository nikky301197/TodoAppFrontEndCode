import { Link, useNavigate } from "react-router-dom";
import FooterComponent from "./FooterComponent";

export default function WelcomeComponent() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="welcome-sec">
        {/* <h3 style={{ marginTop: "30px" }}>Welcome In </h3>
      <h1 style={{ color: "#343A40", fontWeight: "bold" }}>To-Do Application </h1> */}
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
          <div className=" row mt-4  ">
            <div className=" col-lg-5  welcomebox1 mt-2 mb-2 d-flex justifiy-content-center align-items-center flex-column ">
              <img src="icons/viewtask.png" height={70} width={70}></img>

              <h5 className="mt-4">Manage Your Task</h5>
              <button
                className="btn btn-dark mt-4"
                onClick={() => navigate("/todolist")}
              >
                View Task
              </button>
            </div>
            <div className="  offset-lg-2 col-lg-5 welcomebox2 mt-2 mb-2  d-flex justifiy-content-center align-items-center flex-column ">
              <img src="icons/addtask.png" height={70} width={70}></img>
              <h5 className="mt-4">Add Your Task</h5>
              <button
                className="btn btn-dark mt-4 "
                onClick={() => navigate("/addtodo")}
              >
                Add Task
              </button>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  );
}
