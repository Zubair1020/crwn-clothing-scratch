import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUserDetails } from "../../../redux-store/user/user.selector";
import { selectCartItems } from "../../../redux-store/cart/cart.selector";
import {
  setCurrentUserDetails,
  setCurrentUserId,
} from "../../../redux-store/user/user.action";

import CheckOut from "../checkout/checkout.component";
import {
  StyledButton,
  StyledBuyNowCont,
  StyledContainer,
  StyledProfileCont,
} from "./profile.style";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUserDetails = useSelector(selectCurrentUserDetails);
  const cartItems = useSelector(selectCartItems);

  const logOutUser = () => {
    dispatch(setCurrentUserId(null));
    dispatch(setCurrentUserDetails({}));
    navigate("/auth");
  };
  return (
    <StyledContainer>
      <StyledProfileCont>
        <h2>User Profile</h2>
        <div>
          <h4>{currentUserDetails.displayName}</h4>
          <h4>{currentUserDetails.email}</h4>
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
