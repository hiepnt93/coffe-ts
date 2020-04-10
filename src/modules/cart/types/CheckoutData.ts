import ShippingDetails from '../../checkout/types/ShippingDetails'
import ShippingMethod from './ShippingMethod'
import PaymentMethod from './PaymentMethod'
import PaymentDetails from '../../checkout/types/PaymentDetails'

export default interface CheckoutData {
  shippingDetails: ShippingDetails,
  shippingMethods: ShippingMethod[],
  paymentMethods: PaymentMethod[],
  paymentDetails: PaymentDetails,
  taxCountry?: string
}
