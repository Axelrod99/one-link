import React from 'react'
import { useNavigate } from 'react-router'
import { useState } from 'react'
import menu from '../../assets/icons/menu.svg'
import { links, options } from '../../utils/data'


const Dashpage = () => {
  const [linksTab, setLinksTab] = useState(false)
  const [dropDown, setdropDown] = useState(false)
  const [activeTab, setActiveTab] = useState(links[0].name)


  const navigate = useNavigate();

  const onProfile = (e) => {
    navigate(
      `/Profile`
    )
  }


  return (
    <div>

      <div className='h-screen'>
        <div className='flex justify-between px-5 sm:px-10 py-5 items-center border-b-[#7070707f] border'>
          <div className='text-lg font-bold text-[30px] sm:text-[36px]'>
            <p className='text-[#4B1FC8]'>one<span className='text-black'>-link</span></p>
          </div>

          <div onClick={() => setdropDown(!dropDown)} className='cursor-pointer'>
            <img className='' alt='copyright' src={menu} />
          </div>
        </div>

        <div className='flex flex-col gap-[33px] justify-center items-center h-screen'>
          <div className='flex flex-col gap-[16px] font-semibold justify-center items-center text-[#707070]'>
            <p>You don’t have any link to display</p>
            <p>Click the button below to add</p>
          </div>
          <div onClick={() => setLinksTab(true)} className='flex justify-center items-center bg-[#4B1FC8] text-white rounded-[12px] w-[240px] lg:w-[300px] h-[50px]'>+ ADD LINK</div>
        </div>
      </div>



      {dropDown && <>
        <div onClick={() => setdropDown(dropDown)} className='bg-[#b9b9b91c] rounded-[12px] w-[240px] lg:w-[280px] lg:h-[158px] h-[115px] lg:gap-[24px] gap-[16px] p-[24px] text-[18px] lg:text-[20px] flex flex-col z-[999] fixed m-auto top-20 right-2'>
          {/* {options.map(shelf => */}
          <div onClick={onProfile}>
            <p className='cursor-pointer'>Profile</p>
          </div>

          <div>
            <p className='cursor-pointer text-red-400'>Sign out</p>
          </div>
          {/* )} */}

        </div>

      </>}



      {/* Create link */}

      {linksTab && <>
        <div className='bg-white rounded-[12px] w-[100%] sm:w-[530px] lg:w-[650px] h-[430px] gap-[35px] px-[20px] so:px-[45px] flex flex-col z-[999] fixed m-auto top-0 bottom-0 left-0 right-0'>

          <div className=''>
            <div className='flex justify-between pt-[54px]'>
              <div className='flex gap-[16px] text-[12px]'>

                {links.map(link =>
                  <div onClick={() => setActiveTab(link.name)} className='flex cursor-pointer border border-[#707070] p-[10px] rounded-[16px] gap-[4px] sm:gap-[8px] text-[#4B1FC8]'>
                    <img className='' alt='copyright' src={link.Image} />
                    <p className={` ${link.color} cursor-pointer`}>{link.name}</p>
                  </div>
                )}


                {/* <div className='flex cursor-pointer border border-[#4B1FC8] p-[10px] rounded-[16px] gap-[8px] text-[#4B1FC8]'>
                <img className='' alt='copyright' src={podcast_link} />
                <p className='text-[#707070]'>Music/Podcast link</p>
              </div> */}

              </div>

              <div onClick={() => setLinksTab(false)} className='border-[#000000] border-2 h-[30px] font-bold w-[30px] rounded-[30px] flex justify-center items-center cursor-pointer'>
                <p>X</p>
              </div>
            </div>
          </div>


          {activeTab === links[0].name && <div>
            <div className='flex flex-col gap-[35px] '>
              <div className='w-full flex flex-col gap-[22px]'>
                <div>
                  <input className='border border-[#707070] text-[#707070] rounded-[12px] w-[100%] p-[15px]' placeholder='Social media' />
                </div>

                <div>
                  <input className='border border-[#707070] text-[#707070] rounded-[12px] w-[100%] p-[15px]' placeholder='Paste link' />
                </div>

              </div>

              <div className='flex justify-center'>
                <button className='bg-[#4B1FC8] text-white rounded-[12px] w-[300px] h-[50px]'>+ ADD LINK</button>
              </div>
            </div>
          </div>
          }


          {activeTab === links[1].name && <div>
            <div className='flex flex-col gap-[35px] '>
              <div className='w-full flex flex-col gap-[22px]'>
                <div>
                  <input className='border border-[#707070] text-[#707070] rounded-[12px] w-[100%] p-[15px]' placeholder='Select music service' />
                </div>

                <div>
                  <input className='border border-[#707070] text-[#707070] rounded-[12px] w-[100%] p-[15px]' placeholder='Paste link' />
                </div>

              </div>

              <div className='flex justify-center'>
                <button className='bg-[#4B1FC8] text-white rounded-[12px] w-[300px] h-[50px]'>+ ADD LINK</button>
              </div>
            </div>
          </div>}


        </div>
        <div className='fixed w-screen h-screen bg-[#00000055] top-0 left-0' />

      </>}

    </div>

  )
}


export default Dashpage