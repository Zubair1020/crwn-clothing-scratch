import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";

import {
  emailSignInStart,
  googleSignInStart,
} from "../../redux-store/user/user.action";

import { selectCurrentUserLoading } from "../../redux-store/user/user.selector";

import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { StyledButtonsCon, StyledSignInCon } from "./sign-in-form.style.jsx";

const SignInForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isCurrentUserLoading = useSelector(selectCurrentUserLoading);

  const signInUserWithEmail = ({ email, password }) =>
    dispatch(emailSignInStart(email, password, navigate, reset));

  const signInWithGoogle = () => dispatch(googleSignInStart(navigate));

  return (
    <StyledSignInCon>
      <h2>I already have an account</h2>
      <span>Sign in with email and password</span>

      <form onSubmit={handleSubmit((data) => signInUserWithEmail(data))}>
        <FormInput
          id="sign-in-email"
          label="Email"
          type="email"
          error={errors.email}
          value={watch("email")}
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
        />

        <FormInput
          id="sign-in-password"
          label="Password"
          type="password"
          error={errors.password}
          value={watch("password")}
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters long",
            },
            maxLength: {
              value: 20,
              message: "Password cannot exceed 20 characters",
            },
          })}
        />
        <StyledButtonsCon>
          <Button
            type="submit"
            isLoading={isCurrentUserLoading.signIn}
            disabled={!!(errors.email || errors.password)}
          >
            Sign IN
          </Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={signInWithGoogle}
            isLoading={isCurrentUserLoading.googleLogIn}
          >
            GOOGLE SIGN IN
          </Button>
        </StyledButtonsCon>
      </form>
    </StyledSignInCon>
  );
};

export default SignInForm;
