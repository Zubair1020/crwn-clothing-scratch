import { loadStripe } from "@stripe/stripe-js";

const REACT_APP_STRIPE_PUBLISHABLE_KEY =
  "pk_test_51NUF1aJOdqTlKkgGKozVsvZ1EwPzr5iVdS23CP4gsPn5hpqyy60GsSTVQdzK3C6Kc87Iqkn00HwtturKVYIjqXfz00s2G6V36v";

export const stripePromise = loadStripe(REACT_APP_STRIPE_PUBLISHABLE_KEY);
