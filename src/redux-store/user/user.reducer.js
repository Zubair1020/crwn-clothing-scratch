import { USER_ACTION_TYPES } from "./user.types";

const USER_INITIAL_STATE = {
  currentUserId: null,
  currentUserDetails: {},
};

export const userReducer = (
  state = USER_INITIAL_STATE,
  { type, payload } = {}
) => {
  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER_ID:
      return {
        ...state,
        currentUserId: payload,
      };
    case USER_ACTION_TYPES.SET_CURRENT_USER_DETAILS:
      return {
        ...state,
        currentUserDetails: payload,
      };
    default:
      return state;
  }
};
