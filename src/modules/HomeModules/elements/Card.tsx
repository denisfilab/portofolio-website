import Image from 'next/image';
import Button from './Button';
import Link from 'next/link';

interface CardProps {
    imageSrc?: string;
    title: string;
    description: string;
    githubLink?: string;
    previewLink?: string;
    previewText?: string;
    eyebrow?: string;
    period?: string;
    tags?: string[];
    spotlight?: string;
}
const Card: React.FC<CardProps> = ({ imageSrc, title, description, githubLink, previewLink, previewText, eyebrow, period, tags = [], spotlight }) => {
    return (
        <section className='flex flex-row max-lg:flex-col h-full mt-6 mb-[3vw] gap-8 px-[2.8vw] py-[2.5vw] max-md:px-5 max-md:py-6 bg-black-gradient-2 rounded-[18px] box-shadow card z-[1]'>
            <div className="relative flex min-h-[16rem] w-[44%] max-lg:w-full items-center justify-center overflow-hidden rounded-[12px] bg-[#050816] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]">
                {imageSrc ? (
                    <Image
                        src={imageSrc}
                        width={980}
                        height={640}
                        alt={`${title} project preview`}
                        className='h-auto w-full image-outline'
                    />
                ) : (
                    <div className='flex h-full min-h-[16rem] w-full flex-col justify-between p-6'>
                        <div className='flex items-center justify-between'>
                            <span className='text-gradient text-sm font-semibold uppercase tracking-[0.24em]'>{eyebrow || 'Selected work'}</span>
                            {period && <span className='text-xs text-dimWhite'>{period}</span>}
                        </div>
                        <div>
                            <p className='text-gradient text-[4rem] font-semibold leading-none max-sm:text-[3rem]'>{title.split(' ').map((word) => word[0]).join('').slice(0, 3)}</p>
                            {spotlight && <p className='mt-4 text-base leading-7'>{spotlight}</p>}
                        </div>
                    </div>
                )}
            </div>

            <div className='flex flex-col justify-start h-full flex-1 gap-4'>
                <div>
                    <div className='flex flex-row flex-wrap gap-3 text-sm'>
                        {eyebrow && <p className='text-gradient font-semibold uppercase tracking-[0.22em]'>{eyebrow}</p>}
                        {period && <p className='text-dimWhite'>{period}</p>}
                    </div>
                    <h3 className='mt-2 text-white font-semibold text-[clamp(1.7rem,2.4vw,2.7rem)] leading-tight balance'>{title}</h3>
                </div>
                <p className='font-light text-base leading-8 w-[100%] pretty' style={{
                    color: 'rgba(255, 255, 255, 0.7)'
                }}>
                    {description}
                </p>
                {tags.length > 0 && (
                    <div className='flex flex-row flex-wrap gap-2'>
                        {tags.map((tag) => (
                            <span key={tag} className='rounded-full bg-white/[0.06] px-3 py-1 text-sm text-dimWhite shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]'>
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
                <div className='flex flex-row flex-wrap items-center gap-5 mt-[0.3vw]'>
                    {githubLink && (
                    <div className='relative w-10 transition-transform duration-200 ease-out active:scale-[0.96]'>
                        <Link href={githubLink} target="_blank" rel="noopener noreferrer">
                            <Image
                                src='/images/github-icon-logo.svg'
                                width={40}
                                height={40}
                                alt='Github Icon'
                                className='h-auto w-full'
                            />
                        </Link>
                    </div>
                    )}
                    {previewLink && previewText && (
                        <Button className='text-sm py-3 px-5' href={previewLink}>{previewText}</Button>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Card;
