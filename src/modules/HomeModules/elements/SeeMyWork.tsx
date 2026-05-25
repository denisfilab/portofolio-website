import React, { RefObject } from 'react';
import Image from 'next/image';

interface SeeMyWorkProps {
    scrollToRef: RefObject<HTMLDivElement>;
}

const SeeMyWork: React.FC<SeeMyWorkProps> = ({ scrollToRef }) => {
    const handleClick = () => {
        scrollToRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div
            className={`flex justify-center items-center w-[150px] h-[150px] max-xl:w-[120px] max-xl:h-[120px] rounded-full bg-blue-gradient p-[2px] cursor-pointer z-10 subtle-move-1`}
            onClick={handleClick}
        >
            <div className={`flex justify-center items-center flex-col bg-black w-[100%] h-[100%] rounded-full`}>
                <div className={`flex justify-center items-center flex-row`}>
                    <p className="font-poppins font-medium text-[18px] max-xl:w-[16px] leading-[23.4px]">
                        <span className="text-gradient">See</span>
                    </p>
                    <Image src='/images/arrow-upp.svg' width={23} height={23} alt="arrow-up" className="h-[23px] w-[23px] max-xl:ml-[1rem] object-contain" />
                </div>
                <p className="font-medium text-[18px] max-xl:text-[16px] leading-[23.4px]">
                    <span className="text-gradient">My Work</span>
                </p>
            </div>
        </div>
    );
};

export default SeeMyWork;
