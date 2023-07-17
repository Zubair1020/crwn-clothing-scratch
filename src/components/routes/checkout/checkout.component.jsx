import { useSelector } from "react-redux";

import {
  selectCartItems,
  selectCartTotal,
} from "../../../redux-store/cart/cart.selector";

import CheckoutItem from "../../checkout-item/checkout-item.component";
import {
  StyledCheckoutCon,
  StyledCheckoutHeaderCon,
  StyledHeaderBlockCon,
  StyledTotal,
} from "./checkout.style";
import PaymentForm from "../../payment-form/payment-form.component";

const CheckOut = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <StyledCheckoutCon>
      <StyledCheckoutHeaderCon>
        <StyledHeaderBlockCon>
          <span>Product</span>
        </StyledHeaderBlockCon>
        <StyledHeaderBlockCon>
          <span>Description</span>
        </StyledHeaderBlockCon>
        <StyledHeaderBlockCon>
          <span>Quantity</span>
        </StyledHeaderBlockCon>
        <StyledHeaderBlockCon>
          <span>Price</span>
        </StyledHeaderBlockCon>
        <StyledHeaderBlockCon>
          <span>Remove</span>
        </StyledHeaderBlockCon>
      </StyledCheckoutHeaderCon>
      {cartItems.map((cartItem) => (
        <CheckoutItem
          cartItem={cartItem}
          key={cartItem.id}
        />
      ))}

      <StyledTotal>Total: ${cartTotal}</StyledTotal>
      <PaymentForm />
    </StyledCheckoutCon>
  );
};
export default CheckOut;
