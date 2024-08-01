'use client'
import Image from 'next/image'
import Button from './elements/Button'
import React, { useState, useEffect, useRef } from 'react'
import CountUp from 'react-countup'



const AboutMe = () => {
    const [isDoneCounting, setIsDoneCounting] = useState(false)
    const [startCounting, setStartCounting] = useState(false)
    const sectionRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setStartCounting(true)
                    observer.disconnect()
                }
            },
            { threshold: 0.1 }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => {
            if (observer && sectionRef.current) {
                observer.unobserve(sectionRef.current)
            }
        }
    }, [])
    return (
        <section ref={sectionRef} className="relative w-full h-fit flex flex-row max-lg:flex-col max-lg:gap-5 justify-content lg:gap-[3vw] items-center mt-[10vh] max-custom:mt-[20vh]">
            <div className='flex relative w-[40rem] max-xl:w-[40rem] max-xs:w-[20rem] max-xxs:w-[18rem]'>
                <Image src='/images/picture-of-me.png'
                    width={0}
                    height={0}
                    alt='My Picture'
                    layout='responsive'
                    className=''
                />
            </div>
            <div className='flex flex-col w-[90%] max-lg:items-center'>
                <h2 className='text-white font-semibold text-5xl'>About Me</h2>
                <p className='text-white font-light text-2xl mt-[1rem] w-[100%] max-lg:text-center max-lg:text-xl max-sm:text-[1.2rem]' style={{
                    color: 'rgba(255, 255, 255, 0.7)'
                }}>Denis is a front-end developer passionate about machine learning and data science. He loves creating user-friendly web interfaces and exploring new AI technologies. Always eager to learn and improve, Denis combines his web development skills with his data interest to deliver innovative solutions. He proactively seeks opportunities to grow and take on new challenges.</p>
                <div className='flex flex-row lg:mt-[2.5rem] max items-center max-lg:mt-[2.5rem] max-custom:flex-col max-custom:gap-5'>
                    <Button className='text-lg py-4 px-6' href='https://s.team/y22/ftvvcjbf?l=english'>I LOVE GAMING</Button>
                    <h2 className="text-white text-5xl font-semibold ml-[5rem] max-custom:ml-0">
                        {startCounting && (
                            <CountUp
                                start={500}
                                end={3711}
                                duration={5}
                                onEnd={() => {
                                    setIsDoneCounting(true)
                                }
                                }
                            />
                        )}
                    </h2>
                    <p className='text-gradient font-light text-2xl ml-[2rem] max-md:ml-0 1text-gradient'>HOURS SPENT IN CSGO</p>
                </div>
            </div>



        </section>
    )
}
export default AboutMe;