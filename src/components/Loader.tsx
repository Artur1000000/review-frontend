import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { ILoaderProps } from "../types";

export default function Loader(props: ILoaderProps) {
  const { children, status } = props;
  return <>{status === "loading" ? <CircularProgress sx={{mt:2}} /> : children}</>;
}
