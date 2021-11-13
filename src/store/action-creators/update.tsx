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
      dispatch({
        type: UserActionTypes.USER_DATA_UPDATE_CLICK,
        payload: 1,
      });
    } catch (e) {
      dispatch({
        type: UserActionTypes.FETCH_USER_ERROR,
        payload: "An error has occurred",
      });
    }
  };
};
