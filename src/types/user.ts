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
}

// interface FetchTodoAction {
//   type: TodoActionTypes.FETCH_TODOS;
// }
// interface FetchTodoSuccessAction {
//   type: TodoActionTypes.FETCH_TODOS_SUCCESS;
//   payload: any[];
// }
interface FetchUserErrorAction {
  type: UserActionTypes.FETCH_USER_ERROR;
  payload: string;
}

interface FetchUpdateTokenErrorAction {
  type: UserActionTypes.FETCH_UPDATE_TOKEN_ERROR;
  payload: string;
}
interface FetchUpdateTokenAction {
  type: UserActionTypes.FETCH_UPDATE_TOKEN;
  payload: string;
}
// interface SetTodoPage {
//   type: TodoActionTypes.SET_TODO_PAGE;
//   payload: number;
// }
interface GetUserData {
  type: UserActionTypes.USER_DATA_REGISTER;
  payload: User;
}

// export type TodoAction =
//   | FetchTodoAction
//   | FetchTodoErrorAction
//   | FetchTodoSuccessAction
//   | SetTodoPage;

export type UserAction =
  | GetUserData
  | FetchUserErrorAction
  | FetchUpdateTokenErrorAction
  | FetchUpdateTokenAction;
