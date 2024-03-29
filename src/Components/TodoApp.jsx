import "./TodoApp.css";
import LogoutComponent from "./LogoutComponent";
import LoginComponent from "./LoginComonent";
import WelcomeComponent from "./WelcomeComponent";
import ErrorComponent from "./ErrorComponent";
import TodoListComponent from "./TodoListComponent";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { AuthContext } from "./Security/Auth";
import { useContext } from "react";
import AuthProvider from "./Security/Auth";
import UpdateTodoComponent from "./UpdateTodoComponent";
import AddTodoComponent from "./AddTodoComponent";
import TodoFrontComponent from "./TodoFrontComponent";
import RegisterComponent from "./RegisterComponent";

function ProtectedRoutes({ children }) {
  const authContext = useContext(AuthContext);
  if (authContext.isAuthenticated) 
  return children ;

  return <Navigate to="/" />;
}
export default function TodoAppComponent() {
  return (
    <div className="todoapp-sec">
      <AuthProvider>
        <BrowserRouter>
          <HeaderComponent />
          <Routes>
          <Route path="/" element={<TodoFrontComponent />}></Route>
            <Route path="/login" element={<LoginComponent />}></Route>
            <Route path="/register" element={<RegisterComponent />}></Route>
            <Route
              path="/welcome"
              element={
                <ProtectedRoutes> <WelcomeComponent />
                </ProtectedRoutes>
              }
            ></Route>
            <Route
              path="/todolist"
              element={
                <ProtectedRoutes> <TodoListComponent />
                </ProtectedRoutes>
              }
            ></Route>
            <Route
              path="/logout"
              element={
                <ProtectedRoutes> <LogoutComponent />
                </ProtectedRoutes>
              }
            ></Route>
             <Route
              path="/updateTodo/:todoid"
              element={
                <ProtectedRoutes> <UpdateTodoComponent />
                </ProtectedRoutes>
              }
            ></Route>
              <Route
              path="/addtodo"
              element={
                <ProtectedRoutes> <AddTodoComponent/>
                </ProtectedRoutes>
              }
            ></Route>
            <Route path="*" element={<ErrorComponent />}></Route>
          </Routes>
        
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}
