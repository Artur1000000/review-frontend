import React from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import MainPage from "./pages/MainPage";
import AuthPage from "./pages/AuthPage";
import RegPage from "./pages/RegPage";
import Layout from "./components/Layout";
import ForgotPassword from "./pages/ForgotPassword";
import VerificationPage from "./pages/VerificationPage";
import ChangePassword from "./pages/ChangePassword";
import UserListPage from "./pages/UserListPage";

function App() {
  const pages = ["films", "games", "books"];

  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<Layout />}>
          <Route index element={<Navigate to="/posts" replace />} />
          <Route path={"posts"} element={<MainPage />} />
          <Route path={"auth"} element={<AuthPage />} />
          <Route path={"registration"} element={<RegPage />} />
          <Route path={"verification/:email"} element={<VerificationPage />} />
          <Route path={"forgot_password"} element={<ForgotPassword />} />
          <Route path={"change_password/:email"} element={<ChangePassword />} />
          {pages.map((page, index) => {
            return (
              <Route key={index} path={page} element={<div>{page}</div>} />
            );
          })}
          <Route path={"userList/:id"} element={<UserListPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
