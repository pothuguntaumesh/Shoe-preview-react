import React, { useState } from 'react'
import cartButtonIcon from '../../assets/icon-cart.svg'

const ContentSection = () => {

    const [counter,setCounter]=useState(0)
    const incrementCounter=()=>{
        setCounter(prevVal=> {return prevVal+=1})
    }
    const decrementCounter=()=>{
        setCounter(prevVal=>{
            if(prevVal>0){
                return prevVal-=1
            }
            return prevVal
        })
    }
  return (
    <div className='mobile:basis-2/4 flex '>
        <div className='container px-6 mx-auto mobile:my-20 tablet:w-10/12'>
            <p className='text-orange font-bold'>SNEAKER COMPANY</p>
            <h1 className='mt-3 font-bold text-4xl mobile:mt-2 text-pale-black'>Fall Limited Edition Sneakers</h1>
            <p className='text-dark-grayish-blue mt-5 tablet:mt-8'>These low profile-sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer</p>
            <div className='mt-6 flex mobile:flex-row gap-6 mobile:mt-4 tablet:mt-8 items-center'>
                <p className='text-2xl font-bold text-pale-black'>$125.00</p>
                <p className='text-orange font-bold bg-pale-orange px-2 rounded'>50%</p>
            </div>
            <p className='text-grayish-blue mt-1 line-through font-semibold'>$250.00</p>
            <div className='flex-col mobile:flex mobile:flex-row mt-6 tablet:mt-8 gap-4'>
                <div className='bg-light-grayish-blue px-3 py-2 flex mobile:basis-4/12 justify-between items-center rounded-lg'>
                    <p className='text-orange font-bold text-2xl cursor-pointer' onClick={decrementCounter}>-</p>
                    <p className='font-bold text-xl '>{counter}</p>
                    <p onClick={incrementCounter} className='text-orange font-bold text-2xl cursor-pointer'>+</p>
                </div>
                <div className='flex bg-orange text-white mobile:basis-8/12 justify-center gap-4 items-center rounded-lg py-2 mt-3 mb-3 mobile:mt-0 mobile:mb-0 cursor-pointer'>
                    <div><img src={cartButtonIcon} alt="" /></div>
                    <p className>Add to Cart</p>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default ContentSection
