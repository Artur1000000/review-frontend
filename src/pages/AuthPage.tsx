import React from "react";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import { IUserDataSend } from "../types";
import { useAppDispatch, useAppSelector } from "../hook";
import { useTranslation } from "react-i18next";
import { authUser } from "../redux/slices/authSlice";

export default function AuthPage() {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { status } = useAppSelector((state) => state.auth);

  const onSubmit = (data: IUserDataSend) => {
    console.log(data.email, data.password);
    dispatch(authUser(data))
  };

  return (
    <>
      <AuthForm
        title={"Sign in"}
        titleButton={t("login")}
        pass={true}
        onSubmit={onSubmit}
        status={status}
      >
        <>
          <Typography>
            <Link to="/forgot_password" style={{ textTransform: "capitalize" }}>
              {t("forgotPassword")}
            </Link>
          </Typography>
          <Typography>
            <Link to="/registration" style={{ textTransform: "capitalize" }}>
              {t("registration")}
            </Link>
          </Typography>
        </>
      </AuthForm>
    </>
  );
}
