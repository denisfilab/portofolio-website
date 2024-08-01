import JobTitle from "./elements/JobTitle";
const ExperienceSection = () => {
    return (
        <section className="w-full h-[120vh] flex flex-col mt-[4vw] z-[100]">
            <h2 className='text-white font-semibold text-[4vw] max-lg:text-[4.2vw] max-md:text-[2.5rem]'>My Experiences</h2>
            <div className="flex flex-col gap-8 mt-[2vw]">

                <JobTitle
                    startDate='June 2024'
                    endDate=''
                    company='KOMPek 27 FEB UI'
                    title='SOFTWARE ENGINEER'
                    responsibilities={[
                        'Implemented the "About Us" and "Competition" pages using Next.js and Tailwind CSS, while also resolving bugs across various site pages'
                    ]}
                />
                <JobTitle
                    startDate='June 2024'
                    endDate=''
                    company='DDP-0'
                    title='EVENT STAFF'
                    responsibilities={[
                        'Managed 500+ participants Zoom meetings, ensuring seamless execution and technical support',
                        'Developed opening presentations, setting the tone and engaging participants.',
                        'Collaborated with a team, meticulously planning the event flow and logistics'
                    ]}
                />


            </div>
        </section>
    )
}
export default ExperienceSection;