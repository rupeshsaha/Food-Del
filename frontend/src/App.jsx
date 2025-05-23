import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'

const App = () => {
  const [showLogin,setShowLogin] = useState(false)
  return (
    <>  
    {showLogin? <LoginPopup setShowLogin={setShowLogin}/> : <></>}
     <div className='md:w-[80%] sm:w-[90%] w-full px-4 sm:px-0 m-auto'>
      <Navbar setShowLogin  = {setShowLogin}/>
      <Routes>
        < Route path = '/' element={<Home/>}/>
        < Route path = '/cart' element={<Cart/>}/>
        < Route path = '/order' element={<PlaceOrder/>}/>
      </Routes>
    
    </div> 
     <Footer/></>
 
  )
}

export default App