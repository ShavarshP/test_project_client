import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useTypedSelector } from "../hooks/useTypedSelector";
import Management from "../pages/management";
import LogIn from "../pages/register/logIn";
import SignUp from "../pages/register/signUp";
import UserConfig from "../pages/userConfig";
import UserPage from "../pages/userPage";

export const useRoutes = () => {
  const { user } = useTypedSelector((state) => state.user);
  return (
    <Switch>
      {!user.isActivated ? (
        <>
          <Route path="/login">
            <LogIn />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Redirect to="/login" />
        </>
      ) : user.status === "admin" ? (
        <>
          <Route path="/home">
            <Management />
          </Route>
          <Route path="/user_config">
            <UserConfig />
          </Route>
          <Route path="/edit_user_config/:id">
            <UserConfig />
          </Route>
          <Redirect from="" to="/home" />
        </>
      ) : (
        <>
          <Route path="/home">
            <UserPage />
          </Route>
          <Redirect to="/home" />
        </>
      )}
    </Switch>
  );
};
