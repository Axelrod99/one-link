import React, { useContext, useState } from 'react'
import menu from '../../assets/icons/menu.svg'
import Instagram from '../../assets/icons/Instagram.svg'
import facebook from '../../assets/icons/facebook.svg'
import linkedIn from '../../assets/icons/linkedIn.svg'
import share from '../../assets/icons/share.svg'
import save from '../../assets/icons/save.svg'
import options1 from '../../assets/images/options1.png'
import options2 from '../../assets/images/options2.png'
import options3 from '../../assets/images/options3.png'
import Button from "@material-ui/core/Button";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/core/styles";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import Preview from './preview'
import { AppContext } from '../../context'



const Profile = () => {
    const { cardData, setCardData } = useContext(AppContext);
    const [preview, setPreview] = useState(false);


    const [LinkedIn, setLinkedIn] = useState(false);
    const [Facebook, setFacebook] = useState(false);
    const [instagram, setInstagram] = useState(false);
    const [twitter, setTwitter] = useState(false);
    const [whatsapp, setWhatsapp] = useState(false);


    const steps = [
        {
            label: "First Picture",
            Image: options1,
            decoration: 'first'
        },
        {
            label: "Second Picture",
            Image: options2,
            decoration: 'second'
        },
        {
            label: "Third Picture",
            Image: options3,
            decoration: 'third'
            // imgPath:
            //     "https://res.cloudinary.com/dj0ex8nyv/image/upload/v1679258681/options3_mdxwxx.png",
        },
    ];


    // const CollectionSize = steps.length;
    const theme = useTheme();
    const [activeStep, setActiveStep]
        = React.useState(0);
    const maxSteps = steps.length;

    const handleNext = () => {
        setActiveStep(
            (prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep(
            (prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <div className='h-screen'>
            <div className='flex justify-between px-5 sm:px-10 py-5 items-center border-b-[#7070707f] border'>
                <div className='text-lg font-bold text-[30px] sm:text-[36px]'>
                    <p className='text-[#4B1FC8]'>one<span className='text-black'>-link</span></p>
                </div>

                <div className='cursor-pointer'>
                    <img className='' alt='copyright' src={menu} />
                </div>
            </div>


            <div className='flex flex-col-reverse items-center so:flex-row w-full pt-[74px] lg:pt-[20px] pb-[50px] md:pb-0 gap-[50px] so:gap-0'>
                <div className='w-screen so:w-[60%] flex justify-center pt-10'>
                    <div className=' w-[90%] so:w-[100%]'>
                        <div className='w-full flex flex-col items-center gap-[30px] font-semibold text-[18px]'>
                            <div onClick={() => setLinkedIn(true)} className='w-[80%] h-[50px] rounded-[12px] gap-[10px] border border-[#707070] flex justify-center items-center cursor-pointer'>
                                <img className='' alt='linkedIn' src={linkedIn} />
                                <p>LinkedIn</p>
                            </div>

                            <div onClick={() => setFacebook(true)} className='w-[80%] h-[50px] rounded-[12px] gap-[10px] border border-[#707070] flex justify-center items-center cursor-pointer'>
                                <img className='' alt='facebook' src={facebook} />
                                <p>Facebook</p>
                            </div>

                            <div onClick={() => setInstagram(true)} className='w-[80%] h-[50px] rounded-[12px] gap-[10px] border border-[#707070] flex justify-center items-center cursor-pointer'>
                                <img className='' alt='instagram' src={Instagram} />
                                <p>Instagram</p>
                            </div>

                            <div onClick={() => setTwitter(true)} className='w-[80%] h-[50px] rounded-[12px] gap-[10px] border border-[#707070] flex justify-center items-center cursor-pointer'>
                                <p>Twitter</p>
                            </div>

                            <div onClick={() => setWhatsapp(true)} className='w-[80%] h-[50px] rounded-[12px] gap-[10px] border border-[#707070] flex justify-center items-center cursor-pointer'>
                                <p>Whatsapp</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='w-screen so:w-[40%] flex justify-center pt-10'>
                    <div className='flex flex-col gap-[30px]'>
                        {/* the image options */}
                        <div className='w-[250px] h-[403px] border border-[#707070] rounded-[12px]'>
                            <Paper
                                square
                                elevation={0}
                                style={{
                                    height: 50,
                                    display: "flex",
                                    paddingLeft: theme.spacing(4),
                                    backgroundColor: theme.palette.background.default,
                                    alignItems: "center",
                                }}
                            >
                                <Typography>{steps[activeStep].label}</Typography>
                            </Paper>
                            <img
                                onClick={() => setCardData({ ...cardData, background: activeStep })}
                                src={steps[activeStep].Image}
                                style={{
                                    height: 297,
                                    width: "100%",
                                    maxWidth: 400,
                                    display: "block",
                                    overflow: "hidden",
                                }}
                                alt={steps[activeStep].label}
                            />
                            <MobileStepper
                                variant="text"
                                steps={maxSteps}
                                position="static"
                                activeStep={activeStep}


                                nextButton={
                                    <Button
                                        size="small"
                                        onClick={handleNext}
                                        disabled={activeStep === maxSteps - 1}
                                    >
                                        Next
                                        {theme.direction === 'rtl' ? (
                                            <KeyboardArrowLeft />
                                        ) : (
                                            <KeyboardArrowRight />
                                        )}
                                    </Button>
                                }


                                backButton={
                                    <Button size="small" onClick={handleBack}
                                        disabled={activeStep === 0}>
                                        {theme.direction === 'rtl' ? (
                                            <KeyboardArrowRight />
                                        ) : (
                                            <KeyboardArrowLeft />
                                        )}
                                        Back
                                    </Button>
                                }
                            />


                        </div>

                        <div className='flex justify-between font-semibold text-[14px]'>
                            <div onClick={() => setPreview(true)} className='border rounded-[12px] p-[4px] border-[#707070] gap-[10px] flex'>
                                <img className='' alt='save' src={save} />
                                <p>Save</p>
                            </div>

                            <div className='border rounded-[12px] p-[4px] border-[#4B1FC8] gap-[10px] flex text-[#4B1FC8]'>
                                <img className='' alt='share' src={share} />
                                <p>share</p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

            {Facebook && <><div className='z-[999] fixed m-auto top-24 so:top-60 right-0 so:right-[50px] w-[100%] so:w-[500px] flex justify-center'>
                <div className='rounded-[10px] flex justify-center bg-white w-[470px]'>
                    <div className='flex flex-col gap-[32px] w-full px-[48px] py-[32px]'>

                        <div className='text-[24px] font-semibold text-[#1D4C41] flex justify-between'>
                            <p>Facebook link</p>

                            <p onClick={() => setFacebook(false)} className='cursor-pointer'>x</p>
                        </div>

                        <div className='w-full'>
                            <input className='bg-[#F6FBF6] h-[39px] w-full p-[10px]' placeholder='add link' />
                        </div>

                        <div className='flex justify-end'>
                            <button className='px-10 py-2 text-white bg-[#4B1FC8] rounded-[10px]'>Save</button>
                        </div>

                    </div>
                </div>
            </div>

                <div className='fixed w-screen h-screen bg-[#00000055] top-0 left-0' />
            </>}


            {LinkedIn && <><div className='z-[999] fixed m-auto top-24 so:top-60 right-0 so:right-[50px] w-[100%] so:w-[500px] flex justify-center'>
                <div className='flex justify-center bg-white w-[470px] rounded-[10px]'>
                    <div className='flex flex-col gap-[32px] w-full px-[48px] py-[32px]'>

                        <div className='text-[24px] font-semibold text-[#1D4C41] flex justify-between'>
                            <p>LinkedIn link</p>

                            <p onClick={() => setLinkedIn(false)} className='cursor-pointer'>x</p>
                        </div>

                        <div className='w-full'>
                            <input className='bg-[#F6FBF6] h-[39px] w-full p-[10px]' placeholder='add link' />
                        </div>

                        <div className='flex justify-end'>
                            <button className='px-10 py-2 text-white bg-[#4B1FC8] rounded-[10px]'>Save</button>
                        </div>

                    </div>
                </div>
            </div>

                <div className='fixed w-screen h-screen bg-[#00000055] top-0 left-0' />
            </>}


            {instagram && <> <div className='z-[999] fixed m-auto top-24 so:top-60 right-0 so:right-[50px] w-[100%] so:w-[500px] flex justify-center'>
                <div className='rounded-[10px] flex justify-center bg-white w-[470px]'>
                    <div className='flex flex-col gap-[32px] w-full px-[48px] py-[32px]'>

                        <div className='text-[24px] font-semibold text-[#1D4C41] flex justify-between'>
                            <p>Instagram link</p>

                            <p onClick={() => setInstagram(false)} className='cursor-pointer'>x</p>
                        </div>

                        <div className='w-full'>
                            <input className='bg-[#F6FBF6] h-[39px] w-full p-[10px]' placeholder='add link' />
                        </div>

                        <div className='flex justify-end'>
                            <button className='px-10 py-2 text-white bg-[#4B1FC8] rounded-[10px]'>Save</button>
                        </div>

                    </div>
                </div>
            </div>

                <div className='fixed w-screen h-screen bg-[#00000055] top-0 left-0' />
            </>}

            {twitter && <> <div className='z-[999] fixed m-auto top-24 so:top-60 right-0 so:right-[50px] w-[100%] so:w-[500px] flex justify-center'>
                <div className='rounded-[10px] flex justify-center bg-white w-[470px]'>
                    <div className='flex flex-col gap-[32px] w-full px-[48px] py-[32px]'>

                        <div className='text-[24px] font-semibold text-[#1D4C41] flex justify-between'>
                            <p>Twitter link</p>

                            <p onClick={() => setTwitter(false)} className='cursor-pointer'>x</p>
                        </div>

                        <div className='w-full'>
                            <input className='bg-[#F6FBF6] h-[39px] w-full p-[10px]' placeholder='add link' />
                        </div>

                        <div className='flex justify-end'>
                            <button className='px-10 py-2 text-white bg-[#4B1FC8] rounded-[10px]'>Save</button>
                        </div>

                    </div>
                </div>
            </div>

                <div className='fixed w-screen h-screen bg-[#00000055] top-0 left-0' />
            </>}

            {whatsapp && <> <div className='z-[999] fixed m-auto top-24 so:top-60 right-0 so:right-[50px] w-[100%] so:w-[500px] flex justify-center'>
                <div className='rounded-[10px] flex justify-center bg-white w-[470px]'>
                    <div className='flex flex-col gap-[32px] w-full px-[48px] py-[32px]'>

                        <div className='text-[24px] font-semibold text-[#1D4C41] flex justify-between'>
                            <p>Whatsapp link</p>

                            <p onClick={() => setWhatsapp(false)} className='cursor-pointer'>x</p>
                        </div>

                        <div className='w-full'>
                            <input className='bg-[#F6FBF6] h-[39px] w-full p-[10px]' placeholder='add link' />
                        </div>

                        <div className='flex justify-end'>
                            <button className='px-10 py-2 text-white bg-[#4B1FC8] rounded-[10px]'>Save</button>
                        </div>

                    </div>
                </div>
            </div>

                <div className='fixed w-screen h-screen bg-[#00000055] top-0 left-0' />
            </>}


            {preview && <>
                <div className='h-[410px] w-[300px] flex flex-col justify-center drop-shadow-lg fixed m-auto top-0 bottom-0 right-0 left-0 z-[999]'>
                    <Preview />
                </div>

                <div onClick={() => setPreview(false)} className='fixed w-screen h-screen bg-[#00000055] top-0 left-0' />
            </>}

        </div>
    )
}

export default Profile
