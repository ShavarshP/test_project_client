import { User, UserAction, UserActionTypes } from "../../types/user";

interface StateTyp {
  allUsers: User[];
  adminLoading: boolean;
  adminError: string;
}

const initialState: StateTyp = {
  allUsers: [],
  adminLoading: false,
  adminError: "",
};

export const adminData = (
  state = initialState,
  action: UserAction
): StateTyp => {
  switch (action.type) {
    case UserActionTypes.ALL_USER_DATA_REGISTER:
      return { ...state, allUsers: action.payload, adminLoading: true };
    case UserActionTypes.ALL_FETCH_USER_ERROR:
      return { ...state, adminError: action.payload, adminLoading: true };
    case UserActionTypes.ADMIn_DATA_LOADING:
      return { ...state, adminLoading: action.payload };
    default:
      return state;
  }
};
