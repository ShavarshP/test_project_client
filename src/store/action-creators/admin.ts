import { Dispatch } from "redux";
import axios from "axios";

import { loadState } from "../../helpers/localStorage";
import { UserAction, UserActionTypes } from "../../types/user";

const API_URL = "http://localhost:5000/api";

export const updateClickCount = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      const token = await loadState("accessToken");
      await axios.put(`${API_URL}/update-click-count`, null, {
        headers: {
          Authorization: `Bearer ${token.accessToken}`,
          withCredentials: true,
        },
      });
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

export const AdminRegistration = (
  email: string,
  userName: string,
  fullName: string,
  billingPlan: string,
  password: string
) => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      await axios.post("http://localhost:5000/api/registration", {
        email: email,
        userName: userName,
        fullName: fullName,
        billingPlan: billingPlan,
        password: password,
      });
      dispatch({
        type: UserActionTypes.DATA_LOADING,
        payload: true,
      });
    } catch (e) {
      dispatch({
        type: UserActionTypes.FETCH_USER_ERROR,
        payload: "An error has occurred",
      });
    }
  };
};

export const updateUserData = (
  UserId: string,
  userName: string,
  fullName: string,
  billingPlan: string
) => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      const token = await loadState("accessToken");
      await axios.put(
        "http://localhost:5000/api/update-user",
        {
          UserId,
          userName,
          fullName,
          billingPlan,
        },
        {
          headers: {
            Authorization: `Bearer ${token.accessToken}`,
            withCredentials: true,
          },
        }
      );
      dispatch({
        type: UserActionTypes.DATA_LOADING,
        payload: true,
      });
    } catch (e) {
      dispatch({
        type: UserActionTypes.FETCH_USER_ERROR,
        payload: "An error has occurred",
      });
    }
  };
};

export const setLoading = (payload: boolean) => {
  return async (dispatch: Dispatch<UserAction>) => {
    dispatch({
      type: UserActionTypes.DATA_LOADING,
      payload: payload,
    });
  };
};
