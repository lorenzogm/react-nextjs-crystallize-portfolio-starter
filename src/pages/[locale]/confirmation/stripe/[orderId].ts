import { fetchCrystallizeOrder } from 'lib-api/crystallize/order'

export { default } from 'page-components/CheckoutTemplate/Confirmation'

export async function getServerSideProps({ query: { orderId } }) {
  const order = await fetchCrystallizeOrder(orderId)

  return {
    props: {
      order,
    },
  }
}
