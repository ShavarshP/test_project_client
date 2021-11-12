import * as React from "react";
import styles from "./style.module.css";

import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const billingPlan = [
  { name: "standard", price: "  0$", id: 10 },
  { name: "comfort", price: "  20$", id: 11 },
  { name: "premium", price: "  40$", id: 12 },
];

const UserConfig: React.FC = () => {
  const [values, setValues] = React.useState({
    userName: "",
    email: "",
    password: "",
    billingPlan: "",
    showPassword: false,
  });

  const handleChange = (prop: any) => (event: any) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };

  return (
    <div>
      <div style={{ color: "red", cursor: "pointer", width: "40px" }}>
        <ArrowBackIcon fontSize="large" />
      </div>
      <br />
      <div>
        <Box
          sx={{ display: "flex", flexWrap: "wrap" }}
          className={styles.container}
        >
          <div>
            <div style={{ display: "flex" }}>
              <Grid item xs={12} sm={6} m={1}>
                <TextField
                  required
                  id="username"
                  name="email"
                  label="email"
                  fullWidth
                  margin="dense"
                  // {...register("username")}
                  error={"" ? true : false}
                  value={values.email}
                  onChange={handleChange("email")}
                />
                <Typography variant="inherit" color="textSecondary">
                  {/* {errors.username?.message} */}
                </Typography>
              </Grid>

              <Grid item xs={12} sm={6} m={1}>
                <TextField
                  required
                  id="email"
                  name="userName"
                  label="userName"
                  fullWidth
                  margin="dense"
                  // {...register("email")}
                  value={values.userName}
                  onChange={handleChange("userName")}
                  error={"" ? true : false}
                />
                <Typography variant="inherit" color="textSecondary">
                  {/* {errors.email?.message} */}
                </Typography>
              </Grid>
            </div>

            <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
              <InputLabel error htmlFor="standard-adornment-password">
                Password
              </InputLabel>
              <Input
                error
                id="standard-adornment-password"
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                onChange={handleChange("password")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <br />
            <h3 style={{ margin: "18px" }}> Billing Plan</h3>
            {billingPlan.map((item) => {
              if (item.name === values.billingPlan) {
                return (
                  <Button
                    key={item.id}
                    // variant="contained"
                    color="success"
                    style={{
                      backgroundColor: "green",
                      color: "white",
                      margin: "6px",
                    }}
                  >
                    <h3>{item.name}</h3>
                    <h2 style={{ margin: "6px" }}>{item.price}</h2>
                  </Button>
                );
              }
              return (
                <Button
                  key={item.id}
                  color="secondary"
                  style={{ margin: "6px" }}
                  onClick={() => {
                    setValues({
                      ...values,
                      billingPlan: item.name,
                    });
                  }}
                >
                  <h3>{item.name}</h3>
                  <h2 style={{ margin: "6px" }}>{item.price}</h2>
                </Button>
              );
            })}
          </div>
        </Box>
      </div>
    </div>
  );
};
export default UserConfig;
