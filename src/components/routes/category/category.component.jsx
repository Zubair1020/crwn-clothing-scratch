import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../../redux-store/categories/category.selector";

import ProductCard from "../../product-card/product-card.component";
import { StyledCategoryCon, StyledCategoryTitle } from "./category.style";

const Category = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const categoriesMap = useSelector(selectCategoriesMap);
  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, products]);

  return (
    <>
      <StyledCategoryTitle>{category}</StyledCategoryTitle>
      <StyledCategoryCon>
        {products &&
          products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
      </StyledCategoryCon>
    </>
  );
};

export default Category;
