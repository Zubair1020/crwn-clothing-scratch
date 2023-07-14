import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";

import { selectIsCategoriesLoading } from "../../../redux-store/categories/category.selector";

import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
import Spinner from "../../spinner/spinner.component";

const Shop = () => {
  const isCategoriesLoading = useSelector(selectIsCategoriesLoading);

  return (
    <>
      {isCategoriesLoading ? (
        <Spinner />
      ) : (
        <>
          <Routes>
            <Route
              index
              element={<CategoriesPreview />}
            />

            <Route
              path=":category"
              element={<Category />}
            />
          </Routes>
        </>
      )}
    </>
  );
};
export default Shop;
