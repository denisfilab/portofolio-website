import Card from './elements/Card';
const ProjectSection = () => {
    return (
        <section className="relative w-full h-fit flex flex-col justify-content items-center mt-[15vw] z-20">
            <h2 className='text-white font-semibold text-[4vw] mb-[1vw] self-start max-md:text-[2.5rem]'>
                My Projects
            </h2>
            <div className="absolute z-[1] w-[50%] h-[80%] rounded-full white__gradient bottom-40 -left-[100rem] inset-6" />

            <Card
                imageSrc='/images/gambling-preview.png'
                title='Gambling Mines Clone'
                description='This project was created using HTML, CSS, and JavaScript. I learned a lot about front-end development, including layout design and interactive elements. Additionally, I used generative AI to create the asset images and sounds, enhancing the visual and auditory experience of the game.'
                githubLink='https://github.com/denisfilab/gambling-mines-clone'
                previewLink='https://gambling-mines-clone.vercel.app/'
                previewText='Preview'
            />
            <div className="absolute z-[0] w-[40%] h-[50%] -right-[3rem] bottom-[30rem] max-custom:w-[50%] max-custom:bottom-0 max-custom:right-[8rem] pink__gradient " />
            <div className="absolute z-[0] w-[40%] h-[50%] -right-[7rem] bottom-[30rem] max-custom:w-[80%] max-custom:bottom-[5rem] max-custom:right-[5rem] blue__gradient" />
            <Card
                imageSrc='/images/pokemon-project.png'
                title='Pokemon Card Generator'
                description='I used the DALL-E 3 API for the Pokémon images, employing prompt engineering to maintain a consistent style across Pokémon generations. Each card has properties stored in JSON format, which are then uploaded to a Supabase database. To render the cards, I utilized the Python PIL library hosted on AWS EC2 instances, and after rendering, the images are then uploaded to a Supabase bucket. The interactive elements are built with React. This project taught me a lot about asynchronous functions when calling multiple APIs and integrating different technologies to create cohesive, visually appealing designs.'
                githubLink='https://github.com/denisfilab/Pokemon-Generator'
                previewLink='https://pokemon-generator-lime.vercel.app/generate'
                previewText='Create It Yourself'
            />
            <Card
                imageSrc='/images/face-recognition-project.png'
                title='Face Recognition Model'
                description='I used YOLOv8 to detect faces, extracting the images within the bounding boxes. These images are then sent to a previously trained Support Vector Classfier model to classify the faces. After classification, I used PIL to annotate the name of the person on the image.'
                githubLink='/error'
                previewLink='/error'
                previewText='Preview'
            />

        </section>
    )
}
export default ProjectSection;