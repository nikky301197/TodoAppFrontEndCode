import { useNavigate } from "react-router-dom";

export default function TodoFrontComponent() {
  const navigate = useNavigate();
  return (
    <div className="todo-front-sec container-fluid ">
      <div className="row mt-4 mb-4">
        <div className=" todo-front-sec-box1 col-lg-7 col-12  ">
          <img className="todofrontImage " src="images/5802649.jpg"></img>
        </div>

        <div className=" todoFrontSecBox2 col-lg-5 col-12    d-flex flex-column justify-content-center align-items-center ">
          <h3 style={{ marginBottom: 5 }}>Welcome In</h3>
          <h1
            style={{ fontWeight: "bold", color: "#243D44", marginBottom: 40 }}
          >
            {" "}
            To-Do Application
          </h1>
          <button
            className="startedbtn btn btn-dark"
            style={{
              backgroundColor: "#fa7529c5",
              border: "none",
              fontSize: 18,
            }}
            onClick={() => {
              navigate("/register");
            }}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
