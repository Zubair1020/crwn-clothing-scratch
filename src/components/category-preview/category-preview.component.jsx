import ProductCard from "../product-card/product-card.component";
import {
  StyledCategoryPreviewCon,
  StyledPreviewCon,
  StyledTitle,
} from "./category-preview.style";

const CategoryPreview = ({ title, products }) => {
  return (
    <StyledCategoryPreviewCon>
      <h2>
        <StyledTitle to={title}>{title}</StyledTitle>
      </h2>
      <StyledPreviewCon>
        {products
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
      </StyledPreviewCon>
    </StyledCategoryPreviewCon>
  );
};

export default CategoryPreview;
