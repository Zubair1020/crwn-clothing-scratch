import { takeLatest, all, call, put } from "redux-saga/effects";
import {
  fetchCategoriesFailed,
  fetchCategoriesSuccess,
} from "./category.action";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { CATEGORIES_TYPE } from "./category.types";

export function* fetchCategoriesAsync() {
  try {
    const categoriesSnapshot = yield call(getCategoriesAndDocuments);
    yield put(fetchCategoriesSuccess(categoriesSnapshot));
  } catch (error) {
    yield put(fetchCategoriesFailed(error));
    throw error;
  }
}

export function* onFetchCategories() {
  yield takeLatest(CATEGORIES_TYPE.FETCH_CATEGORIES_STAR, fetchCategoriesAsync);
}

export function* categoriesSaga() {
  yield all([call(onFetchCategories)]);
}
