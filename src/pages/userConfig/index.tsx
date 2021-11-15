/* eslint-disable react-hooks/exhaustive-deps */
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
import { useActions } from "../../hooks/useActions";
import { useHistory, useParams } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const billingPlan = [
  { name: "standard", price: "  0$", id: 10 },
  { name: "comfort", price: "  20$", id: 11 },
  { name: "premium", price: "  40$", id: 12 },
];

const UserConfig: React.FC = () => {
  const [values, setValues] = React.useState({
    userName: "",
    fullName: "",
    email: "",
    password: "",
    billingPlan: "",
    showPassword: false,
  });
  const { AdminRegistration, setLoading, updateUserData } = useActions();
  let userData: any = null;
  const history = useHistory();
  const { id } = useParams();
  const { allUsers } = useTypedSelector((state) => state.admin);

  userData = allUsers.find((item) => item._id === id);

  React.useEffect(() => {
    if (userData) {
      setValues({
        ...values,
        fullName: userData.fullName,
        userName: userData.userName,
        email: userData.email,
        password: userData.billingPlan,
        billingPlan: userData.billingPlan,
      });
    }
  }, []);

  const onSubmit = async () => {
    const name = /^([A-Za-zéàë]{2,40} ?)+$/;
    // eslint-disable-next-line no-useless-escape
    const email = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const password = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const nameValue = name.test(values.fullName) || values.fullName === "";
    const passwordValue =
      password.test(values.password) || values.password === "";
    const emailValue = email.test(values.email) || values.email === "";
    const fullNameValue = name.test(values.fullName) || values.fullName === "";
    if (
      nameValue &&
      passwordValue &&
      emailValue &&
      fullNameValue &&
      values.billingPlan
    ) {
      await setLoading(false);
      await AdminRegistration(
        values.email,
        values.userName,
        values.fullName,
        values.billingPlan,
        values.password
      );
      history.push("home");
    } else {
      alert("invalid data");
    }
  };

  const onUpdate = async () => {
    const name = /^([A-Za-zéàë]{2,40} ?)+$/;
    const nameValue = name.test(values.userName) || values.userName === "";
    const fullNameValue = name.test(values.fullName) || values.fullName === "";
    if (nameValue && fullNameValue && values.billingPlan) {
      await setLoading(false);
      await updateUserData(
        userData._id,
        values.userName,
        values.fullName,
        values.billingPlan
      );
      // setLoading(true);
      history.push("home");
    } else {
      alert("invalid data");
    }
    // setLoading(true);
  };

  const handleChange =
    (prop: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      if (!(id && (prop === "email" || prop === "password"))) {
        setValues({ ...values, [prop]: event.target.value });
      }
    };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event: React.MouseEvent) => {
    event.preventDefault();
  };

  return (
    <div>
      <div
        style={{ color: "red", cursor: "pointer", width: "40px" }}
        onClick={() => {
          history.push("/home");
        }}
      >
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
                  id="fullName"
                  name="fullName"
                  label="Full Name"
                  fullWidth
                  margin="dense"
                  error={"" ? true : false}
                  value={values.fullName}
                  onChange={handleChange("fullName")}
                />
                <Typography
                  variant="inherit"
                  color="textSecondary"
                ></Typography>
              </Grid>
              <Grid item xs={12} sm={6} m={1}>
                <TextField
                  required
                  id="name"
                  name="name"
                  label="Nser Name"
                  fullWidth
                  margin="dense"
                  // {...register("username")}
                  error={"" ? true : false}
                  value={values.userName}
                  onChange={handleChange("userName")}
                />
                <Typography variant="inherit" color="textSecondary">
                  {/* {errors.username?.message} */}
                </Typography>
              </Grid>

              <Grid item xs={12} sm={6} m={1}>
                <TextField
                  required
                  id="email"
                  name="email"
                  autoComplete="on"
                  label="email"
                  fullWidth
                  margin="dense"
                  value={values.email}
                  onChange={handleChange("email")}
                  error={"" ? true : false}
                />
                <Typography
                  variant="inherit"
                  color="textSecondary"
                ></Typography>
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
      {userData ? (
        <Button
          onClick={() => {
            onUpdate();
          }}
          variant="contained"
          color="success"
          style={{ margin: "20px" }}
        >
          Update
        </Button>
      ) : (
        <Button
          onClick={() => {
            onSubmit();
          }}
          variant="contained"
          color="success"
          style={{ margin: "20px" }}
        >
          Create +
        </Button>
      )}
    </div>
  );
};
export default UserConfig;
