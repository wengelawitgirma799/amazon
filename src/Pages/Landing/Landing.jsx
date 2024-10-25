import React from 'react'
import LayOut from '../../components/Layout/LayOut'
import Carousel from '../../components/Carousel/CarouselEffect'
import Category from '../../components/Catagory/Category'
import Product from '../../components/Product/Product1'
function Landing() {
  return (
    <LayOut>
        <Carousel/>
        <Category/>
        <Product/> 
    </LayOut>
  )
}

export default Landing