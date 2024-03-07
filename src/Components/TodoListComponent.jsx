import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./Security/Auth";
import { useNavigate } from "react-router-dom";

export default function TodoListComponent() {
  // const today = new Date();
  // const targetDate = new Date(today.getFullYear(), today.getMonth());
  const [todolist, setTodolist] = useState([]);
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => refreshtodos(), []);

  function refreshtodos() {
    const username = authContext.username;

    const api = "http://localhost:8080/todoapi/v1/user/" + username + "/todos";

    let response = axios
      .get("http://localhost:8080/todoapi/v1/user/" + username + "/todos")
      .then((response) => {
        console.log(response.data.length);
        setTodolist(response.data);
      })
      .catch((err) => console.log(err));
  }

  function deletetodo(todoId) {
    const api = "http://localhost:8080/todoapi/v1/todos/" + todoId;

    let ans = window.confirm("Do you want to delete this?");

    if (ans) {
      let response = axios
        .delete(api)
        .then(() => {
          refreshtodos();
        })
        .catch((err) => console.log(err));
    }
  }

  function updateTodo(todoId) {
    navigate(`/updateTodo/${todoId}`);
  }

  return (
    <div className="todolist-sec container">
      {todolist.length == 0 ? (
        <div className="noDataSec  d-flex flex-column justifiy-content-center align-items-center">
          <h4
            style={{ marginTop: "20px", fontWeight: "bold", color: "#343A40" }}
          >
            No Data Found
          </h4>
          <img src="images/No data-cuate.png" className="noDataImg"></img>

          <button
            className="btn btn-dark"
            style={{ width: 200 }}
            type="submit"
            onClick={()=> {navigate("/addtodo")}}
          >
            Add Task
          </button>
        </div>
      ) : (
        <div className=" table-responsive-sm">
           <h4
            style={{ marginTop: "20px", fontWeight: "bold", color: "#343A40" }}
          >
            THINGS TO DO!!
          </h4>
          <table
            className="table table-dark table-striped"
            style={{ marginTop: "20px" }}
          >
            <thead>
              <tr>
                <th>ID</th>
                <th>DESCRIPTION</th>
                <th>STATUS</th>
                <th>TARGET DATE</th>
                <th>UPDATE</th>
                <th>DELETE</th>
              </tr>
            </thead>
            <tbody>
              {todolist.map((todo, index) => (
                <tr key={todo.todoId}>
                  <td>{index + 1}</td>
                  <td>{todo.description}</td>
                  <td>{todo.status}</td>
                  <td>
                    {new Date(todo.targetDate).getDate() +
                      "-" +
                      new Date(todo.targetDate).getMonth() +
                      "-" +
                      new Date(todo.targetDate).getFullYear()}
                  </td>
                  <td>
                    <button
                      className="btn"
                      onClick={() => updateTodo(todo.todoId)}
                    >
                      <img src="icons/pen_10263603.png" height={23} width={23}></img>
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn "
                      style={{ color: "white" }}
                      onClick={() => deletetodo(todo.todoId)}
                    >
                      
                      <img src="icons/delete_6861358.png" height={23} width={23}></img>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
