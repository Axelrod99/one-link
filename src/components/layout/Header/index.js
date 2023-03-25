import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import menu from '../../../assets/icons/menu.svg'

const Header = ({onMenu}) => {

    const navigate = useNavigate();

    const HandleClick = (e) => {

        navigate(
            `/Signin`
        )
    }

    const SignInbtn = (e) => {
        // console.log('enenenen');
        navigate(
            `/Login`
        )
    }

    return (
        <div className='flex justify-between px-5 sm:px-10 py-5 items-center'>
            <div className='text-lg font-bold text-[30px] sm:text-[36px]'>
                <p className='text-[#4B1FC8]'>one<span className='text-black'>-link</span></p>
            </div>

            <div className='flex'>
                <div className='hidden sm:flex gap-5 text-xs font-semibold text-[16px]'>
                    <button onClick={SignInbtn} className='bg-[#F0ECFF] w-[70px] so:w-[100px] md:w-[150px] so:h-[50px] rounded-lg'>SIGN-IN</button>
                    <button onClick={HandleClick} className='bg-[#4B1FC8] text-white rounded-lg w-[70px] so:w-[100px] md:w-[150px] so:h-[50px]'>SIGN-UP</button>
                </div>

                <div onClick={onMenu} className='cursor-pointer flex sm:hidden'>
                    <img className='' alt='copyright' src={menu} />
                </div>
            </div>


        </div>
    )
}


export default Header