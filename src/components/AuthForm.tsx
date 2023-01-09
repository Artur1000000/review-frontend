import React from "react";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import { Field } from "../components/Field";
import { useForm } from "react-hook-form";
import Loader from "../components/Loader";
import { AuthFormProps, FormInputs } from "../types";
import EmailIcon from "@mui/icons-material/Email";
import KeyIcon from "@mui/icons-material/Key";
import PersonIcon from "@mui/icons-material/Person";

export default function AuthForm({
  title,
  titleButton,
  userName,
  children,
  pass,
  onSubmit,
  status,
}: AuthFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormInputs>({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
      userName: "",
    },
  });

  return (
    <>
      <Grid
        className="body-page"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            width: { xs: "100%", sm: "40%" },
            padding: "15px 25px",
            boxSizing: "border-box",
            marginTop: "150px",
          }}
        >
          <Typography component="h1" variant="h5">
            {title}
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            sx={{ mt: 1 }}
          >
            <Field
              id="email"
              label="Email"
              required={true}
              icon={<EmailIcon />}
              register={{
                ...register("email", {
                  required: "Required Field",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Incorrect Email",
                  },
                }),
              }}
              error={!!errors?.email}
              helperText={errors?.email && errors.email.message}
            />
            {userName && (
              <Field
                label="User Name"
                id="userName"
                required={false}
                icon={<PersonIcon />}
                register={{
                  ...register("userName", {
                    pattern: {
                      value: /[A-Za-z0-9]{1,30}/,
                      message: "A-Z, a-z, 0-9",
                    },
                    maxLength: {
                      value: 30,
                      message: "max 30 symbols",
                    },
                    minLength: {
                      value: 4,
                      message: "min 4 symbols",
                    },
                  }),
                }}
                error={!!errors?.userName}
                helperText={errors?.userName && errors.userName.message}
              />
            )}
            {pass && (
              <Field
                label="Password"
                type="password"
                id="password"
                required={true}
                icon={<KeyIcon />}
                register={{
                  ...register("password", {
                    required: "Required Field",
                    pattern: {
                      value: /[A-Za-z0-9]{1,30}/,
                      message: "A-Z, a-z, 0-9",
                    },
                    maxLength: {
                      value: 30,
                      message: "max 30 symbols",
                    },
                    minLength: {
                      value: 4,
                      message: "min 4 symbols",
                    },
                  }),
                }}
                error={!!errors?.password}
                helperText={errors?.password && errors.password.message}
              />
            )}
            <Loader status={status}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                disabled={!isValid}
              >
                {titleButton}
              </Button>
            </Loader>
            <Box
              component={"div"}
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
              }}
              sx={{ mt: 2 }}
            >
              {children}
            </Box>
          </Box>
        </Paper>
      </Grid>
    </>
  );
}
