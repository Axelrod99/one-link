import React, { useContext } from 'react'
import { AppContext } from '../../context'
import options1 from '../../assets/images/options1.png'
import options2 from '../../assets/images/options2.png'
import options3 from '../../assets/images/options3.png'


const Preview = () => {
    const { cardData } = useContext(AppContext);
    // console.log('cardData: ', cardData)


    return (
        <div className='h-[410px] w-[300px] bg-[#c3cfd4] rounded-[12px] bg-no-repeat bg-cover' style={{ backgroundImage: cardData.background === 0 ? `url(${options1})` : cardData.background === 1 ? `url(${options2})` : cardData.background === 2 ? `url(${options3})` : '' }}>
            <div className=' w-[100%] so:w-[100%] py-5'>
                <div className='w-full flex flex-col items-center justify-center gap-[30px] font-semibold text-[14px]'>
                    <div>
                        <p>@Username</p>
                    </div>

                    <div className='w-[80%] h-[37px] rounded-[12px] bg-white flex justify-center items-center cursor-pointer'>
                        <p>LinkedIn</p>
                    </div>

                    <div className='w-[80%] h-[37px] rounded-[12px] bg-white flex justify-center items-center cursor-pointer'>
                        <p>Facebook</p>
                    </div>

                    <div className='w-[80%] h-[37px] rounded-[12px] bg-white flex justify-center items-center cursor-pointer'>
                        <p>Instagram</p>
                    </div>

                    <div className='w-[80%] h-[37px] rounded-[12px] bg-white flex justify-center items-center cursor-pointer'>
                        <p>Twitter</p>
                    </div>

                    <div className='w-[80%] h-[37px] bg-white rounded-[12px] flex justify-center items-center cursor-pointer'>
                        <p>Whatsapp</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Preview 