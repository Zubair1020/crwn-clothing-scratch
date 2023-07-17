import { USER_ACTION_TYPES } from "./user.types";

const USER_INITIAL_STATE = {
  currentUser: {
    id: null,
    details: { userName: undefined, email: undefined },
  },
  isLoading: {
    signUp: false,
    signIn: false,
    googleLogIn: false,
  },
  error: null,
};

// A helper f() to reset set and reset Loading state
const setLoading = (loadingName) => {
  const isLoading = {
    signIn: false,
    googleLogIn: false,
    signUp: false,
  };

  isLoading[loadingName] = true;

  return isLoading;
};

export const userReducer = (
  state = USER_INITIAL_STATE,
  { type, payload } = {}
) => {
  switch (type) {
    case USER_ACTION_TYPES.EMAIL_SIGN_IN_START:
      return {
        ...state,
        isLoading: setLoading("signIn"),
      };
    case USER_ACTION_TYPES.GOOGLE_SIGN_IN_START:
      return {
        ...state,
        isLoading: setLoading("googleLogIn"),
      };
    case USER_ACTION_TYPES.SIGN_UP_START:
      return {
        ...state,
        isLoading: setLoading("signUp"),
      };
    case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: payload,
        isLoading: setLoading(),
      };
    case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: {
          id: null,
          details: { userName: undefined, email: undefined },
        },
        isLoading: setLoading(),
      };
    case USER_ACTION_TYPES.SIGN_IN_FAILED:
    case USER_ACTION_TYPES.SIGN_UP_FAILED:
    case USER_ACTION_TYPES.SIGN_OUT_FAILED:
      return {
        ...state,
        error: payload,
        isLoading: setLoading(),
      };
    default:
      return state;
  }
};
