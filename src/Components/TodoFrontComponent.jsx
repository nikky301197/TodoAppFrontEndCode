import { useNavigate } from "react-router-dom";


export default function TodoFrontComponent() {
    const navigate = useNavigate();
  return (
    <div className="todo-front-sec">
      <div className="container ">
        <img className="todofrontImage " src="images/TodoFront3.jpeg"></img>
      </div>
      <button
        className="startedbtn btn btn-dark"
        style={{
         
          backgroundColor: "#FB945A",
          border: "none",
          fontSize: 18,
        }}
       onClick={()=>{navigate("/register")}}
      >
        Get Started
      </button>
    </div>
  );
}
