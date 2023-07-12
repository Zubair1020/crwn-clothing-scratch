import { createSelector } from "reselect";

const selectCategories = ({ categories }) => categories.categories;
const selectLoading = ({ categories }) => categories.isLoading;
const selectError = ({ categories }) => categories.error;

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) => {
    return categories.reduce((acc, docSnapshot) => {
      const { title, items } = docSnapshot;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {});
  }
);

export const selectIsCategoriesLoading = createSelector(
  [selectLoading],
  (isLoading) => isLoading
);

export const selectCategoriesError = createSelector(
  [selectError],
  (error) => error
);
