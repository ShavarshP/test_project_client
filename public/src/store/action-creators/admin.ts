import { Dispatch } from "redux";
import axios from "axios";

import { loadState } from "../../helpers/localStorage";
import { UserAction, UserActionTypes } from "../../types/user";

const API_URL = "http://localhost:5000/api";

export const updateClickCount = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      const token = await loadState("accessToken");
      const data = await axios.put(`${API_URL}/update-click-count`, null, {
        headers: {
          Authorization: `Bearer ${token.accessToken}`,
          withCredentials: true,
        },
      });
      console.log(data);
    } catch (e) {
      dispatch({
        type: UserActionTypes.FETCH_USER_ERROR,
        payload: "An error has occurred",
      });
    }
  };
};

export const getAllUserData = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      const token = await loadState("accessToken");
      const user = await axios.get(`${API_URL}/all-users`, {
        headers: {
          Authorization: `Bearer ${token.accessToken}`,
          withCredentials: true,
        },
      });
      console.log(user.data.users);
      dispatch({
        type: UserActionTypes.ALL_USER_DATA_REGISTER,
        payload: user.data.users,
      });
    } catch (e) {
      dispatch({
        type: UserActionTypes.ALL_FETCH_USER_ERROR,
        payload: "An error has occurred",
      });
    }
  };
};
