import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "./Security/Auth";
import { useNavigate } from "react-router-dom";

export default function AddTodoComponent() {
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [targetDate, setTargetDate] = useState("");
  let [descriptionValidationFails, setDescriptionValidationFails] =
    useState();
  let [statusValidationFails, setStatusValidationFails] = useState();
  let [dateValidationFails, setDateValidationFails] = useState();
  const authContext = useContext(AuthContext);
  const username = authContext.username;
  const navigate = useNavigate();

  function addTask(event) {
    event.preventDefault();
    if (description.length === 0) {
       
        setDescriptionValidationFails(true);
      console.log("setDescriptionValidationFails "+descriptionValidationFails);
    }
    if (status.length === 0) {
      setStatusValidationFails(true);
      console.log("setStatusValidationFails "+descriptionValidationFails);
    }
    if (targetDate.length === 0) {
      setDateValidationFails(true);
      console.log("setDateValidationFails "+descriptionValidationFails);
    }
    
    if (
      descriptionValidationFails == false &&
      statusValidationFails == false &&
      dateValidationFails == false ) {
        console.log(descriptionValidationFails);
        console.log(statusValidationFails);
        console.log(dateValidationFails);
      const api =
        "http://localhost:8080/todoapi/v1/user/" + username + "/todos";
      axios
        .post(api, { description, status, targetDate })
        .then((result) => {
          alert("Task added successfully!!");
          navigate("/todolist");
        })
        .catch((error) => console.log(error));
    }
  }

  return (
    <div className="addtodo-sec">
      <section>
        <div className="container ">
          <div className="row  mt-lg-5 mt-sm-3 boxshadow">
            <div className="col">
              <form>
                <h4
                  style={{
                    fontWeight: "bolder",
                    marginBottom: "20px",
                  }}
                >
                  ADD{" "}
                  <span
                    style={{ color: "navy", borderBottom: "1px solid grey" }}
                  >
                    TASK
                  </span>
                </h4>
                <div className="form-row ">
                  <div className="form-group col-lg-6">
                    <label
                      htmlFor="inputfordescription"
                      style={{ fontWeight: "bold" }}
                    >
                      Description{" "}
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="description"
                      onChange={(event) => {
                        setDescriptionValidationFails(false);
                        setDescription(event.target.value);
                      }}
                    />
                    {descriptionValidationFails ? (
                      <small style={{ color: "red", fontSize: "15px" }}>
                        Please Enter Valid Description
                      </small>
                    ) : (
                      <small
                        style={{ color: "navy", fontSize: "17px" }}
                      ></small>
                    )}
                  </div>
                  <div className="form-group col-lg-6">
                    <label
                      htmlFor="inputSymptoms"
                      style={{ fontWeight: "bold" }}
                    >
                      Status
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="status"
                      onChange={(event) => {
                        setStatusValidationFails(false);
                        setStatus(event.target.value);
                      }}
                    />
                     {statusValidationFails ? (
                      <small style={{ color: "red", fontSize: "15px" }}>
                        Please Enter Valid Status
                      </small>
                    ) : (
                      <small
                        style={{ color: "navy", fontSize: "17px" }}
                      ></small>
                    )}
                  </div>

                  <div className="form-group col-lg-6 ">
                    <label htmlFor="targetdate" style={{ fontWeight: "bold" }}>
                      Target Date
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="targetdate"
                      min={new Date().toISOString().split("T")[0]}
                      onChange={(event) => {
                        setDateValidationFails(false);
                        setTargetDate(event.target.value);
                      }}
                    />
                     {dateValidationFails ? (
                      <small style={{ color: "red", fontSize: "15px" }}>
                        Please Enter Valid Target Date
                      </small>
                    ) : (
                      <small
                        style={{ color: "navy", fontSize: "17px" }}
                      ></small>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  style={{ marginTop: "0px" }}
                  className="btn btn-dark col-lg-3  bold mt-2"
                  onClick={addTask}
                >
                  Add Task
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
