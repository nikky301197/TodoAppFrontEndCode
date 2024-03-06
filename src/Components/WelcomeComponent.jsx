import { Link, useNavigate } from "react-router-dom";
import FooterComponent from "./FooterComponent";

export default function WelcomeComponent() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="welcome-sec">
      
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
            <div className="  offset-lg-2 col-lg-5 welcomebox2  d-flex justifiy-content-center align-items-center flex-column ">
              <img src="images/Add tasks-pana.png" height={200} width={200} ></img>
              <h5 className="mt-2">Add Your Task</h5>
              <button
                className="btn btn-dark mt-2 "
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
