import React from "react";
// import LogIn from "../pages/register/logIn.js.js";
// import SignUp from "../pages/register/signUp";
import { Switch, Route, Redirect } from "react-router-dom";
import LogIn from "../pages/register/logIn";
import SignUp from "../pages/register/signUp";
// import SignUp from "../pages/register/signUp.js";
// import SignUp from "../pages/register/signUp.js";
// import Index from "../pages/chat";
// import LogIn from "../pages/register/logIn";
// import SignUp from "../pages/register/signUp";

export const useRoutes = () => {
  if ("!userId.data") {
    return (
      <Switch>
        <Route path="/login">
          <LogIn />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Redirect to="/login" />
      </Switch>
    );
  }
  //   return (
  //     <Switch>
  //       <Route path="/chat/:id" exact>
  //         <Index
  //           user={userId.data}
  //           allUsers={userId.allDataFilter}
  //           verify={verify}
  //         />
  //       </Route>
  //       <Redirect to={"/chat/" + userId.data.owner} />
  //     </Switch>
  //   );
};
