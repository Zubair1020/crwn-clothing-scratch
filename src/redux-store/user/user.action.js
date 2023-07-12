import createAction from "../../utils/reducer/reducer.utils";
import { USER_ACTION_TYPES } from "./user.types";

export const setCurrentUserId = (userId) =>
  createAction(USER_ACTION_TYPES.SET_CURRENT_USER_ID, userId);

export const setCurrentUserDetails = (userDetails) =>
  createAction(USER_ACTION_TYPES.SET_CURRENT_USER_DETAILS, userDetails);
