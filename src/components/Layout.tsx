import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Paper from "@mui/material/Paper";

export default function Layout() {
  return (
    <>
      <Header />
      <Paper
        variant="outlined"
        square={true}
        sx={{
          overflowY: "auto",
          height: "calc(100vh - 64px)",
          padding:"20px",
          boxSizing: "border-box"
        }}
      >
        <Outlet />
      </Paper>
    </>
  );
}
