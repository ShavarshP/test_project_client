export interface User {
  activationLink: string;
  email: string;
  isActivated: boolean;
  password: string;
  status: string;
  userName: string;
  fullName: string;
  __v: number;
  _id: string;
  billingPlan: string;
  visits: number;
  Click: number;
}

export enum UserActionTypes {
  USER_DATA_REGISTER = "USER_DATA_REGISTER",
  FETCH_USER_ERROR = "FETCH_USER_ERROR",
  FETCH_UPDATE_TOKEN_ERROR = "FETCH_UPDATE_TOKEN_ERROR",
  FETCH_UPDATE_TOKEN = "FETCH_UPDATE_TOKEN",
  USER_DATA_UPDATE_CLICK = "USER_DATA_UPDATE_CLICK",
  ALL_USER_DATA_REGISTER = "ALL_USER_DATA_REGISTER",
  ALL_FETCH_USER_ERROR = "ALL_FETCH_USER_ERROR",
  DATA_LOADING = "USER_DATA_LOADING",
  DATA_USER_LOGOUT = "DATA_USER_LOGOUT",
  ADMIn_DATA_LOADING = "ADMIn_DATA_LOADING",
}

interface FetchUserErrorAction {
  type: UserActionTypes.FETCH_USER_ERROR;
  payload: string;
}

interface DataLoading {
  type: UserActionTypes.DATA_LOADING;
  payload: boolean;
}
interface AdminDataLoading {
  type: UserActionTypes.ADMIn_DATA_LOADING;
  payload: boolean;
}
interface DataUserLogout {
  type: UserActionTypes.DATA_USER_LOGOUT;
  payload: boolean;
}

interface AllFetchUserErrorAction {
  type: UserActionTypes.ALL_FETCH_USER_ERROR;
  payload: string;
}

interface GetAllUserData {
  type: UserActionTypes.ALL_USER_DATA_REGISTER;
  payload: User[];
}

interface UserUpdateUpdateClick {
  type: UserActionTypes.USER_DATA_UPDATE_CLICK;
  payload: number;
}
interface FetchUpdateTokenErrorAction {
  type: UserActionTypes.FETCH_UPDATE_TOKEN_ERROR;
  payload: string;
}
interface FetchUpdateTokenAction {
  type: UserActionTypes.FETCH_UPDATE_TOKEN;
  payload: string;
}

interface GetUserData {
  type: UserActionTypes.USER_DATA_REGISTER;
  payload: User;
}

export type UserAction =
  | GetUserData
  | FetchUserErrorAction
  | FetchUpdateTokenErrorAction
  | FetchUpdateTokenAction
  | UserUpdateUpdateClick
  | GetAllUserData
  | AllFetchUserErrorAction
  | DataLoading
  | DataUserLogout
  | AdminDataLoading;
