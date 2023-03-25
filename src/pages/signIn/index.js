import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import signin from '../../assets/images/signin.png'
import '../../App.css'


const SignIn = () => {

  const navigate = useNavigate();

  const LogIn = (e) => {
    navigate(
      `/Login`
    )
  }

  return (
    <section className='flex w-screen h-screen bg-blue-50 justify-center' id='signin'>
      <div className='w-[55%] hidden md:grid bg-[#e6ddff88]'>
        <div className='text-lg font-bold text-[30px] sm:text-[36px] h-[70px] flex items-center px-5 so:px-10'>
          <p className='text-[#4B1FC8]'>one<span className='text-black'>-link</span></p>
        </div>

        <div className='flex justify-center items-center '>
          <img className='' alt='signin image' src={signin} />
        </div>
      </div>


      <div className='w-[90%] md:w-[45%] flex flex-col justify-center items-center  '>

        <div id='signin' className='w-[100%] flex flex-col justify-center gap-[50px]'>

          <div className='flex md:hidden'>
            <div className='flex  text-lg font-bold text-[30px] sm:text-[36px] h-[70px] items-center'>
              <p className='text-[#4B1FC8]'>one<span className='text-black'>-link</span></p>
            </div>
          </div>


          <div className='md:px-5 flex flex-col gap-[44px] pb-[30px] md:pb-0'>
            <div className='flex flex-col gap-[32px]'>

              <div className='font-bold text-[24px]'>
                <p>Get started for free</p>
              </div>

              <div className='flex justify-center'>
                <input className='h-[48px] w-[90%] bg-blue-50 border-b-[#70707074] border' placeholder='Name' />
              </div>

              <div className='flex justify-center'>
                <input className='h-[48px] w-[90%] bg-blue-50 border-b-[#70707074] border' placeholder='Email' />
              </div>

              <div className='flex justify-center'>
                <input className='h-[48px] w-[90%] bg-blue-50 border-b-[#70707074] border' placeholder='Password' />
              </div>
            </div>

            <div className='flex flex-col gap-[40px]'>
              <div className='flex flex-col gap-[32px] font-semibold text-[16px]'>
                <div className='flex justify-center'>
                  <button className='text-white h-[48px] w-[90%] rounded-[12px] bg-[#4B1FCB]'>CREATE ACCOUNT</button>
                </div>

                <div className='flex justify-center'>
                  <button className='h-[48px] w-[90%]  rounded-[12px]  border-[#A6A6A6] border'>sign in with Google</button>
                </div>
              </div>

              <div className='flex flex-col items-center gap-[24px]'>
                <div className='flex justify-items-center text-[16px]'>
                  <p className='cursor-pointer' onClick={LogIn}>Already have an account?</p>
                </div>

                <div className='text-[14px]'>
                  <p className='text-center'>By signing up, you expressly agree to our terms and conditions</p>
                </div>
              </div>
            </div>

          </div>
        </div>


      </div>

    </section>
  )
}


export default SignIn