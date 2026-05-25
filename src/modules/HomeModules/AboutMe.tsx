'use client'
import Image from 'next/image'
import Button from './elements/Button'
import React from 'react'

const AboutMe = () => {
    return (
        <section className="relative w-full h-fit flex flex-row max-lg:flex-col max-lg:gap-8 justify-content lg:gap-[3vw] items-center mt-[10vh] max-custom:mt-[14vh]">
            <div className='flex relative w-[34rem] max-xl:w-[32rem] max-xs:w-[20rem] max-xxs:w-[18rem]'>
                <Image src='/images/picture-of-me.png'
                    width={640}
                    height={760}
                    alt='My Picture'
                    className='h-auto w-full image-outline rounded-[1.3rem]'
                />
            </div>
            <div className='flex flex-col w-[90%] max-lg:items-center'>
                <h2 className='text-white font-semibold text-[clamp(2.4rem,4vw,3.6rem)] leading-tight balance'>About Me</h2>
                <p className='text-white font-light text-xl leading-9 mt-[1rem] w-[100%] max-lg:text-center max-lg:text-lg max-sm:text-base max-sm:leading-7 pretty' style={{
                    color: 'rgba(255, 255, 255, 0.7)'
                }}>I&apos;m a Computer Science student at Universitas Indonesia working across product engineering, applied machine learning, and data systems. Recently, my work has focused on production-facing systems: full-stack assessment workflows, ETL pipelines, model evaluation loops, external API integrations, and deployment infrastructure.</p>
                <div className='mt-8 grid grid-cols-2 max-sm:grid-cols-1 gap-3 w-full'>
                    <div className='rounded-[12px] bg-black-gradient-2 px-4 py-4 shadow-[0_16px_60px_rgba(0,0,0,0.18)]'>
                        <p className='text-gradient text-2xl font-semibold tabular-nums'>96%</p>
                        <p className='text-sm leading-6'>cost reduction in visual trademark analysis exploration</p>
                    </div>
                    <div className='rounded-[12px] bg-black-gradient-2 px-4 py-4 shadow-[0_16px_60px_rgba(0,0,0,0.18)]'>
                        <p className='text-gradient text-2xl font-semibold tabular-nums'>1st</p>
                        <p className='text-sm leading-6'>place across national data and paper competitions</p>
                    </div>
                </div>
                <div className='flex flex-row lg:mt-[2rem] items-center gap-4 max-lg:mt-[2rem] max-custom:flex-col max-custom:gap-5'>
                    <Button className='text-base py-3 px-5' href='https://github.com/denisfilab'>GitHub</Button>
                    <Button className='text-base py-3 px-5' href='mailto:danisrahman3105@gmail.com'>Email me</Button>
                </div>
            </div>
        </section>
    )
}
export default AboutMe;
