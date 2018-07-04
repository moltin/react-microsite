import React from 'react'
import { ProductGrid, Button } from '@moltin/react-shopkit'
import StyledButton from '../StyledButton'

import {
  Wrapper,
  ControlBtn,
  Slide,
  InnerContent,
  Summary,
  Price,
  Title,
  Description,
  ProductImage
} from './styles'
import Arrow from './arrow.svg'
import Loader from '../Loader'

const CarouselItem = ({ children, ...props }) => (
  <Slide {...props}>
    <InnerContent>{children}</InnerContent>
  </Slide>
)

export default ({ ...props }) => (
  <ProductGrid>
    {({ loading, error, data, included }) => {
      if (loading)
        return (
          <CarouselItem>
            <Loader />
          </CarouselItem>
        )

      if (error)
        return <CarouselItem>An error occurred loading products.</CarouselItem>

      return (
        <Wrapper
          renderCenterLeftControls={({ previousSlide }) => (
            <ControlBtn onClick={previousSlide}>
              <img src={Arrow} alt="Previous product" />
            </ControlBtn>
          )}
          renderCenterRightControls={({ nextSlide }) => (
            <ControlBtn onClick={nextSlide} rotate="true">
              <img src={Arrow} alt="Next product" />
            </ControlBtn>
          )}
          {...props}>
          {data.map((product, index) => {
            const imageId = product.relationships.main_image
              ? product.relationships.main_image.data.id
              : false

            const image = imageId
              ? included.main_images.find(img => img.id === imageId).link.href
              : ''

            return (
              <Slide key={index}>
                <InnerContent>
                  <Summary>
                    <Price>
                      {product.meta.display_price.with_tax.formatted}
                    </Price>
                    <Title>{product.name}</Title>
                    <Description>{product.description}</Description>

                    <Button outline id={product.id}>
                      {({ addToCart, ...props }) => (
                        <StyledButton {...props} onClick={addToCart}>
                          Add to Cart
                        </StyledButton>
                      )}
                    </Button>
                    {/* <Link
                      to={{
                        pathname: `/product/${product.id}`,
                        state: { modal: true }
                      }}>
                      More Details
                    </Link> */}
                  </Summary>
                  <ProductImage src={image} />
                </InnerContent>
              </Slide>
            )
          })}
        </Wrapper>
      )
    }}
  </ProductGrid>
)
