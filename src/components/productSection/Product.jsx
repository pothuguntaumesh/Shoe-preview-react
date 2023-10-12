import React from 'react'
import ImageSection from './ImageSection'
import ContentSection from './ContentSection'

const ProductSection = () => {
  return (
    <div className='flex flex-col mobile:flex-row mobile:w-4/5  mx-auto mt-2 justify-between gap-4'>
        <ImageSection/>
        <ContentSection/>
    </div>
  )
}

export default ProductSection
