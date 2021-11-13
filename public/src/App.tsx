import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useRoutes } from "./helpers/routes";
import { useActions } from "./hooks/useActions";
import { useTypedSelector } from "./hooks/useTypedSelector";

const App = () => {
  const { getUserData, updateAccessToken } = useActions();
  const router = useRoutes();

  const { loading, error, updateToken } = useTypedSelector(
    (state) => state.user
  );
  if (!loading && !error) {
    getUserData();
  } else if (!updateToken && error) {
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
