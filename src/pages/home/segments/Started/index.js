import React from 'react'
import { useNavigate } from 'react-router'


const Started = () => {
  const navigate = useNavigate();

  const HandleClick = (e) => {

    navigate(
      `/Signin`
    )
  }

  return (
    // <div className='flex flex-col gap-5 text-xs bg-[#4B1FC8] py-[140px] lg:py-[180px] text-white'>
    //   <p className='text-[39px] sm:text-[50px] lg:text-[64px] flex justify-center pb-[40px] font-semibold sm:font-bold '>Get started for free</p>
    //   <div className='flex text-[24px] justify-center pb-[47px]'>
    //     <p>one-link allow users create their personal link for free. All you need to do is sign up, create your links and start sharing with your audience or customers</p>
    //   </div>
    //   <div className='flex justify-center'>
    //     <button className='text-[8px] bg-[#200B5E] text-white p-2 px-24'></button>

    //   </div>
    // </div>

    <div className='flex flex-col py-[40px] sm:py-[80px] md:py-[140px] lg:py-[180px] gap-[31px] bg-[#2b1eed] text-white w-full items-center'>

      <div>
        <p className='text-[30px] sm:text-[50px] lg:text-[64px] flex justify-center font-semibold sm:font-bold '>Get started for free</p>
      </div>

      <div className='flex flex-col gap-[51px] items-center'>
        <div className='font-semibold w-[90%] text-[15px] sm:text-[18px] xl:text-[24px]'>
          <p className=''>one-link allow users create their personal link for free. All you need to do is sign up, create your links and start sharing with your audience or customers</p>
        </div>

        {/* <p className='text-[#4B1FC8] text-[13px] sm:text-[18px] font-bold flex justify-end'>share URL</p> */}

        <div className='flex justify-center w-full'>
          <button onClick={HandleClick} className='bg-[#200B5E] font-bold text-white w-[50%] h-[40px] md:h-[50px] rounded-lg'>CREATE ACCOUNT</button>

        </div>
      </div>

    </div>
  )
}

export default Started