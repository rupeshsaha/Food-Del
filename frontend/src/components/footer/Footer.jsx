import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
   
   <div className="footer text-[#d9d9d9] bg-[#323232] flex flex-col items-center gap-[20px] py-[20px] px-[12vw] pt-[80px] mt-3">
    <div className="footer-content flex gap-[10vw]">
        <div className="footer-content-left w-[50%] ">
        <img src={assets.logo} alt="" />
        <p className='pt-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores aspernatur sequi at sapiente ipsum? Porro cum ex animi qui quod.</p>
        <div className="footer-social-icons flex gap-3 pt-3">
            <img src={assets.facebook_icon} alt="" /><img src={assets.twitter_icon} alt="" /><img src={assets.linkedin_icon} alt="" />
        </div>
        </div>
        <div className="footer-content-center">
    <h2 className='font-bold'>COMPANY</h2>
    <ul className='pt-5'>
        <li>Home</li>
        <li>About us</li>
        <li>Delivery</li>
        <li>Privacy policy</li>
    </ul>
        </div>
        <div className="footer-content-right">
            <h2 className='font-bold'>GET IN TOUCH</h2>
            <ul className='pt-5'>
                <li>+1-2345-6789</li>
                <li>tom@tomato.com</li>
            </ul>
        </div>
    </div>
    <hr/>
    <p className="footer-copyright underline">Copyright 2024 © Tomato.com</p>
   </div>
   
  )
}

export default Footer