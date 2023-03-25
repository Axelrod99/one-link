import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import socials from '../../../../assets/images/socials.png'
import phone from '../../../../assets/images/phone.png'
import '../../../../App.css'
// import { useNavigate } from 'react-router'

const One = () => {

  const navigate = useNavigate();

  const HandleClick = (e) => {

    navigate(
      `/Signin`
    )
  }


  return (
    <div>

      <section id='signin' className='w-full h-screen flex flex-col md:flex-row p-5 sm:p-10 gap-[50px] md:gap-[20px]'>

        <div className='w-full flex flex-col gap-4 md:gap-6 justify-start'>

          <div className='flex font-semibold text-[36px] md:text-[42px] lg:text-[58px] xl:text-[64px]'>
            <p>Have <span className='text-[#4B1FC8]'>One</span>-link to everything</p>
          </div>

          <div className='flex text-[#707070] text-[20px] so:text-[24px]'>
            <p>One-link makes it easy to discover and engage with media outlets, brands, businesses and influencers across the web. With One-link, you are truly everywhere you need to be.</p>
          </div>

          {/* <div className='gap-5 text-xs font-bold hidden md:flex'>
            <button className='bg-[#744fd9] text-white w-[100px] md:w-[150px] h-[40px] md:h-[50px] rounded-lg'>SIGN-UP</button>
            <button className='border border-[#744fd9] w-[100px] md:w-[150px] h-[40px] md:h-[50px] rounded-lg text-[#744fd9]'>HOW IT WORKS</button>
          </div> */}

        </div>

        <div className='w-full flex items-start justify-center'>
          <div>
            <img className='' alt='first_picture' src={socials} />
          </div>
        </div>

      </section>




      <div className='w-full py-[80px] p-10 bg-[#F2F0F9] flex gap-5'>

        <div className='w-full hidden lg:flex items-center justify-center '>
          <div className='bg-[#4B1FC826] rounded-[300px] flex w-[468px] h-[468px] justify-center items-center'>
            <img className='w-[316px] h-[616px]' alt='second_picture ' src={phone} />
          </div>
        </div>

        <div className='w-full flex flex-col justify-center'>

          <div className='w-full flex flex-col lg:items-end justify-end gap-[24px]'>
            <div>
              <p className='text-[16px] text-[#707070]'>MULTIPLE ACCOUNTS</p>
            </div>

            <div className='text-[40px] md:text-[52px] lg:text-[64px]'>
              <p className=' text-[#4B1FC8] '>ONE-<span className='text-black'>LINK</span></p>
            </div>

            <div className='text-[18px] md:text-[24px] text-[#707070] w-[80%]'>
              <p>Make all your social media accounts and businesses one link away.</p>
            </div>

            <div className='w-full flex justify-start lg:justify-end'>
              <button onClick={HandleClick} className=' bg-[#4B1FC8] rounded-[12px] h-[51px] text-xs text-white w-full so:w-[85%]'>CREATE ACCOUNT</button>
            </div>
          </div>

        </div>

      </div>


    </div>
  )
}

export default One