import React, { RefObject } from 'react'
import Image from 'next/image'

interface HeroSectionProps {
    scrollToRef: RefObject<HTMLDivElement>;
}

const HeroSection: React.FC<HeroSectionProps> = ({ scrollToRef }) => {
    const scrollToWork = () => {
        scrollToRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="relative w-full min-h-screen flex flex-row max-custom:flex-col max-custom:min-h-fit items-center max-custom:items-start py-[4.5rem] max-custom:pt-[7rem]">
            <div className="flex flex-col w-[62%] max-custom:w-full mb-5 z-10">
                <p className="text-gradient uppercase tracking-[0.28em] text-sm max-sm:text-xs font-semibold mb-5">
                    Portfolio 2026
                </p>
                <h1 className="text-white font-semibold text-[clamp(3.2rem,7vw,6.4rem)] leading-[0.95] max-lg:leading-[1.05]">
                    Daanish Rahman
                </h1>
                <div className="mt-4 flex flex-col gap-2">
                    <h2 className="text-gradient w-fit font-semibold text-[clamp(2.25rem,4.6vw,4.45rem)] leading-none text-nowrap">Product Engineering</h2>
                    <h2 className="text-gradient w-fit font-semibold text-[clamp(2.25rem,4.6vw,4.45rem)] leading-none text-nowrap">Data Systems</h2>
                </div>
                <p className="mt-6 max-w-[44rem] text-[1.08rem] leading-8 max-md:text-base max-md:leading-7 pretty">
                    Computer Science student at Universitas Indonesia building full-stack products, data workflows, and machine-learning systems with a bias toward shipping useful tools.
                </p>
                <div className="mt-7 flex flex-row flex-wrap gap-4">
                    <button
                        type="button"
                        onClick={scrollToWork}
                        className="min-h-[44px] rounded-[10px] bg-blue-gradient px-6 py-3 font-semibold text-primary transition-transform duration-200 ease-out active:scale-[0.96]"
                    >
                        View selected work
                    </button>
                </div>
                <div className="absolute z-[1] w-[50%] h-[80%] rounded-full white__gradient bottom-40 -left-[100rem] inset-6" />
            </div>
            <div className='flex-1 flex justify-content items-center my-10 max-custom:mt-[55vw]'>
                <div className='absolute w-[40vw] max-custom:w-[82vw] right-0 max-custom:right-6'>
                    <Image
                        src='/images/robot-hand.png'
                        width={820}
                        height={640}
                        alt='Hero Image'
                        className='absolute -right-[8vw] -bottom-[21vw] z-10 h-auto w-full max-xl:-bottom-[19vw] image-outline' />
                </div>
                <div className='relative w-[101px] max-sm:hidden'>
                    <Image
                        src='/images/Vector-1.svg'
                        width={101}
                        height={101}
                        alt='Hero Image'
                        className='absolute right-[8vw] bottom-[15vw] z-[2] max-xl:-bottom-[20vw] max-[1128px]:-bottom-[25vw] max-[1128px]:right-[6vw] max-custom:right-[2vw] max-custom:-bottom-[10vw] subtle-move-2' />

                </div>
                <div className='relative w-[32px] max-sm:hidden'>
                    <Image
                        src='/images/Vector-1.svg'
                        width={32}
                        height={32}
                        alt='Hero Image'
                        className='absolute right-[7vw] bottom-[14vw] z-[2] max-xl:-bottom-[20vw] max-[1128px]:-bottom-[25vw] max-[1128px]:right-[5vw] max-custom:right-[2vw] max-custom:-bottom-[15vw] subtle-move-3' />

                </div>
                <div className="absolute z-[0] w-[40%] h-[50%] -right-[3rem] bottom-[30rem] max-custom:w-[50%] max-custom:bottom-0 max-custom:right-[8rem] pink__gradient " />
                <div className="absolute z-[0] w-[40%] h-[50%] -right-[7rem] bottom-[30rem] max-custom:w-[80%] max-custom:bottom-[5rem] max-custom:right-[5rem] blue__gradient" />
            </div>


        </section>
    )
}
export default HeroSection;
