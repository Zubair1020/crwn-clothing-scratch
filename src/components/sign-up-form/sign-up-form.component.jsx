import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { createAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import {
  setCurrentUserDetails,
  setCurrentUserId,
} from "../../redux-store/user/user.action";

import FormInput from "../form-input/form-input.component";
import { StyledSignUpCon, StyledButton } from "./sign-up-form.style";

const SignUpFrom = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const password = watch("password");
  const navigate = useNavigate();
  const createUserWithEmail = async ({ displayName, email, password }) => {
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      reset();
      dispatch(setCurrentUserId(user.uid));
      navigate("/profile");
      await updateProfile(user, { displayName });
      dispatch(
        setCurrentUserDetails({
          displayName: user.displayName,
          email: user.email,
        })
      );
    } catch (error) {
      switch (error.message) {
        case "Firebase: Error (auth/email-already-in-use).":
          alert("This email is allday registered");
          break;
        default:
          console.log(`Unhandled type error ${error.message}`);
      }
      throw error;
    }
  };

  return (
    <>
      <StyledSignUpCon>
        <h2>Don't have an account ?</h2>
        <span>Sign up with email and password</span>

        <form onSubmit={handleSubmit((data) => createUserWithEmail(data))}>
          <FormInput
            id="sign-up-displayName"
            label="Display Name"
            type="text"
            value={watch("displayName")}
            error={errors.displayName}
            {...register("displayName", {
              required: "Name is required",
              minLength: {
                value: 3,
                message: "Name must be at least 3 characters",
              },
              maxLength: {
                value: 20,
                message: "Name can be at most 20 characters",
              },
            })}
          />

          <FormInput
            id="sign-up-email"
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
            id="sign-up-password"
            label="Password"
            type="password"
            error={errors.password}
            value={password}
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

          <FormInput
            id="sign-up-confirmPassword"
            label="Confirm Password"
            type="password"
            error={errors.confirmPassword}
            value={watch("confirmPassword")}
            {...register("confirmPassword", {
              required: "Confirm Password is required",
              validate: (value) =>
                value === password || "Password do not match",
            })}
          />

          <StyledButton
            disabled={
              !!(
                errors.displayName ||
                errors.email ||
                errors.password ||
                errors.confirmPassword
              )
            }
            type="submit"
          >
            Sign Up
          </StyledButton>
        </form>
      </StyledSignUpCon>
    </>
  );
};

export default SignUpFrom;
