import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useRoutes } from "./helpers/routes";
// import Register from "./pages/register/logIn.js";
// import UserList from "./components/UserList";
// import TodoList from "./components/TodoList";
// import Management from "./pages/management";
// import UserConfig from "./pages/userConfig";
// import UserPage from "./pages/userPage";

const App = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "5%" }}>
      <Router>{useRoutes()}</Router>
      {/* <Register /> */}
      {/* <UserPage /> */}
      {/* <Management /> */}
      {/* <UserConfig /> */}
      {/* <UserList/>
            <hr/>
            <TodoList/> */}
    </div>
  );
};

export default App;
