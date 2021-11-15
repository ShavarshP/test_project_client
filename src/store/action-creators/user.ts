import { Dispatch } from "redux";
import axios from "axios";

import { loadState, saveState } from "../../helpers/localStorage";
import { UserAction, UserActionTypes } from "../../types/user";

const API_URL = "http://localhost:5000/api";

export const registration = (
  email: string,
  userName: string,
  fullName: string,
  password: string,
  billingPlan: string
) => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      const response = await axios.post(
        `${API_URL}/registration`,
        {
          email: email,
          userName: userName,
          fullName: fullName,
          billingPlan: billingPlan,
          password: password,
        },
        { withCredentials: true }
      );
      saveState("accessToken", { accessToken: response.data.accessToken });
      const user = await axios.get(`${API_URL}/user`, {
        headers: { Authorization: `Bearer ${response.data.accessToken}` },
      });
      dispatch({
        type: UserActionTypes.USER_DATA_REGISTER,
        payload: user.data.users,
      });
    } catch (e) {
      alert("invalid data");
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
      const user = await axios.get(`${API_URL}/user`, {
        headers: {
          Authorization: `Bearer ${token.accessToken}`,
          withCredentials: true,
        },
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

export const updateAccessToken = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
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

export const UserLogout = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      // const token = await loadState("accessToken");
      await axios.get(`${API_URL}/logout`, {
        withCredentials: true,
      });
      localStorage.removeItem("accessToken");
      dispatch({
        type: UserActionTypes.DATA_USER_LOGOUT,
        payload: true,
      });
    } catch (e) {
      dispatch({
        type: UserActionTypes.ALL_FETCH_USER_ERROR,
        payload: "An error has occurred",
      });
    }
  };
};
export const loginUser = (email: string, password: string) => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      const response = await axios.post(
        `${API_URL}/login-user`,
        {
          email: email,
          password: password,
        },
        { withCredentials: true }
      );
      saveState("accessToken", { accessToken: response.data.accessToken });
      const user = await axios.get(`${API_URL}/user`, {
        headers: { Authorization: `Bearer ${response.data.accessToken}` },
      });
      dispatch({
        type: UserActionTypes.USER_DATA_REGISTER,
        payload: user.data.users,
      });
    } catch (e) {
      alert("invalid data");
      dispatch({
        type: UserActionTypes.FETCH_USER_ERROR,
        payload: "An error has occurred",
      });
    }
  };
};
