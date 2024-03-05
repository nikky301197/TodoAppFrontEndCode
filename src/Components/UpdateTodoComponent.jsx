import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "./Security/Auth";

export default function UpdateTodoComponent() {
  const { todoid } = useParams();
  const authContext = useContext(AuthContext);
  const [description, setDescription] = useState();
  const [status, setStatus] = useState();
  const [targetDate, setTargetDate] = useState();
  let [descriptionValidationFails, setDescriptionValidationFails] =
    useState(false);
  let [statusValidationFails, setStatusValidationFails] = useState(false);
  let [dateValidationFails, setDateValidationFails] = useState(false);
  const username = authContext.username;
  const navigate = useNavigate();

  useEffect(() => retriveTodoById(), [todoid]);

  function retriveTodoById() {
    const api = "http://localhost:8080/todoapi/v1/todos/" + todoid;
    // console.log(api);
    axios
      .get(api)
      .then((result) => {
        // console.log(result);
        setDescription(result.data.description);
        setStatus(result.data.status);
        // console.log(result.data.targetDate);

        let date = new Date(result.data.targetDate);
        const month = date.getMonth();
        const formattedmonth = month <= 9 ? "0" + month : month;
        const today = date.getDate();
        const formattedtoday = today <= 9 ? "0" + today : today;
        const formattedDate =
          date.getFullYear() + "-" + formattedmonth + "-" + formattedtoday;
        // console.log(formattedDate);
        setTargetDate(formattedDate);
      })
      .catch((err) => console.log(err));
  }

  function updateTodo(event) {
    event.preventDefault();
    console.log(description);
    if (description.length === 0) {
      setDescriptionValidationFails(true);
    }
    if (status.length === 0) {
      setStatusValidationFails(true);
    }
    if (targetDate.length === 0) {
      setDateValidationFails(true);
    }
    if (
      descriptionValidationFails === false &&
      statusValidationFails === false &&
      dateValidationFails === false
    ) {
      const api =
        "http://localhost:8080/todoapi/v1/user/" +
        username +
        "/todos/" +
        todoid;
      // console.log("targetdate "+targetDate);

      axios
        .put(api, { description, status, targetDate })
        .then((result) => {
          alert("Task updated successfully!!");
          navigate("/todolist");
        })
        .catch((error) => console.log(error));
    }
  }

  return (
    <div className="updatetodo-sec container ">
      <section>
        <div className="container ">
          <div className="row mt-lg-5 mt-sm-3 boxshadow">
            <div className="col">
              <form>
                <h4
                  style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    marginBottom: "20px",
                  }}
                >
                  UPDATE{" "}
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
                      defaultValue={description}
                      onChange={(event) => {
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
                      value={status}
                      onChange={(event) => {
                         setStatus(event.target.value);
                      }}
                    />
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
                      defaultValue={targetDate}
                      onChange={(event) => setTargetDate(event.target.value)}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  style={{ marginTop: "0px" }}
                  className="btn btn-dark col-lg-3  bold mt-2"
                  onClick={updateTodo}
                >
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
