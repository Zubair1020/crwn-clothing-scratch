import createAction from "../../utils/reducer/reducer.utils";
import { USER_ACTION_TYPES } from "./user.types";

export const checkUserSession = () =>
  createAction(USER_ACTION_TYPES.CHECK_USER_SESSION);

//          Sign in
export const googleSignInStart = (navigate) =>
  createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, { navigate });

export const emailSignInStart = (email, password, navigate, reset) =>
  createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, {
    email,
    password,
    navigate,
    reset,
  });

export const signInSuccess = (user) =>
  createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user);

export const signInFailed = (error) =>
  createAction(USER_ACTION_TYPES.SIGN_UP_FAILED, error);

//         Sign Up
export const signUpStart = (displayName, email, password, navigate, reset) =>
  createAction(USER_ACTION_TYPES.SIGN_UP_START, {
    displayName,
    email,
    password,
    navigate,
    reset,
  });

// Currently not using it because don't need it now,
// we are working with signInSuccess for now
export const signUpSuccess = (user) =>
  createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user);

export const signUpFailed = (error) =>
  createAction(USER_ACTION_TYPES.SIGN_UP_FAILED, error);

//         Sign Out
export const signOutStart = (navigate) =>
  createAction(USER_ACTION_TYPES.SIGN_OUT_START, { navigate });

export const signOutSuccess = () =>
  createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS);

export const signOutFailed = (error) =>
  createAction(USER_ACTION_TYPES.SIGN_OUT_FAILED, error);
