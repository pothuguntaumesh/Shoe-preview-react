import { useState } from 'react';
import './App.css';
import NavBar from './components/hero/NavBar';
import ProductSection from './components/productSection/Product';
function App() {
  const [menuClicked,setMenuClicked]=useState(false)
  const menuClickHandler=()=>{
    setMenuClicked(true)
    console.log("menu clicked")
  }
  const closeButtonHandler=()=>{
    setMenuClicked(false)
    console.log("Close button clicked.")
  }
  return (
    <>
    <NavBar menuClicked={menuClicked} menuClickHandler={menuClickHandler} closeButtonHandler={closeButtonHandler}/>
    {!menuClicked &&<ProductSection/>}
    </>
      
    
  );
}

export default App;
