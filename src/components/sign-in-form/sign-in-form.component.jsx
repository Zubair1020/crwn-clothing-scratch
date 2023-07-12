import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import {
  setCurrentUserDetails,
  setCurrentUserId,
} from "../../redux-store/user/user.action";
import {
  signAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";

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

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signInUserWithEmail = async ({ email, password }) => {
    try {
      const { user } = await signAuthUserWithEmailAndPassword(email, password);
      dispatch(setCurrentUserId(user.uid));
      navigate("/profile");
      dispatch(
        setCurrentUserDetails({
          displayName: user.displayName,
          email: user.email,
        })
      );
      reset();
    } catch (error) {
      switch (error.message) {
        case "Firebase: Error (auth/user-not-found).":
          alert(`This email is not registered. Sign up first`);
          break;
        case "Firebase: Error (auth/wrong-password).":
          alert(`Incorrect password`);
          break;
        default:
          console.log(`Unhandled type error ${error.message}`);
      }
      throw error;
    }
  };

  const signInWithGoogle = async () => {
    try {
      const { user } = await signInWithGooglePopup();
      dispatch(setCurrentUserId(user.uid));
      navigate("/profile");
      dispatch(
        setCurrentUserDetails({
          displayName: user.displayName,
          email: user.email,
        })
      );
      reset();
    } catch (error) {
      console.log(error.message);
      throw error;
    }
  };

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
            disabled={!!(errors.email || errors.password)}
          >
            Sign IN
          </Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={signInWithGoogle}
          >
            GOOGLE SIGN IN
          </Button>
        </StyledButtonsCon>
      </form>
    </StyledSignInCon>
  );
};

export default SignInForm;
