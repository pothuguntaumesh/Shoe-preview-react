import React from 'react'
import iconCart from '../../assets/icon-cart.svg'
import imageAvatar from '../../assets/image-avatar.png'
import menuIcon from '../../assets/icon-menu.svg'
import Menu from './Menu'

const NavBar = (props) => {
  return (
  <>
  {props.menuClicked && <Menu closeButtonHandler={props.closeButtonHandler}/>}
  {!props.menuClicked && <div className='container px-2 mobile:w-4/5 mx-auto py-4 mobile:border-b-2 flex flex-row justify-between items-center font-kumbh text-dark-grayish-blue'>
    <div className='mobile:hidden items-center mr-2' onClick={props.menuClickHandler}><img src={menuIcon} alt="" /></div>
    <h1 className='font-semibold  text-pale-black mr-3 '>sneakers</h1>
    <ul className='hidden mobile:flex mobile:flex-row gap-6 items-center mr-3 sm:gap-1 mobile:gap-4'>
        <li>Collections</li>
        <li>Men</li>
        <li>Women</li>
        <li>About</li>
        <li>Contact</li>
        </ul>
    <div className='flex flex-row items-center sm:gap-5 mobile:gap-4 justify-center'>
        <div className='container basis-1/4'><img src={iconCart} alt="/" /></div>
        <div className='container  basis-1/3'><img src={imageAvatar} alt="/" /></div>
    </div>
</div>}
</>
  )
}

export default NavBar;
