import React from 'react'
import dynamic from 'next/dynamic'

import { simplyFetchFromGraph } from 'lib/graph'

import query from './query'

const FolderTemplate = dynamic(
  () =>
    import(
      `themes/${
        process.env.NEXT_PUBLIC_THEME || 'crystallize'
      }/templates/FolderTemplate/FolderTemplate`
    ),
)

export async function getData({ asPath, language, preview = null }) {
  const { data } = await simplyFetchFromGraph({
    query,
    variables: {
      path: asPath,
      language,
      version: preview ? 'draft' : 'published',
    },
  })

  return { ...data, preview }
}

export default function FolderPage({ folder, preview }) {
  return <FolderTemplate folder={folder} preview={preview} />
}
