import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../../redux-store/cart/cart.selector";

import { selectCurrentUserDetails } from "../../../redux-store/user/user.selector";
import { signOutStart } from "../../../redux-store/user/user.action";

import CheckOut from "../checkout/checkout.component";
import {
  StyledButton,
  StyledBuyNowCont,
  StyledContainer,
  StyledProfileCont,
} from "./profile.style";

const Profile = () => {
  const navigate = useNavigate();
  const { userName, email } = useSelector(selectCurrentUserDetails);
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const logOutUser = () => dispatch(signOutStart(navigate));

  return (
    <StyledContainer>
      <StyledProfileCont>
        <h2>User Profile</h2>
        <div>
          <h4>{userName}</h4>
          <h4>{email}</h4>
          <StyledButton
            type="button"
            onClick={logOutUser}
          >
            Log out
          </StyledButton>
        </div>
      </StyledProfileCont>
      {!!cartItems.length && (
        <StyledBuyNowCont>
          <h3>Checkout Now</h3>
          <CheckOut />
        </StyledBuyNowCont>
      )}
    </StyledContainer>
  );
};

export default Profile;
