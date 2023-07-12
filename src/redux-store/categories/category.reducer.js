import { CATEGORIES_TYPE } from "./category.types";

const CATEGORY_INITIAL_STATE = {
  categories: [],
  isLoading: false,
  error: null,
};

export const categoriesReducer = (
  state = CATEGORY_INITIAL_STATE,
  { type, payload } = {}
) => {
  switch (type) {
    case CATEGORIES_TYPE.FETCH_CATEGORIES_STAR:
      return { ...state, isLoading: true };
    case CATEGORIES_TYPE.FETCH_CATEGORIES_SUCCESS:
      return { ...state, categories: payload, isLoading: false };
    case CATEGORIES_TYPE.FETCH_CATEGORIES_FAILED:
      return { ...state, error: payload, isLoading: false };
    default:
      return state;
  }
};
