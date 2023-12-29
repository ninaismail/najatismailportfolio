const About = () => {
    return (
    <section className="w-full 2xl:h-screen mx-auto py-5 bg-beige text-darkolive flex flex-col justify-center items-center gap-y-4">
        <h1 className="2xl:text-7xl xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-[500]">Hi I'm Najat and I'm a Developer.</h1>
        <ul className="w-11/12 list-style-none 2xl:columns-3 sm:columns-2 space-y-4">
            <img alt="Najat Ismail"
            loading="lazy"
            src="../../images/profilepic.webp" 
            className="w-full aspect-square bg-lightbeige p-5"/>
            <p className="relative lg:text-4xl md:text-xl sm:text-lg text-justify font-[300] sm:ms-10">
            I've been wanting to make a portfolio website for so long now, and this section is the reason I wouldn't do it!
            How do I interduce myself in an effective way? Hmmm, maybe by telling you about my values, mission and vission 💡:
            </p>
            <li className="relative lg:text-4xl md:text-xl sm:text-lg text-justify sm:ms-10">
                <span className="text-8xl opacity-50 text-olive font-[700] absolute -inset-5">1.</span>
                <strong>My Values: </strong> 
                I value authentecity in myself and others; no matter the situation, no matter the person, I stay authentic to myself.
                I'm honest; 'm not afraid to say what needs to be said, how it needs to be said. 
                And most inportantly I'm respectful.
            </li>
            <li className="relative lg:text-4xl md:text-xl sm:text-lg text-justify sm:ms-10">
                <span className="text-8xl opacity-50 text-olive font-[700] absolute -inset-5">2.</span>
                <strong>My Mission: </strong> I produce the best result possible for every client case. I take pride in my craft and I don't settle for less. I approach my projects with planning and stratigic thinking because chaos will only lead to more chaos.
            </li>
            <li className="relative lg:text-4xl md:text-xl sm:text-lg text-justify sm:ms-10">
                <span className="text-8xl opacity-50 text-olive font-[700] absolute -inset-5">3.</span>
                <strong>My Vision: </strong> I believe that my approach will help you with your existing and upcomming projects.
            </li>
        </ul>
    </section>
    );
}

export default About;

