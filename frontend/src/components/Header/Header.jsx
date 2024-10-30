import React from 'react'
const Header = () => {
  return (
    <div className='header h-[34vw] my-[30px] mx-auto bg-no-repeat bg-contain relative' style = {{backgroundImage: "url('header_img.png')"}} >
        <div className="header-contents animate-[fadeIn_3s] drop-shadow-2xl absolute flex flex-col items-start gap-[1.5vw] max-w-[50%] bottom-[10%] left-[6vw]">
            <h2 className='text-[4.5vw] font-medium text-white'>Order your favourite food here</h2>
            <p className='text-white text-[1vw]'>Choose from a diverse menu featuring a delectable  array of dishes crafted with the finest ingredients and satisfy your cravingd , one delicious meal at a time.</p>
            <button className='text-[#747474] font-medium py-[1vw] px-[2.3vw] bg-white text-[1vw] rounded-[50px]'>View Menu</button>
        </div>
    </div>
  )
}

export default Header