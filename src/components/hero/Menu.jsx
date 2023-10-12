import React from 'react'
import closeButton from '../../assets/icon-close.svg'

const Menu = (props) => {
    // const closeButtonHandler=()=>{

    // }
  return (
    <div className='container h-screen w-11/12 border-r-indigo-400 flex flex-col items-start'>
        <div className='self-end p-3' onClick={props.closeButtonHandler}><img src={closeButton} className='h-8' alt="" /></div>
        <ul className='flex flex-col text-4xl items-start px-3 justify-around h-4/5'>
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </div>
  )
}

export default Menu
