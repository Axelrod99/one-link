import React from 'react'
import { grid } from '../../../../utils/data'


export const Option = () => {
    return (
        <div className='grid so:grid-cols-2 sm:grid-cols-3 items-center justify-items-center p-10 bg-[#4B1FC8]'>

            {grid.map(Cards =>

                <div className='bg-[#4B1FC8] h-[220px] w-[220px] text-white grid p-5'>

                    <div className='flex flex-col gap-[20px]'>
                        <div className='w-full flex justify-center'>
                            <img className='h-14' alt='the_icons' src={Cards.Image} />
                        </div>

                        <div className='flex flex-col gap-[20px]'>
                            <div className='font-bold flex justify-center'>
                                <p>{Cards.Heading}</p>
                            </div>

                            <div className='text-[10px] flex justify-center text-center'>
                                <p>{Cards.text}</p>
                            </div>
                        </div>
                    </div>

                </div>

            )}
        </div>
    )
}

export default Option
