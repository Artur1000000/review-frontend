import React, { useLayoutEffect, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../components/Loader";
import axios from "../api/axios";
import WrapperShakebar from "../components/WrapperShakebar";
import { IGetStatusProps } from "../types";

export default function VerificationPage() {
  const [message, setMessage] = useState<string | null>(null);
  const [result, setResult] = useState<boolean>(false);
  const { email } = useParams();
  const navigate = useNavigate();

  const getStatus = ({ prop, status }: IGetStatusProps) => {
    if (status !== 200 && typeof prop === "string") {
      setResult(true);
      return setMessage(prop);
    }
    if (status === 200) {
      setResult(true);
      return setMessage("success verification");
    }
  };

  const verify = async (email: string) => {
    await axios
      .post(`/verification/${email}`, { email })
      .then((response) =>
        getStatus({ prop: response.data.message, status: response.status })
      )
      .catch((error) =>
        getStatus({
          prop: error.response.data.message,
          status: error.response.status,
        })
      );
  };

  useLayoutEffect(() => {
    if (email) {
      verify(email);
    }
  }, [email]);

  useEffect(() => {
    let timer1 = setTimeout(() => {
      if (message && message.includes("success")) {
        return navigate("/auth", { replace: false });
      } else {
        return navigate("/registration", { replace: false });
      }
    }, 6000);
    return () => {
      clearTimeout(timer1);
    };
  }, [result]);

  return (
    <WrapperShakebar message={message}>
      <Loader status={"loading"}>
        <div>verification</div>
      </Loader>
    </WrapperShakebar>
  );
}
