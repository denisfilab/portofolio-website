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
        <div className="flex flex-col rounded-[18px] bg-black-gradient-2 px-7 py-6 shadow-[0_18px_70px_rgba(0,0,0,0.18)] max-sm:px-5">
            <p className="font-normal text-sm italic" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                {startDate} - {endDate || 'Present'}
            </p>
            <h3 className="font-semibold text-[clamp(1.6rem,2.4vw,2.8rem)] leading-tight text-white mt-2 balance">{company}</h3>
            <h4 className="font-semibold text-[clamp(1.1rem,1.6vw,1.7rem)] text-gradient mt-2">{title}</h4>
            <ul className="list-none pl-0 mt-4 text-base leading-8 text-dimWhite">
                {responsibilities.map((responsibility, index) => (
                    <li key={index} className="gap-5 before:content-['•'] before:mr-3 before:text-secondary">
                        {responsibility}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default JobTitle;
