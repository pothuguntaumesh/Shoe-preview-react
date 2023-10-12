import React, { useState } from 'react'
import firstImage from '../../assets/image-product-1.jpg'
import firstThumbnail from '../../assets/image-product-1-thumbnail.jpg'
import secondThumbnail from '../../assets/image-product-2-thumbnail.jpg'
import thirdThumbnail from '../../assets/image-product-3-thumbnail.jpg'
import fourthThumbnail from '../../assets/image-product-4-thumbnail.jpg'
import secondImage from '../../assets/image-product-2.jpg'
import thirdImage from '../../assets/image-product-3.jpg'
import fourthImage from '../../assets/image-product-4.jpg'
import previousIcon from '../../assets/icon-previous.svg'
import nextIcon from '../../assets/icon-next.svg'


const ImageSection = () => {
    const [currentImage,setCurrentImage]=useState(firstImage)
    const firstImageHandler=()=>{
        setCurrentImage(firstImage)
    }
    const secondImageHandler=()=>{
        setCurrentImage(secondImage)
    }
    const thirdImageHandler=()=>{
        setCurrentImage(thirdImage)
    }
    const fourthImageHandler=()=>{
        setCurrentImage(fourthImage)
    }
  return (

    <div className='mobile:basis-2/4 flex justify-center'>
        <div className='container  mobile:rounded-lg mx-auto mobile:my-16 flex flex-col gap-8 mobile:w-12/12 tablet:w-9/12'>
            <div className='before:content-[before]'><img src={currentImage} className='mobile:rounded-lg' alt="" /></div>
            <div className=' hidden container gap-6 mobile:flex flex-row '>
                <div onClick={firstImageHandler}>
                <img  className={currentImage===firstImage?`rounded-lg border-4 border-orange`:`rounded-lg`} src={firstThumbnail} alt="" />
                </div>
                <div onClick={secondImageHandler}>
                <img  className={currentImage===secondImage?`rounded-lg border-4 border-orange`:`rounded-lg`} src={secondThumbnail} alt="" />
                </div>
                <div onClick={thirdImageHandler}>
                <img className={currentImage===thirdImage?`rounded-lg border-4 border-orange`:`rounded-lg`} src={thirdThumbnail} alt="" />
                </div>
                <div onClick={fourthImageHandler}>
                <img className={currentImage===fourthImage?`rounded-lg border-4 border-orange`:`rounded-lg`} src={fourthThumbnail} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default ImageSection
