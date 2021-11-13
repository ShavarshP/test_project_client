import React from "react";
// import LogIn from "../pages/register/logIn.js.js";
// import SignUp from "../pages/register/signUp";
import { Switch, Route, Redirect } from "react-router-dom";
import { useTypedSelector } from "../hooks/useTypedSelector";
import LogIn from "../pages/register/logIn";
import SignUp from "../pages/register/signUp";
import UserPage from "../pages/userPage";
import { loadState } from "./localStorage";
// import SignUp from "../pages/register/signUp.js";
// import SignUp from "../pages/register/signUp.js";
// import Index from "../pages/chat";
// import LogIn from "../pages/register/logIn";
// import SignUp from "../pages/register/signUp";

export const useRoutes = () => {
  const { user } = useTypedSelector((state) => state.user);
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
