import React, { useState, useLayoutEffect, useEffect } from "react";
import { useParams } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import Loader from "../components/Loader";
import axios from "../api/axios";

export default function ChangePassword() {
  const [status, setStatus] = useState<string | null>("loading");
  const { email } = useParams();

  const verify = async (email: string) => {
    await axios
      .post(`/verify/${email}`, { email })
      .then((response) => setStatus(null))
      .catch((error) => setStatus("loading"));
  };

  const onSubmit = () => {
    setStatus("loading");
  };

  useLayoutEffect(() => {
    if (email) verify(email);
  }, [email]);
  return (
    <Loader status={status}>
      <AuthForm
        title="New Password"
        titleButton="send"
        onSubmit={onSubmit}
        status={status}
      />
    </Loader>
  );
}
