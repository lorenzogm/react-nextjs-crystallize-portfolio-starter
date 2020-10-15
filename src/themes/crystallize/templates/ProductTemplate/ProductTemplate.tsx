import React, { useState } from 'react'
import Img from '@crystallize/react-image'
import ContentTransformer from 'themes/crystallize/ui/content-transformer'

import { screen } from 'themes/crystallize/ui'
import Layout from 'themes/crystallize/components/layout'
import ShapeComponents from 'themes/crystallize/components/shape/components'

import Topics from 'themes/crystallize/components/topics'
import VariantSelector from './VariantSelector'

import {
  Outer,
  Sections,
  Media,
  MediaInner,
  Name,
  Info,
  Summary,
  Content,
  Specs,
  Description,
} from './ProductTemplate.styles'

export default function ProductTemplate({ product, preview }) {
  // Set the selected variant to the default
  const [selectedVariant, setSelectedVariant] = useState(
    product.variants.find((v) => v.isDefault),
  )

  function onVariantChange(variant) {
    setSelectedVariant(variant)
  }

  const summaryComponent = product.components.find((c) => c.name === 'Summary')
  const descriptionComponent = product.components.find(
    (c) => c.name === 'Description',
  )
  const specs = product.components.find((c) => c.name === 'Specs')
  const componentsRest = product.components?.filter(
    (c) => !['Summary', 'Description', 'Specs'].includes(c.name),
  )

  return (
    <Layout title={product.name} preview={preview}>
      <Outer>
        <Sections>
          <Media>
            <MediaInner>
              <Img
                {...selectedVariant.image}
                sizes={`(max-width: ${screen.sm}px) 400px, 60vw`}
                alt={product.name}
              />
            </MediaInner>
          </Media>
          <Info>
            <Name>{product.name}</Name>
            {summaryComponent && (
              <Summary>
                <ContentTransformer {...summaryComponent?.content?.json} />
              </Summary>
            )}

            {product.variants?.length > 1 && (
              <VariantSelector
                variants={product.variants}
                selectedVariant={selectedVariant}
                onVariantChange={onVariantChange}
              />
            )}
          </Info>
        </Sections>
        <Content>
          {descriptionComponent && (
            <Description>
              <ShapeComponents
                className="description"
                components={[descriptionComponent]}
              />
            </Description>
          )}
          {specs && (
            <Specs>
              <ShapeComponents components={[specs]} />
            </Specs>
          )}
        </Content>

        {product?.topics?.length && <Topics topicMaps={product.topics} />}

        <ShapeComponents components={componentsRest} />
      </Outer>
    </Layout>
  )
}
