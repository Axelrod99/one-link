import React from 'react'
import phone from '../../../../assets/images/phone.png'

const Features = () => {
    return (
        <div className=' p-10 sm:pt-[80px] lg:pt-[120px] flex flex-col gap-[30px] md:gap-[63px]'>

            <div className='flex flex-col items-center gap-[16px]'>
                <div className='bg-[#4B1FC8] justify-center w-24 text-xs text-white text-bold flex rounded-md '>
                    <p className='p-1'>FEATURES</p>
                </div>
                
                <div className='text-[12px] sm:text-[16px] font-semibold'>
                    <p className='text-[#707070]'>Check out our cool and amazing features</p>
                </div>
            </div>


            <div className='flex pb-[40px] so:pb-[70px] md:pb-[100px] lg:pb-[160px] justify-center gap-1 so:gap-[13px] sm:gap-[40px] md:gap-[70px] text-[#707070]'>

                <div className='flex flex-col self-center text-[12px] sm:text-[16px] gap-5'>
                    <div>
                        <p className='text-[#4B1FC8] text-[13px] sm:text-[18px] flex justify-end font-bold'>Personal URL</p>
                        <p>Create your personal URL and place it in your social media bio</p>
                    </div>

                    <div>
                        <p className='text-[#4B1FC8] text-[13px] sm:text-[18px] font-bold flex justify-end'>share URL</p>
                        <p>Create your personal URL and place it in your social media bio</p>
                    </div>
                </div>
                {/* hidden sm:flex */}
                <div className='flex'>
                    <img className='' alt='second_image' src={phone} />
                </div>


                <div className='flex flex-col self-center text-[12px] sm:text-[16px] gap-5'>
                    <div>
                        <p className='text-[#4B1FC8] text-[13px] sm:text-[18px] font-bold'>Personal URL</p>
                        <p>Create your personal URL and place it in your social media bio</p>
                    </div>

                    <div>
                        <p className='text-[#4B1FC8] text-[13px] sm:text-[18px] font-bold'>share URL</p>
                        <p>Create your personal URL and place it in your social media bio</p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Features
