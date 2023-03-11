import React from 'react'
import copyright from '../../../assets/icons/copyright.png'
import github from '../../../assets/icons/github.png'
import twitter from '../../../assets/icons/twitter.png'
import linkedin from '../../../assets/icons/linkedin.png'

const Footer = () => {
  return (
    <div className='bg-[#161D3D] text-white text-xs flex justify-between p-9 sm:p-14'>
      <div className='flex flex-col gap-3'>
        <p className='text-[19px] sm:text-[24px] font-bold'>one-link</p>

        <div className='flex gap-2 text-[12px] sm:text-[15px] md:hidden'>
          <div>
            <img className='' alt='copyright' src={copyright} />
          </div>
          <p>2022. All rights reserved.</p>
        </div>
      </div>

      <div className='hidden md:flex gap-2 text-[12px] sm:text-[15px]'>
        <div>
          <img className='' alt='copyright' src={copyright} />
        </div>
        <p>2022. All rights reserved.</p>
      </div>

      <div className='flex gap-5'>
        <div className='bg-[#eae2ff44] rounded-[50px] h-[24px] sm:h-[36px] w-[24px] sm:w-[36px] flex justify-center items-center'>
          <img className='h-[14px] w-[14px] sm:h-[18px] sm:w-[18px]' alt='github' src={github} />
        </div>

        <div className='bg-[#eae2ff44] rounded-[50px] h-[24px] sm:h-[36px] w-[24px] sm:w-[36px] flex justify-center items-center'>
          <img className='h-[14px] w-[14px] sm:h-[18px] sm:w-[18px]' alt='twitter' src={twitter} />
        </div>

        <div className='bg-[#eae2ff44] rounded-[50px] h-[24px] sm:h-[36px] w-[24px] sm:w-[36px] flex justify-center items-center'>
          <img className='h-[14px] w-[14px] sm:h-[18px] sm:w-[18px]' alt='linkedin' src={linkedin} />
        </div>

      </div>

    </div>
  )
}

export default Footer