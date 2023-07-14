import { CATEGORIES_TYPE } from "./category.types";
import createAction from "../../utils/reducer/reducer.utils";

export const fetchCategoriesStart = () =>
  createAction(CATEGORIES_TYPE.FETCH_CATEGORIES_STAR);

export const fetchCategoriesSuccess = (categories) =>
  createAction(CATEGORIES_TYPE.FETCH_CATEGORIES_SUCCESS, categories);

export const fetchCategoriesFailed = (error) =>
  createAction(CATEGORIES_TYPE.FETCH_CATEGORIES_FAILED, error);
