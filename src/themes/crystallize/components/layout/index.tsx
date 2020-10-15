import React from 'react'
import Head from 'next/head'
import CrystallizeLayout from '@crystallize/react-layout'

import { Spinner } from 'themes/crystallize/ui'
import GlobalStyle from 'themes/crystallize/ui/global'

import Header from './header'
import Footer from './footer'
import {
  Main,
  LoadingWrapper,
  SpinnerWrapper,
  LoadingTextWrapper,
} from './styles'

function Loader({ children }) {
  return (
    <LoadingWrapper>
      <div>
        <SpinnerWrapper>
          <Spinner size="40" />
        </SpinnerWrapper>
        <LoadingTextWrapper>{children || 'Please wait...'}</LoadingTextWrapper>
      </div>
    </LoadingWrapper>
  )
}

export default function Layout({
  children,
  title,
  description,
  simple,
  loading,
  preview,
}) {
  return (
    <>
      <Head>
        <title key="title">{title || ''}</title>
        {description && (
          <meta key="description" name="description" content={description} />
        )}
      </Head>
      <GlobalStyle />

      {simple ? (
        <>
          <Header simple={simple} preview={preview} />
          <Main>{loading ? <Loader /> : children}</Main>
          <Footer />
        </>
      ) : (
        <CrystallizeLayout>
          <Header simple={simple} preview={preview} />
          <Main>{loading ? <Loader /> : children}</Main>
          <Footer />
        </CrystallizeLayout>
      )}
    </>
  )
}
