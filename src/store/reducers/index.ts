import { combineReducers } from "redux";
import { userData } from "./auth";

export const rootReducer = combineReducers({
  user: userData,
});

export type RootState = ReturnType<typeof rootReducer>;
