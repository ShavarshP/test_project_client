import { Dispatch } from "redux";
import axios from "axios";

import { loadState, saveState } from "../../helpers/localStorage";
import { UserAction, UserActionTypes } from "../../types/user";

const API_URL = "http://localhost:5000/api";

export const authLogin = (email: string, password: string) => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/login",
        {
          email: email,
          password: password,
        },
        { withCredentials: true }
      );
      saveState("accessToken", { accessToken: response.data.accessToken });
      const user = await axios.get("http://localhost:5000/api/user", {
        headers: { Authorization: `Bearer ${response.data.accessToken}` },
      });
      dispatch({
        type: UserActionTypes.USER_DATA_REGISTER,
        payload: user.data.users,
      });
    } catch (e) {
      dispatch({
        type: UserActionTypes.FETCH_USER_ERROR,
        payload: "An error has occurred",
      });
    }
  };
};

export const registration = (
  email: string,
  userName: string,
  password: string
) => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/registration",
        {
          email: email,
          userName: userName,
          password: password,
        },
        { withCredentials: true }
      );
      saveState("accessToken", { accessToken: response.data.accessToken });
      const user = await axios.get("http://localhost:5000/api/user", {
        headers: { Authorization: `Bearer ${response.data.accessToken}` },
      });
      dispatch({
        type: UserActionTypes.USER_DATA_REGISTER,
        payload: user.data.users,
      });
    } catch (e) {
      dispatch({
        type: UserActionTypes.FETCH_USER_ERROR,
        payload: "An error has occurred",
      });
    }
  };
};

export const getUserData = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      const token = await loadState("accessToken");
      const user = await axios.get("http://localhost:5000/api/user", {
        headers: {
          Authorization: `Bearer ${token.accessToken}`,
          withCredentials: true,
        },
      });
      console.log(user.data.users);
      dispatch({
        type: UserActionTypes.USER_DATA_REGISTER,
        payload: user.data.users,
      });
    } catch (e) {
      dispatch({
        type: UserActionTypes.FETCH_USER_ERROR,
        payload: "An error has occurred",
      });
    }
  };
};

export const updateAccessToken = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      // console.log("samsonnnnnnn");
      const response = await axios.get(`${API_URL}/refresh`, {
        withCredentials: true,
      });
      await saveState("accessToken", {
        accessToken: response.data.accessToken,
      });
      dispatch({
        type: UserActionTypes.FETCH_UPDATE_TOKEN,
        payload: "",
      });
    } catch (e) {
      dispatch({
        type: UserActionTypes.FETCH_UPDATE_TOKEN_ERROR,
        payload: "An error has occurred",
      });
    }
  };
};