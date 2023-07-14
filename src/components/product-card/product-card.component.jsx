import { useDispatch, useSelector } from "react-redux";

import { selectCartItems } from "../../redux-store/cart/cart.selector";
import { addItemToCart } from "../../redux-store/cart/cart.action";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import {
  StyledFooterCon,
  StyledName,
  StyledPrice,
  StyledProductCardCon,
} from "./product-card.style";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;

  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <StyledProductCardCon>
      <img
        src={imageUrl}
        alt={name}
      />
      <StyledFooterCon>
        <StyledName>{name}</StyledName>
        <StyledPrice>{price}</StyledPrice>
      </StyledFooterCon>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.base}
        onClick={addProductToCart}
      >
        Add to card
      </Button>
    </StyledProductCardCon>
  );
};

export default ProductCard;
