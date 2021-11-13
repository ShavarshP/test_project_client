import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { loadState } from "./helpers/localStorage";
import { useRoutes } from "./helpers/routes";
import { useActions } from "./hooks/useActions";
import { useTypedSelector } from "./hooks/useTypedSelector";
// import Register from "./pages/register/logIn.js";
// import UserList from "./components/UserList";
// import TodoList from "./components/TodoList";
// import Management from "./pages/management";
// import UserConfig from "./pages/userConfig";
// import UserPage from "./pages/userPage";

const App = () => {
  const { getUserData, updateAccessToken } = useActions();
  const router = useRoutes();

  const { loading, error, updateToken } = useTypedSelector(
    (state) => state.user
  );
  if (!loading && !error) {
    getUserData();
  } else if (!updateToken && error && !loading) {
    console.log("getUserData();");
    updateAccessToken();
  }
  console.log(useTypedSelector((state) => state.user));

  // console.log(
  //   "ssss",
  //   useTypedSelector((state) => state.user)
  // );

  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "5%" }}>
      {!loading ? (
        "loading..."
      ) : (
        <>
          <Router>{router}</Router>
        </>
      )}
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
