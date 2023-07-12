import SignInForm from "../../sign-in-form/sign-in-form.component";
import SignUpFrom from "../../sign-up-form/sign-up-form.component";
import { StyledAuthCon } from "./auth.style";

const Auth = () => {
  return (
    <StyledAuthCon>
      <SignInForm />
      <SignUpFrom />
    </StyledAuthCon>
  );
};

export default Auth;
