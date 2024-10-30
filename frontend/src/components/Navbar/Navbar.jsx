import React,{useState} from 'react'
import { assets } from '../../assets/assets'
import './Navbar.css'
import { Link } from 'react-router-dom'



const Navbar = ({setShowLogin}) => {

  const [menu, setMenu] = useState('Home')

  return (
    <div className='navbar py-[20px] justify-between items-center flex'><Link to='/'>   <img src={assets.logo} alt="" className='logo w-[150px]' /></Link>
     
        <ul className="navbar-menu flex gap-[20px] text-[#49557e] text-[18px]">

      <li  onClick={()=>setMenu("Home")} className={menu==="Home"?"pb-[2px] border-b-2 border-[#49557e]":""} style={{cursor:'pointer'}}>Home</li>
      <li  onClick={()=>setMenu("Menu")} className={menu==="Menu"?"pb-[2px] border-b-2 border-[#49557e]":""} style={{cursor:'pointer'}}>Menu</li>
      <li onClick={()=>setMenu("Bulk Order")}  className={menu==="Bulk Order"?"pb-[2px] border-b-2 border-[#49557e]":""} style={{cursor:'pointer'}}>Bulk Order</li>
      <li  onClick={()=>setMenu("Contact Us")} className={menu==="Contact Us"?"pb-[2px] border-b-2 border-[#49557e]":""} style={{cursor:'pointer'}}>Contact Us</li>

        </ul>
        <div className="navbar-right flex  items-center gap-[40px]">
          
          <div className="navbar-search-icon">
          <img className='min-w-[20px]' src={assets.search_icon} alt="" /></div>
          <div className="navbar-cart-icon relative">
            <Link to='/cart'> <img className='min-w-[20px]' src={assets.basket_icon}/></Link>
           
          <div className="dot absolute min-w-[10px] min-h-[10px] bg-[tomato] rounded-[5px] top-[-8px] right-[-8px]"></div></div>
          
            
            <button className='bg-transparent text-[16px] text-[#49557e] border-[1px] border-solid border-[tomato] py-[10px] px-[30px] rounded-[50px] hover:bg-[#fff4f2] ' onClick={()=> setShowLogin(true)}>Sign In</button>
        </div>
    </div>
  )
}

export default Navbar