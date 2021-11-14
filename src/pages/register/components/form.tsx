import React from "react";
import { Button, TextField, Grid, Paper, Typography } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";

interface loginForm {
  isLogin: boolean;
  onSubmit(data: any): void;
  isValid(data: any): void;
  valid: {
    userName: boolean;
    fullName:boolean;
    email: boolean;
    password: boolean;
  };
}

const Form: React.FC<loginForm> = ({ isLogin, onSubmit, isValid, valid }) => {
  // const login = false;
  const { register, handleSubmit } = useForm();

  // const registr = () => {};
  // const login = () => {};
  // const changePage = () => {
  //   setIsLogin(true);
  // };

  return (
    <div>
      <Grid container spacing={0} direction="row">
        <Grid item style={{ width: "400px" }}>
          <Grid container direction="column" spacing={2} className="login-form">
            <Paper
              variant="elevation"
              elevation={2}
              className="login-background"
            >
              <Grid item>
                <Typography component="h1" variant="h5">
                  {isLogin ? "SIGN UP" : "login in"}
                </Typography>
              </Grid>
              <Grid item>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  onChange={handleSubmit(isValid)}
                >
                  {isLogin ? (
                    <>
                    <Grid item>
                    <TextField
                      type="user name"
                      placeholder="User Name"
                      fullWidth
                      variant="outlined"
                      {...register("userName")}
                      error={valid.userName}
                      required
                      autoFocus={false}
                    />
                  </Grid>
                    <Grid item>
                      <TextField
                        type="user name"
                        placeholder="User Name"
                        fullWidth
                        variant="outlined"
                        {...register("fullName")}
                        error={valid.fullName}
                        required
                        autoFocus={false}
                      />
                    </Grid>
                    </>
                  ) : null}
                  <Grid container direction="column" spacing={2}>
                    <Grid item>
                      <TextField
                        type="email"
                        placeholder="Email"
                        fullWidth
                        variant="outlined"
                        {...register("email")}
                        error={valid.email}
                        required
                        autoFocus
                      />
                    </Grid>

                    <Grid item>
                      <TextField
                        type="password"
                        placeholder="Password"
                        fullWidth
                        variant="outlined"
                        {...register("password")}
                        error={valid.password}
                        required
                      />
                    </Grid>
                    <Grid item>
                      <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        className="button-block"
                      >
                        Submit
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Grid>
              {isLogin ? null : (
                <Grid item>
                  <NavLink
                    to={"/signup"}
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    <h4>SIGN UP</h4>
                  </NavLink>
                </Grid>
              )}
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
export default Form;
