import React, { useState } from 'react'
import { useRouter } from 'next/router'

import { useSettings } from 'contexts/settings-context'
import Link from 'themes/crystallize/components/link'
import { useT } from 'lib/i18n'

import BurgerButton from './burger-button'
import LocaleSwitcher from './locale-switcher'
import {
  Outer,
  Nav,
  Logo,
  NavActions,
  NavList,
  NavListItem,
  PreviewBar,
} from './styles'

export default function Header({ simple, preview }) {
  const t = useT()
  const { mainNavigation } = useSettings()
  const router = useRouter()

  const [navOpen, setNavOpen] = useState(false)

  return (
    <>
      {preview && (
        <PreviewBar>
          You are in preview mode (
          <a href={`/api/preview?leave=${encodeURIComponent(router.asPath)}`}>
            leave
          </a>
          )
        </PreviewBar>
      )}
      <Outer simple={simple}>
        <Link href="/">
          <a>LCAYUSO</a>
        </Link>
        <Nav open={navOpen}>
          <NavList>
            {mainNavigation.map((category) => (
              <NavListItem key={category.path}>
                <Link as={category.path} href="/[...catalogue]">
                  <a onClick={() => setNavOpen(false)}>{category.name}</a>
                </Link>
              </NavListItem>
            ))}
          </NavList>
        </Nav>
        {process.env.NEXT_PUBLIC_DISABLE_LANGUAGES === 'true' ? null : (
          <NavActions open={navOpen}>
            <LocaleSwitcher />
          </NavActions>
        )}
        <BurgerButton active={navOpen} onClick={() => setNavOpen(!navOpen)} />
      </Outer>
    </>
  )
}
