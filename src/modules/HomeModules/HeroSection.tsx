import React from 'react'
import Image from 'next/image'
import SeeMyWork from './elements/SeeMyWork';
import CountUp from 'react-countup'



const HeroSection = () => {
    return (
        <section className="relative w-full h-screen flex flex-row max-custom:flex-col max-custom:h-fit items-center max-custom:items-start">
            <div className="flex flex-col w-[60%] max-custom:w-[90%] mb-5 max-custom:mt-[8rem] z-10 ">
                <h1 className="text-white font-semibold text-8xl max-xl:text-7xl max-lg:text-6xl max-sm:text-[10vw] leading-tight max-xl:leading-[1.2] max-lg:leading-[1.3] ">
                    Hola!<br className=""></br>I'm Denis
                </h1>
                <h1 className="text-gradient font-semibold text-8xl max-xl:text-7xl max-lg:text-6xl max-sm:text-[10vw]  leading-tight max-xl:leading-[1.2] max-lg:leading-[1.3]">Frontend Dev</h1>
                <h1 className="text-gradient font-semibold text-8xl max-xl:text-7xl max-lg:text-6xl max-sm:text-[10vw]  leading-tight max-xl:leading-[1.2] max-lg:leading-[1.3]">AI Enthusiast</h1>
                <div className="absolute z-[1] w-[50%] h-[80%] rounded-full white__gradient bottom-40 -left-[100rem] inset-6" />
                <div className='absolute left-[30rem] max-xl:left-[23rem] max-xl:top-[10rem] max-[547px]:hidden'>
                    <SeeMyWork />
                </div>
            </div>
            {/* <div className='absolute w-[800px] z-10 right-[4rem] top-[20rem]'>
                <Image
                    src='/images/pokemon-hero.svg'
                    width={0}
                    height={0}
                    alt='pokemon card'
                    layout='responsive'
                    className='absolute' />
            </div> */}
            <div className='flex-1 flex justify-content items-center  my-10 max-custom:mt-[60vw]'>
                <div className='absolute w-[45vw] max-custom:w-[85vw] right-0 max-custom:right-10'>
                    <Image
                        src='/images/robot-hand.png'
                        width={0}
                        height={0}
                        alt='Hero Image'
                        layout='responsive'
                        className='absolute -right-[8vw] -bottom-[25vw] z-10 max-xl:-bottom-[20vw]' />
                </div>
                <div className='relative w-[101px] max-sm:hidden'>
                    <Image
                        src='/images/Vector-1.svg'
                        width={0}
                        height={0}
                        alt='Hero Image'
                        layout='responsive'
                        className='absolute right-[8vw] bottom-[15vw] z-[2] max-xl:-bottom-[20vw] max-[1128px]:-bottom-[25vw] max-[1128px]:right-[6vw] max-custom:right-[2vw] max-custom:-bottom-[10vw] subtle-move-2' />

                </div>
                <div className='relative w-[32px] max-sm:hidden'>
                    <Image
                        src='/images/Vector-1.svg'
                        width={0}
                        height={0}
                        alt='Hero Image'
                        layout='responsive'
                        className='absolute right-[7vw] bottom-[14vw] z-[2] max-xl:-bottom-[20vw] max-[1128px]:-bottom-[25vw] max-[1128px]:right-[5vw] max-custom:right-[2vw] max-custom:-bottom-[15vw] subtle-move-3' />

                </div>
                <div className="absolute z-[0] w-[40%] h-[50%] -right-[3rem] bottom-[30rem] max-custom:w-[50%] max-custom:bottom-0 max-custom:right-[8rem] pink__gradient " />
                <div className="absolute z-[0] w-[40%] h-[50%] -right-[7rem] bottom-[30rem] max-custom:w-[80%] max-custom:bottom-[5rem] max-custom:right-[5rem] blue__gradient" />
            </div>


        </section>
    )
}
export default HeroSection;