import React, { useState } from 'react'
import One from './segments/One'
import Options from './segments/Options'
import Features from './segments/Features'
import Started from './segments/Started'

export const HomePage = () => {
  const [dropDown, setdropDown] = useState(false)

  return (
    <div>
      
      <One />
      <Options />
      <Features />
      <Started />
      

      {dropDown && <>
        <div onMenu={() => setdropDown(true)}>
          <div className='bg-blue-50 flex flex-col items-center justify-center gap-[10px] w-[90%] h-[100px] rounded-[10px]'>
            <div className='h-[35px] bg-white w-[95%] rounded-[10px]'>
              <p>SIGN IN</p>
            </div>

            <div className='h-[35px] bg-white w-[95%] rounded-[10px]'>
              <p>SIGN UP</p>
            </div>
          </div>
        </div>
      </>}


    </div>
  )
}


export default HomePage