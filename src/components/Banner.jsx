const Banner = () => {
    return (
        <section className="w-full h-screen mx-auto bg-olive text-beige flex flex-col justify-around">
            <div className="w-11/12 border-t-4 border-beige mx-auto">
                <div className="mt-[4px] flex justify-between items-center">
                <small className="font-[400]">About me</small>
                <small className="font-[400]">My projects</small>
                </div>
            </div>
            <div className="2xl:w-8/12 w-11/12 sm:ps-24 ps-4 sm:leading-relaxed">
                <h1 className="2xl:text-7xl xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-xl font-[700]">Welcome To My Portfolio</h1>
                <p className="lg:text-4xl md:text-xl sm:text-lg font-[300] text-justify">I'm a full stack developer mainly focused on front-end development with 4 years of experience in the tech field. I’ve developed and  maintained many projects in React/Next.js and other stacks. I also have a good grasp on project management, database and UX.</p>
            </div>
            <div className="w-11/12 border-b-4 border-beige mx-auto">
                <div className="mb-[4px] flex justify-between items-center">
                <small className="font-[400]">Why work with me?</small>
                <small className="font-[400]">Contact me</small>
                </div>
            </div>
        </section>
    );
}

export default Banner;
