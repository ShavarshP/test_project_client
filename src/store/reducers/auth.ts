// import { GetUserData, TodoActionTypes, TodoState } from "../../types/todo";

import {
  //   TodoActionTypes,
  User,
  UserAction,
  UserActionTypes,
  //   UserActionTypes2,
} from "../../types/user";

interface StateTyp {
  user: User;
  error: string;
  loading: boolean;
  updateToken: boolean;
}

const initialState: StateTyp = {
  user: {
    activationLink: "",
    email: "",
    isActivated: false,
    password: "",
    status: "",
    userName: "",
    __v: 0,
    _id: "",
    billingPlan: "",
    visits: 0,
    Click: 0,
  },
  error: "",
  loading: false,
  updateToken: false,
};

export const userData = (
  state = initialState,
  action: UserAction
): StateTyp => {
  switch (action.type) {
    case UserActionTypes.USER_DATA_REGISTER:
      return { ...state, user: action.payload, loading: true };
    case UserActionTypes.FETCH_USER_ERROR:
      return { ...state, error: action.payload };
    case UserActionTypes.FETCH_UPDATE_TOKEN_ERROR:
      return {
        ...state,
        error: action.payload,
        updateToken: true,
        loading: true,
      };
    case UserActionTypes.FETCH_UPDATE_TOKEN:
      return {
        ...state,
        error: "",
        updateToken: false,
        loading: false,
      };
    case UserActionTypes.USER_DATA_UPDATE_CLICK:
      state.user.Click += 1;
      return {
        ...state,
      };
    default:
      return state;
  }
};
