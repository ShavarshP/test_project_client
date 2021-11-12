import React, { useState } from "react";
import {
  Button,
  TextField,
  Grid,
  Paper,
  Typography,
  Link,
} from "@material-ui/core";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
// import { BRAND_NAME } from "../constants";

interface loginForm {
  isLogin: boolean;
}

const Form: React.FC<loginForm> = ({ isLogin }) => {
  // const login = false;

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
                <form>
                  <Grid container direction="column" spacing={2}>
                    <Grid item>
                      <TextField
                        type="email"
                        placeholder="Email"
                        fullWidth
                        name="username"
                        variant="outlined"
                        // value={this.state.username}
                        onChange={
                          (event) => {}
                          // this.setState({
                          //   [event.target.name]: event.target.value,
                          // })
                        }
                        required
                        autoFocus
                      />
                    </Grid>
                    {isLogin ? (
                      <Grid item>
                        <TextField
                          type="user name"
                          placeholder="User Name"
                          fullWidth
                          name="text"
                          variant="outlined"
                          // value={this.state.username}
                          onChange={
                            (event) => {}
                            // this.setState({
                            //   [event.target.name]: event.target.value,
                            // })
                          }
                          required
                          autoFocus
                        />
                      </Grid>
                    ) : null}
                    <Grid item>
                      <TextField
                        type="password"
                        placeholder="Password"
                        fullWidth
                        name="password"
                        variant="outlined"
                        // value={this.state.password}
                        onChange={
                          (event) => {}
                          // this.setState({
                          //   [event.target.name]: event.target.value,
                          // })
                        }
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
