import { fetchCrystallizeOrder } from 'lib-api/crystallize/order'

export { default } from 'themes/crystallize/templates/CheckoutTemplate/Confirmation'

export async function getServerSideProps({ query: { orderId } }) {
  const order = await fetchCrystallizeOrder(orderId)

  return {
    props: {
      order,
    },
  }
}
