import React from 'react'

import { useBasket } from 'themes/crystallize/components/basket'
import Layout from 'themes/crystallize/components/layout'
import OrderItems from 'themes/crystallize/components/order-items'
import { Totals } from 'themes/crystallize/components/basket/totals'
import { useT } from 'lib/i18n'

import Payment from './Payment'
import {
  Outer,
  Inner,
  SectionHeader,
  Container,
} from './CheckoutTemplate.styles'

export default function CheckoutTemplate() {
  const basket = useBasket()
  const t = useT()

  if (basket.status !== 'ready') {
    return <Outer center>{t('basket.loading')}</Outer>
  }

  const { cart } = basket

  if (!cart?.length) {
    return <Outer center>{t('basket.empty', { context: 'inCheckout' })}</Outer>
  }

  return (
    <Layout title={t('checkout.title')} simple>
      <Outer>
        <Inner>
          <Container>
            <SectionHeader>{t('checkout.title')}</SectionHeader>
            <Payment />
          </Container>
          <Container>
            <SectionHeader>{t('basket.title')}</SectionHeader>
            <OrderItems cart={cart} />
            <div style={{ padding: '0 15px' }}>
              <Totals />
            </div>
          </Container>
        </Inner>
      </Outer>
    </Layout>
  )
}
