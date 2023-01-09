import React, { useState } from "react";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import { FormInputs } from "../types";
import axios from "../api/axios";
import WrapperShakebar from "../components/WrapperShakebar";
import { useTranslation } from "react-i18next";

export default function ForgotPassword() {
  const [status, setStatus] = useState<null | string>(null);
  const [message, setMessage] = useState<null | string>(null);
  const { t } = useTranslation();

  const resetMessage = () => {
    setMessage(null);
  };

  const onSubmit = async (data: FormInputs) => {
    const { email } = data;
    setStatus("loading");
    try {
      const result = await axios.post("/forgot_pass", { email });

      setStatus(null);
      if (result.status === 200) {
        setMessage("success");
      }
    } catch (error: any) {
      setStatus(null);
      const mess = error.response.data.message;
      setMessage(mess);
    }
  };

  return (
    <WrapperShakebar message={message} resetMessage={resetMessage}>
      <AuthForm
        title="Reset Password"
        titleButton={t("send")}
        onSubmit={onSubmit}
        status={status}
      >
        <>
          <Typography>
            <Link to="/registration" style={{ textTransform: "capitalize" }}>
              {t("signUp")}
            </Link>
          </Typography>
          <Typography>
            <Link to="/auth" style={{ textTransform: "capitalize" }}>
              {t("logIn")}
            </Link>
          </Typography>
        </>
      </AuthForm>
    </WrapperShakebar>
  );
}
