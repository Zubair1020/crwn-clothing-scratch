import { takeLatest, all, call, put } from "redux-saga/effects";

import { USER_ACTION_TYPES } from "./user.types";

import {
  emailSignInStart,
  googleSignInStart,
  signInFailed,
  signInSuccess,
  signOutFailed,
  signOutSuccess,
  signUpFailed,
  signUpStart,
} from "./user.action";

const navigationPath = "/profile";

import {
  getCurrentUser,
  signInWithGooglePopup,
  signAuthUserWithEmailAndPassword,
  createAuthUserWithEmailAndPassword,
  updateCurrentUserProfile,
  signOutUser,
} from "../../utils/firebase/firebase.utils";

/*************   helper f()   ***************/
export function* isUserAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser);
    if (!userAuth) return;
    yield put(
      signInSuccess({
        id: userAuth.uid,
        details: { userName: userAuth.displayName, email: userAuth.email },
      })
    );
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* signInWithGoogle({ payload: { navigate } }) {
  yield call(googleSignInStart);
  try {
    yield call(signInWithGooglePopup);
    yield call(isUserAuthenticated);
    yield call(navigate, navigationPath);
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* emailSignIn({
  payload: { email, password, navigate, reset },
}) {
  yield call(emailSignInStart);
  try {
    yield call(signAuthUserWithEmailAndPassword, email, password);
    yield call(isUserAuthenticated);
    yield call(navigate, navigationPath);
    yield call(reset);
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* signUpUserWithEmail({
  payload: { displayName, email, password, navigate, reset },
}) {
  yield call(signUpStart);
  try {
    const { user } = yield call(
      createAuthUserWithEmailAndPassword,
      email,
      password
    );
    yield call(updateCurrentUserProfile, user, displayName);
    yield call(isUserAuthenticated);
    yield call(navigate, navigationPath);
    yield call(reset);
  } catch (error) {
    yield put(signUpFailed(error));
  }
}

export function* signOut({ payload: { navigate } }) {
  try {
    yield call(signOutUser);
    yield call(navigate, "/auth");
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailed, error);
  }
}

/*************   listener f()   ***************/
export function* onCheckUserSession() {
  yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onGoogleSignIn() {
  yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onEmailSignIn() {
  yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, emailSignIn);
}

export function* onEmailSignUp() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUpUserWithEmail);
}

export function* onSignOut() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOut);
}

export function* userSaga() {
  yield all([
    call(onCheckUserSession),
    call(onGoogleSignIn),
    call(onEmailSignIn),
    call(onEmailSignUp),
    call(onSignOut),
  ]);
}
