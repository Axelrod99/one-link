import React from 'react'
import { useNavigate } from 'react-router'
import signin from '../../assets/images/signin.png'
import '../../App.css'


const LoginPage = () => {

  const navigate = useNavigate();

  const SigningIn = (e) => {
    navigate(
      `/Signin`
    )
  }

  const onDashboard = (e) => {
    navigate(
      `/Dashpage`
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




      <div className='sm:p-3 w-[90%] md:w-[45%] flex flex-col justify-center items-center gap-[44px]'>

        <div className='flex flex-col gap-[36px] w-full'>
          <div className='text-[24px] font-semibold'>
            <p>Welcome back Boss</p>
          </div>

          <div className='flex justify-center'>
            <input className='h-[48px] w-[90%] bg-blue-50 border-b-[#70707074] border' required placeholder='Email' />
          </div>

          <div className='flex justify-center'>
            <input className='h-[48px] w-[90%] bg-blue-50 border-b-[#70707074] border' required placeholder='Password' />
          </div>
        </div>

        <div className='flex flex-col gap-[32px] w-full'>
          <div onClick={onDashboard} className='flex justify-center'>
            <button className='h-[48px] w-[90%]  rounded-[12px]  border-[#A6A6A6] border'>Sign in</button>
          </div>


          <div className='flex justify-center'>
            <button onClick={onDashboard} className='text-white h-[48px] w-[90%] rounded-[12px] bg-[#4B1FCB]'>Sign in with Google</button>
          </div>


        </div>

        <div className='flex justify-between w-[90%] text-[14px]'>
          <p onClick={SigningIn} className='cursor-pointer'>Don't have an account</p>
          <p className='cursor-pointer'>Forget Password</p>
        </div>


      </div>




    </section>
  )
}

export default LoginPage