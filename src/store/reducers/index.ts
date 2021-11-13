import { combineReducers } from "redux";
import { adminData } from "./admin";
import { userData } from "./auth";

export const rootReducer = combineReducers({
  user: userData,
  admin: adminData,
});

export type RootState = ReturnType<typeof rootReducer>;
