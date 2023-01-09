import React, { useEffect, useState } from "react";
import { Alert } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";

interface IWrapperShakebarProps {
  children: JSX.Element;
  message: string | null;
  resetMessage?: () => void;
}

export default function WrapperShakebar({
  children,
  message,
  resetMessage,
}: IWrapperShakebarProps) {
  const [open, setOpen] = useState<boolean>(false);

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    resetMessage && resetMessage();
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  useEffect(() => {
    if (message) {
      setOpen(true);
    }
  }, [message]);

  return (
    <>
      {children}
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Note archived"
      >
        <Alert
          severity={message?.includes("success") ? "success" : "error"}
          sx={{ maxWidth: "200px" }}
        >
          {message}
        </Alert>
      </Snackbar>
    </>
  );
}
