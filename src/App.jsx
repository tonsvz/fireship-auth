import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout.jsx";
// page components
import {
  AccountPage,
  HomePage,
  LoginPage,
  NotFoundPage,
  ProjectPage,
  ProjectsPage,
  RegisterPage,
  UsersPage,
} from "./components/PageIndex.jsx";

// page paths
const pages = [
  {
    name: "Home",
    path: "/",
    Component: HomePage,
  },
  {
    name: "Login",
    path: "/login",
    Component: LoginPage,
  },
  {
    name: "Register",
    path: "/register",
    Component: RegisterPage,
  },
  {
    name: "Account",
    path: "/account",
    Component: AccountPage,
  },
  {
    name: "Projects",
    path: "/projects",
    Component: ProjectsPage,
  },
  {
    name: "Project",
    path: "/project/:id",
    Component: ProjectPage,
  },
  {
    name: "Admin",
    path: "/admin/users",
    Component: UsersPage,
  },

  {
    name: "NotFound",
    path: "*",
    Component: NotFoundPage,
  },
];

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          {pages.map((e) => {
            return (
              <Route key={e.name} path={e.path} element={<e.Component />} />
            );
          })}
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
