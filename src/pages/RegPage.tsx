import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import { FormInputs } from "../types";
import WrapperShakebar from "../components/WrapperShakebar";
import axios from "../api/axios";
import { useTranslation } from "react-i18next";

export default function RegPage() {
  const [status, setStatus] = useState<null | string>(null);
  const [message, setMessage] = useState<null | string>(null);
  const {t} = useTranslation()

  const resetMessage = () => {
    setMessage(null);
  };

  const onSubmit = async (data: FormInputs) => {
    const { email, userName, password } = data;
    setStatus("loading");
    try {
      const result = await axios.post("/reg", { email, userName, password });

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
        title={"Registration"}
        titleButton={t("registration")}
        userName={true}
        pass={true}
        onSubmit={onSubmit}
        status={status}
      >
        <>
          <Typography>
            <Link to="/forgot_password" style={{ textTransform: "capitalize" }}>{t("forgotPassword")}</Link>
          </Typography>
          <Typography>
            <Link to="/auth" style={{ textTransform: "capitalize" }}>{t("logIn")}</Link>
          </Typography>
        </>
      </AuthForm>
    </WrapperShakebar>
  );
}
