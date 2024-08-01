const SeeMyWork = () => (
    <div className={`flex justify-center items-center w-[150px] h-[150px] max-xl:w-[120px] max-xl:h-[120px] rounded-full bg-blue-gradient p-[2px] cursor-pointer z-10 subtle-move-1`}>
        <div className={`flex justify-center items-center flex-col bg-black w-[100%] h-[100%] rounded-full`}>
            <div className={`flex justify-center items-center flex-row`}>
                <p className="font-poppins font-medium text-[18px] max-xl:w-[16px] leading-[23.4px]">
                    <span className="text-gradient">See</span>
                </p>
                <img src='images/arrow-upp.svg' alt="arrow-up" className="w-[23px] h-[23px] max-xl:ml-[1rem] object-contain" />
            </div>

            <p className="font-medium text-[18px] max-xl:text-[16px] leading-[23.4px]">
                <span className="text-gradient">My Work</span>
            </p>
        </div>
    </div>
);

export default SeeMyWork;