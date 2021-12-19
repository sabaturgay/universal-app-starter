import { loadStripe, Stripe } from '@stripe/stripe-js'

const stripeRef = {
  current: null as unknown as Stripe,
}

export const getStripePromise = async () => {
  stripeRef.current = (await loadStripe('****************'))!
  return stripeRef.current
}

getStripePromise()

export const getStripe = () => stripeRef.current
