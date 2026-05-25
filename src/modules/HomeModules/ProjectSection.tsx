import Card from './elements/Card';

const projects = [
    {
        imageSrc: '/images/pikira-demo.png',
        title: 'Pikira.id Product Engineering',
        eyebrow: 'Recent work',
        period: '2026 - Present',
        description: 'I contributed to product and engineering work for a school-focused assessment platform, turning field research from teachers and principals into beta-ready workflows. The work spans assessment generation, quiz and classwork flows, grading support, Google Classroom integration, and submission data surfaces.',
        spotlight: 'School pilots, teacher workflows, and production-minded classroom tooling.',
        tags: ['React', 'TypeScript', 'Cloudflare Workers', 'Google Classroom'],
    },
    {
        imageSrc: '/images/logobolt-preview.png',
        title: 'LogoBolt.io',
        eyebrow: 'Product build',
        period: '2025',
        description: 'A full-stack logo generation and editing platform with authentication, credit usage, generated asset storage, payment-triggered credits, and image processing workflows. This project helped me connect product data flows with the practical engineering details behind a paid creative tool.',
        spotlight: 'Credits, storage records, generated assets, and payment webhooks.',
        tags: ['Next.js', 'Python', 'Supabase', 'Image processing'],
        previewLink: 'https://logobolt.io',
        previewText: 'Visit site',
    },
    {
        title: 'Hiff.ai Applied Model Work',
        eyebrow: 'Internship',
        period: '2025',
        description: 'At Hiff.ai, I worked on model evaluation and prototype workflows, including scarce-data ultrasound exploration and a visual trademark analysis system. The experience pushed me to think beyond demos: data quality, edge cases, evaluation, and whether a model workflow is useful under real constraints.',
        spotlight: 'Model evaluation, dataset discovery, and prototype delivery.',
        tags: ['Python', 'Computer vision', 'Evaluation', 'Data curation'],
    },
    {
        imageSrc: '/images/gambling-preview.png',
        title: 'Gambling Mines Clone',
        eyebrow: 'Learning project',
        period: 'Early build',
        description: 'I first created this while learning HTML, CSS, and JavaScript. It was a fun way to understand layout, state, interaction, and how a small browser game starts to feel alive when the details are responsive. Looking back, it captures how I learned by building instead of only following tutorials.',
        tags: ['HTML', 'CSS', 'JavaScript', 'Interaction design'],
        githubLink: 'https://github.com/denisfilab/gambling-mines-clone',
        previewLink: 'https://gambling-mines-clone.vercel.app/',
        previewText: 'Preview',
    },
    {
        imageSrc: '/images/pokemon-project.png',
        title: 'Pokemon Card Generator',
        eyebrow: 'Learning project',
        period: 'First backend deploy',
        description: 'I developed this when I first started learning React and wanted to understand how a frontend connects with real backend workflows. It was also the first time I deployed a web server on AWS EC2. The app integrates with an external image generation API, OpenAI DALL-E, and uses a backend rendering flow to turn generated Pokemon concepts into cards.',
        tags: ['React', 'AWS EC2', 'OpenAI DALL-E', 'Backend rendering'],
        githubLink: 'https://github.com/denisfilab/Pokemon-Generator',
        previewLink: 'https://pokemon-generator-lime.vercel.app/generate',
        previewText: 'Create it yourself',
    },
];

const ProjectSection = () => {
    return (
        <section className="relative w-full h-fit flex flex-col justify-content items-center mt-[8vw] z-20">
            <div className='self-start mb-4 max-w-[52rem]'>
                <p className='text-gradient text-sm font-semibold uppercase tracking-[0.28em] mb-3'>Selected work</p>
                <h2 className='text-white font-semibold text-[clamp(2.1rem,3.2vw,3.3rem)] leading-tight balance'>
                    Recent systems, older learning projects, and the path between them.
                </h2>
            </div>
            <div className="absolute z-[1] w-[50%] h-[80%] rounded-full white__gradient bottom-40 -left-[100rem] inset-6" />

            {projects.map((project) => (
                <Card key={project.title} {...project} />
            ))}
            <div className="absolute z-[0] w-[40%] h-[50%] -right-[3rem] bottom-[30rem] max-custom:w-[50%] max-custom:bottom-0 max-custom:right-[8rem] pink__gradient " />
            <div className="absolute z-[0] w-[40%] h-[50%] -right-[7rem] bottom-[30rem] max-custom:w-[80%] max-custom:bottom-[5rem] max-custom:right-[5rem] blue__gradient" />

        </section>
    )
}
export default ProjectSection;
