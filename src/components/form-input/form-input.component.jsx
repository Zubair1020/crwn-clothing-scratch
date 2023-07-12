import { forwardRef } from "react";
import {
  StyledFromInput,
  StyledFromInputLabel,
  StyledInputGroupCon,
} from "./form-input.style";

// eslint-disable-next-line react/display-name
const FormInput = forwardRef(
  ({ label, error, id, value, ...otherProps }, ref) => {
    return (
      <StyledInputGroupCon>
        <StyledFromInput
          $error={error}
          {...otherProps}
          ref={ref}
          id={id}
        />
        {label && (
          <StyledFromInputLabel
            htmlFor={id}
            $error={error}
            $shrink={value && value}
          >
            {label}
          </StyledFromInputLabel>
        )}
        {error && <span className="errorText">{error.message}</span>}
      </StyledInputGroupCon>
    );
  }
);

export default FormInput;
