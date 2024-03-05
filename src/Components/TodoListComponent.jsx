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
      .then((response) => setTodolist(response.data))
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
      <h4 style={{ marginTop: "20px", fontWeight: "bold", color: "#343A40" }}>
        Things You Want To Do!
        
      </h4>

      <div className=" table-responsive-sm">
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
                <td>{new Date(todo.targetDate).getDate()+"-"+new Date(todo.targetDate).getMonth()+"-"+new Date(todo.targetDate).getFullYear() }</td>
                <td>
                  <button
                    className="btn btn-success"
                    onClick={() => updateTodo(todo.todoId)}
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    style={{ color: "white" }}
                    onClick={() => deletetodo(todo.todoId)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
