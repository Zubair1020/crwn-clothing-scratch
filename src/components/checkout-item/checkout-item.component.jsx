import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../redux-store/cart/cart.selector";
import {
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart,
} from "../../redux-store/cart/cart.action";

import {
  StyledCheckoutItemCon,
  StyledDeleteButton,
  StyledImageCon,
  StyledName,
  StyledPrice,
  StyledQuantityCon,
} from "./checkout-item.style";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
  const clearItemHandler = () =>
    dispatch(clearItemFromCart(cartItems, cartItem));
  const removeItemHandler = () =>
    dispatch(removeItemFromCart(cartItems, cartItem));

  return (
    <StyledCheckoutItemCon>
      <StyledImageCon>
        <img
          src={imageUrl}
          alt={`${name}`}
        />
      </StyledImageCon>
      <StyledName>{name}</StyledName>
      <StyledQuantityCon as="div">
        <div
          className="arrow"
          onClick={removeItemHandler}
        >
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div
          className="arrow"
          onClick={addItemHandler}
        >
          &#10095;
        </div>
      </StyledQuantityCon>
      <StyledPrice>${price}</StyledPrice>

      <div className="remove-button">
        <StyledDeleteButton onClick={clearItemHandler}>
          &#10005;
        </StyledDeleteButton>
      </div>
    </StyledCheckoutItemCon>
  );
};

export default CheckoutItem;
