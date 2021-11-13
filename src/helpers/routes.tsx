import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useTypedSelector } from "../hooks/useTypedSelector";
import LogIn from "../pages/register/logIn";
import SignUp from "../pages/register/signUp";
import UserPage from "../pages/userPage";

export const useRoutes = () => {
  const { user } = useTypedSelector((state) => state.user);
  console.log(
    "router",
    useTypedSelector((state) => state.user)
  );
  return (
    <Switch>
      {!user.userName ? (
        <>
          <Route path="/login">
            <LogIn />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Redirect to="/login" />
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
