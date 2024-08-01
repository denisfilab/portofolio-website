import React from 'react';

interface JobTitleProps {
    startDate: string;
    endDate?: string;
    company: string;
    title: string;
    responsibilities: string[];
}

const JobTitle: React.FC<JobTitleProps> = ({ startDate, endDate, company, title, responsibilities }) => {
    return (
        <div className="flex flex-col">
            <p className="font-normal text-[1vw] italic" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                {startDate} - {endDate || 'Present'}
            </p>
            <h3 className="font-semibold text-[3vw] max-lg:text-[3.3vw] max-md:text-[1.8rem] text-white">{company}</h3>
            <h3 className="font-semibold text-[2.5vw] max-lg:text-[2.8vw] max-md:text-[1.5rem] text-gradient mt-[0.2vw]">{title}</h3>
            <ul className="list-none pl-5 text-[1.2vw] text-gradient max-lg:text-[1rem] max-md:text-[1rem]">
                {responsibilities.map((responsibility, index) => (
                    <li key={index} className="gap-5 ml-[2vw] w-[80vw] before:content-['•'] before:mr-3 before:text-gradient">
                        {responsibility}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default JobTitle;