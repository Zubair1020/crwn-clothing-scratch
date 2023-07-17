import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

import { useSelector } from "react-redux";
import { selectCartTotal } from "../../redux-store/cart/cart.selector";
import { selectCurrentUserDetails } from "../../redux-store/user/user.selector";
import { useState } from "react";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { StyledFrom, StyledPaymentFormContainer } from "./payment-form.style";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const amount = useSelector(selectCartTotal);

  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const { userName = "Gust", email = "gust@email.com" } = useSelector(
    selectCurrentUserDetails
  );

  const paymentHandler = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) return;
    setIsProcessingPayment(true);

    try {
      const { paymentIntent } = await fetch(
        "/.netlify/functions/create-payment-intent",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ amount: amount * 100 }),
        }
      ).then((res) => res.json());

      const clientSecret = paymentIntent.client_secret;

      if (!clientSecret) return;

      const paymentResult = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: userName,
            email: email,
          },
        },
      });

      if (paymentResult.error) {
        setIsProcessingPayment(false);
        throw new Error(paymentResult.error.message);
      } else if (paymentResult.paymentIntent.status === "succeeded") {
        setIsProcessingPayment(false);
        alert("Payment Successful");
      }
    } catch (error) {
      alert(error.message);
      setIsProcessingPayment(false);
      throw error;
    }
  };
  return (
    <StyledPaymentFormContainer>
      <StyledFrom onSubmit={paymentHandler}>
        <h2>Credit Card Payment:</h2>
        <CardElement />
        <Button
          buttonType={BUTTON_TYPE_CLASSES.inverted}
          isLoading={isProcessingPayment}
        >
          Pay now
        </Button>
      </StyledFrom>
    </StyledPaymentFormContainer>
  );
};

export default PaymentForm;
