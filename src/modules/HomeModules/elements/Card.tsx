import Image from 'next/image';
import Button from './Button';
import Link from 'next/link';

interface CardProps {
    imageSrc: string;
    title: string;
    description: string;
    githubLink: string;
    previewLink: string;
    previewText: string;
}
const Card: React.FC<CardProps> = ({ imageSrc, title, description, githubLink, previewLink, previewText }) => {
    return (
        <section className='flex flex-row max-sm:flex-col h-full mt-6 mb-[4vw] px-[2.8vw] py-[2.5vw] bg-black-gradient-2 rounded-[1.5vw] box-shadow card z-[1]'>
            <div className="relative w-[70%] max-md:self-center">
                <Image
                    src={imageSrc}
                    width={0}
                    height={0}
                    alt='Project Image'
                    layout='responsive'
                />
            </div>

            <div className='flex flex-col justify-start h-full w-fit ml-[3vw] gap-[0.8vw]'>
                <h2 className='text-white font-semibold text-[2.5vw] max-xl:text-[1.8rem] max-md:text-[1.6rem]'>{title}</h2>
                <p className='font-light text-[1.2vw] w-[100%] text-justify max-xl:text-[0.8rem] max-md:text-[1.8vw] max-sm:text-[0.8rem]' style={{
                    color: 'rgba(255, 255, 255, 0.7)'
                }}>
                    {description}
                </p>
                <div className='flex flex-row items-center gap-5 mt-[0.7vw]'>
                    <div className='relative w-[2.8vw] max-md:w-[3.5vw]'>
                        <Link href={githubLink} target="_blank" rel="noopener noreferrer">
                            <Image
                                src='/images/github-icon-logo.svg'
                                width={0}
                                height={0}
                                alt='Github Icon'
                                layout='responsive'
                            />
                        </Link>
                    </div>
                    <Button className='text-[1vw] py-[1.5%] px-[5%]  max-lg:text-[0.8rem]' href={previewLink}>{previewText}</Button>
                </div>
            </div>
        </section>
    );
}

export default Card;
