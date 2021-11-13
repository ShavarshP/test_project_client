// export interface TodoState {
//   todos: any[];
//   loading: boolean;
//   error: null | string;
//   page: number;
//   limit: number;
// }

export interface User {
  activationLink: string;
  email: string;
  isActivated: boolean;
  password: string;
  status: string;
  userName: string;
  __v: number;
  _id: string;
  billingPlan: string;
  visits: number;
  Click: number;
}

// export enum TodoActionTypes {
//   FETCH_TODOS = "FETCH_TODOS",
//   FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS",
//   FETCH_TODOS_ERROR = "FETCH_TODOS_ERROR",
//   SET_TODO_PAGE = "SET_TODO_PAGE",
//   USER_DATA_REGISTER = "USER_DATA_REGISTER",
// }
export enum UserActionTypes {
  USER_DATA_REGISTER = "USER_DATA_REGISTER",
  FETCH_USER_ERROR = "FETCH_USER_ERROR",
  FETCH_UPDATE_TOKEN_ERROR = "FETCH_UPDATE_TOKEN_ERROR",
  FETCH_UPDATE_TOKEN = "FETCH_UPDATE_TOKEN",
  USER_DATA_UPDATE_CLICK = "USER_DATA_UPDATE_CLICK",
  ALL_USER_DATA_REGISTER = "ALL_USER_DATA_REGISTER",
  ALL_FETCH_USER_ERROR = "ALL_FETCH_USER_ERROR",
}

interface FetchUserErrorAction {
  type: UserActionTypes.FETCH_USER_ERROR;
  payload: string;
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
  | AllFetchUserErrorAction;
