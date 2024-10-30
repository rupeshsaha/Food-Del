import React, { useState } from 'react'
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowLogin}) => {

    const [currState,setCurrState] = useState("Login")
  return (
    <div className='login-popup absolute z-[1] w-[100%] h-[100%] bg-[#00000090] grid'>
        <form className='login-popup-container place-self-center w-[30vw] text-[#808080] bg-[white] flex flex-col justify-center items-center gap-[25px] py-[25px] px-[30px] rounded-[8px] text-[14px] animate-[fadeIn_0.5s]'>
            <div className="login-popup-title flex justify-between w-full">
                <h2 className='font-bold text-xl'>{currState}</h2>
                <img className='w-6 h-6' onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-input  ">
                {currState==="Login" ? <></> :  <input type="text" placeholder='Your Name' className='border-2 h-8 w-full rounded-lg' required />}
               
                <input type="email" className='border-2 h-8 w-full rounded-lg mt-2'placeholder='Your Email' required />
                <input type="password" className='border-2 h-8 mt-2 w-full rounded-lg'placeholder='Password' required />
            </div>
            <button className='bg-[tomato] text-white w-[90%] h-8 rounded-md'>{currState==="Sign Up"? "Create Account" : "Login"}</button>
            <div className="login-popup-condition flex">
                <input type="checkbox" name="" id="" required />
                <p className='pl-2'>By continuing , i agree to the terms & privacy policy</p>
            </div>
            {currState==="Login"?<p>Create a new account? <span className='text-[tomato]' onClick={()=>setCurrState("Sign Up")}>Click Here</span></p>:     <p>Already have an account? <span className='text-[tomato]' onClick={()=>setCurrState("Login")}>Login Here</span></p>}
            
       
        </form>
    </div>
  )
}

export default LoginPopup