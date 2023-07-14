import { useSelector } from "react-redux";

import { selectCategoriesMap } from "../../../redux-store/categories/category.selector";

import CategoryPreview from "../../category-preview/category-preview.component";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);

  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview
            key={title}
            title={title}
            products={products}
          />
        );
      })}
    </>
  );
};
export default CategoriesPreview;
