import JobTitle from "./elements/JobTitle";
const ExperienceSection = () => {
    return (
        <section className="w-full h-fit flex flex-col mt-[6vw] pb-[8rem] z-[100]">
            <p className='text-gradient text-sm font-semibold uppercase tracking-[0.28em] mb-3'>Experience</p>
            <h2 className='text-white font-semibold text-[clamp(2.4rem,4vw,4rem)] leading-tight balance'>Where the work has grown recently.</h2>
            <div className="flex flex-col gap-8 mt-[2vw]">

                <JobTitle
                    startDate='March 2026'
                    endDate=''
                    company='Pikira.id'
                    title='PRODUCT & ENGINEERING'
                    responsibilities={[
                        'Contributed full-stack workflows for assessment generation, quiz and classwork flows, grading support, and Google Classroom integration.',
                        'Supported field research across schools and helped translate teacher feedback into private-beta pilot workflows.'
                    ]}
                />
                <JobTitle
                    startDate='April 2026'
                    endDate='April 2026'
                    company='BeritaSatu & Investor Daily'
                    title='AI CONSULTANT & INTERNAL AUTOMATION TOOLS'
                    responsibilities={[
                        'Led an internal tools workshop and helped deploy an automation used after the session.',
                        'Helped catalyze dashboard and workflow ideas that saved repeated manual work for the editorial and business teams.'
                    ]}
                />
                <JobTitle
                    startDate='August 2025'
                    endDate='December 2025'
                    company='Hiff.ai'
                    title='APPLIED AI INTERN'
                    responsibilities={[
                        'Worked on fetal-number detection exploration from dataset discovery through evaluation with scarce twin ultrasound samples.',
                        'Supported model evaluation and stress testing for a visual trademark analysis workflow.'
                    ]}
                />
                <JobTitle
                    startDate='October 2025'
                    endDate='December 2025'
                    company='Computer Science Faculty & Psychology Faculty UI'
                    title='SOFTWARE ENGINEER'
                    responsibilities={[
                        'Built an ETL export workflow for LimeSurvey responses, question-response mapping, and Excel-ready datasets.',
                        'Created SQL-backed mapping between questions and constructs to reduce manual export preparation.'
                    ]}
                />


            </div>
        </section>
    )
}
export default ExperienceSection;
