import React from 'react'

import Layout from 'themes/crystallize/components/layout'
import Grid, { GridItem } from 'themes/crystallize/components/grid'
import { useT } from 'lib/i18n'

import { Outer } from './HomeTemplate.styles'

export default function HomeTemplate({ grid, preview }) {
  const t = useT()

  return (
    <Layout title={t('frontpage.title')} preview={preview}>
      <Outer>
        <h1>This is from dindim</h1>
        {grid && (
          <Grid
            model={grid}
            cellComponent={({ cell }) => (
              <GridItem data={cell.item} gridCell={cell} />
            )}
          />
        )}
      </Outer>
    </Layout>
  )
}
