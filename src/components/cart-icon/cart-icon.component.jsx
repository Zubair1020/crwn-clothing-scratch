import { useDispatch, useSelector } from "react-redux";

import {
  selectCartCount,
  selectIsCartOpen,
} from "../../redux-store/cart/cart.selector";
import { setIsCartOpen } from "../../redux-store/cart/cart.action";

import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import ShoppingBagSVG from "../../assets/shopping-bag.svg";
import {
  StyledCartIconCon,
  StyledItemCount,
  StyledShoppingIcon,
} from "./cart-icon.style";

const CartIcon = () => {
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen);
  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));
  return (
    <StyledCartIconCon onClick={toggleIsCartOpen}>
      <StyledShoppingIcon src={ShoppingBagSVG} />
      <StyledItemCount>{cartCount}</StyledItemCount>
      {isCartOpen && <CartDropdown />}
    </StyledCartIconCon>
  );
};

export default CartIcon;
