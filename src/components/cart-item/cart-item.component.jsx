import { StyledCartItemCon, StyledItemDetailsCon } from "./cart-item.styles";

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <StyledCartItemCon>
      <img
        src={imageUrl}
        alt={`${name}`}
      />
      <StyledItemDetailsCon>
        <span className="name">{name}</span>
        <span className="price">
          {quantity} X ${price}
        </span>
      </StyledItemDetailsCon>
    </StyledCartItemCon>
  );
};

export default CartItem;
