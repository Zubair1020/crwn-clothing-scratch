import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectCurrentUserId } from "../../../redux-store/user/user.selector";

import Logo from "../../../assets/crown.svg";
import CartIcon from "../../cart-icon/cart-icon.component";
import {
  StyledLogoContainer,
  StyledNavLinks,
  StyledNavLinksContainer,
  StyledNavigationContainer,
} from "./navigation.style";

const Navigation = () => {
  const isLoggedIn = useSelector(selectCurrentUserId);
  return (
    <StyledNavigationContainer>
      <StyledLogoContainer>
        <Link to="/">
          <img
            src={Logo}
            alt="Logo"
          />
        </Link>
      </StyledLogoContainer>
      <StyledNavLinksContainer>
        <StyledNavLinks to="/shop">shop</StyledNavLinks>
        {!isLoggedIn ? (
          <StyledNavLinks to="/auth">sign in</StyledNavLinks>
        ) : (
          <StyledNavLinks to="/profile">Profile</StyledNavLinks>
        )}
        <CartIcon />
      </StyledNavLinksContainer>
    </StyledNavigationContainer>
  );
};

export default Navigation;
