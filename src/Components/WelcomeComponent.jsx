import { Link, useNavigate } from "react-router-dom";
import FooterComponent from "./FooterComponent";

export default function WelcomeComponent() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="welcome-sec">
      
        <div className="container  welcomebox">
          <div className=" row   ">
            <div className=" col-lg-5 col-12 welcomebox1  d-flex justifiy-content-center align-items-center flex-column ">
              <Link  to={"/todolist"} >
              <img src="images/To do list-cuate.png" height={200} width={200}
             
              ></img>
              </Link>

              <h5 className="mt-4">Manage Your Task</h5>
              <button
                className="btn btn-dark mt-2"
                onClick={() => navigate("/todolist")}
              >
                View Task
              </button>
            </div>
            <div className=" offset-lg-2   col-lg-5 col-12  mt-md-0 mt-5 welcomebox2  d-flex justifiy-content-center align-items-center flex-column ">
              <Link to={"/addtodo"}>
              <img src="images/Add tasks-pana.png" height={200} width={200} ></img>
              </Link>
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
