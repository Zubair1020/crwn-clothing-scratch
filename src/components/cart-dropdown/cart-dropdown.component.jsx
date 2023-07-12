import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectCartItems } from "../../redux-store/cart/cart.selector";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import {
  StyledCartDropdownCon,
  StyledCartItemsCon,
  StyledEmptyMessage,
} from "./cart-dropdown.styles";
import { setIsCartOpen } from "../../redux-store/cart/cart.action";

const CartDropdown = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const handelCheckOutClick = () => {
    dispatch(setIsCartOpen(false));
    navigate("/checkout");
  };
  return (
    <StyledCartDropdownCon>
      <StyledCartItemsCon>
        {cartItems.length ? (
          cartItems.map((item) => (
            <CartItem
              key={item.id}
              cartItem={item}
            />
          ))
        ) : (
          <StyledEmptyMessage>Your cart is empty</StyledEmptyMessage>
        )}
      </StyledCartItemsCon>
      <Button onClick={handelCheckOutClick}>GO TO CHECKOUT</Button>
    </StyledCartDropdownCon>
  );
};

export default CartDropdown;
