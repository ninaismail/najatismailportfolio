import { useState } from "react";
import Gallery from "./Gallery";

const data = [
    {
        id:1,cover_image: "/images/alray/image1.webp",
        images : [
            {src:"/images/alray/image1.webp"},
            {src:"/images/alray/image2.webp"},            
            {src:"/images/alray/image3.webp"},
            {src:"/images/alray/image4.webp"},            
        ],
        name: "Al Ray",
        brief: "A governmental platform for the Saudi Irrigation Organization so citizens can benifit from its services from right where they are.",
        link: "https://www.sio.gov.sa",
        github:"",
        stacks: ["Next.js"]
    },
    {
        id:2,cover_image: "/images/mannasat/image1.webp",
        images : [
            {src:"/images/mannasat/image1.webp"},
            {src:"/images/mannasat/image2.webp"},            
            {src:"/images/mannasat/image3.webp"},
            {src:"/images/mannasat/image4.webp"},            
            {src:"/images/mannasat/image5.webp"},            
        ],
        name: "Mannasat",
        brief: "A SaaS solution for restaurants that branches, clients and drivers can use to accomplish their respective goals.",
        link: "https://www.mannasat.net",
        github:"",
        stacks: ["Next.js"]
    },
    {
        id:3,cover_image: "/images/icedcoffeespot/image2.webp",
        images : [
            {src:"/images/icedcoffeespot/image1.webp"},
            {src:"/images/icedcoffeespot/image2.webp"},            
            {src:"/images/icedcoffeespot/image3.webp"},
            {src:"/images/icedcoffeespot/image4.webp"},            
            {src:"/images/icedcoffeespot/image5.webp"},
            {src:"/images/icedcoffeespot/image6.webp"},            
            {src:"/images/icedcoffeespot/image7.webp"},
            {src:"/images/icedcoffeespot/image8.webp"},
            {src:"/images/icedcoffeespot/image9.webp"},            
            {src:"/images/icedcoffeespot/image10.webp"},
            {src:"/images/icedcoffeespot/image11.webp"},
            {src:"/images/icedcoffeespot/image12.webp"},
            {src:"/images/icedcoffeespot/image13.webp"},
            {src:"/images/icedcoffeespot/image14.webp"},
            {src:"/images/icedcoffeespot/image15.webp"},
        ],
        name: "The Iced Coffee Spot",
        brief: "A coffee spot ordering and delivery system that an iced coffee lover can use to order his/her morning iced coffee online.",
        link: "",
        github: {
            frontend:"https://github.com/ninaismail/icedcoffeespotreactapp",
            backend:"https://github.com/ninaismail/icedcoffeespotnodeapi"
        },
        stacks: ["React","Vite","Node.js","Express","MongoDB"]
    }, 
    {
        id:4,cover_image: "/images/bookabook/image1.webp",
        images : [
            {src:"/images/bookabook/image1.webp"},
            {src:"/images/bookabook/image2.webp"},            
            {src:"/images/bookabook/image3.webp"},
            {src:"/images/bookabook/image4.webp"},            
            {src:"/images/bookabook/image5.webp"},
        ],
        name: "Book a Book",
        brief: "A library book borrowing system that the reader can use to search and filter books, find available ones and request them for a specified time.",
        link: "",
        github: {
            frontend:"https://github.com/ninaismail/mylibrarynextapp",
            backend:"https://github.com/ninaismail/mylibrarylaravelapi"
        },
        stacks: ["Next.js","Laravel","MySQL"]
    }, 
];

const Projects = () => {
    const [showGallery, setShowGallery] = useState(false);

    const toggleGallery = (i) => {
      setShowGallery(i);
    };
    return (
        <section id="my_projects" className="relative w-full h-full min-h-screen mx-auto py-5 bg-gradient-to-b from-slate-50 via-green to-slate-50 selection:bg-lightgreen text-center flex flex-col justify-center gap-4">
            <h1 className="2xl:text-7xl xl:text-6xl lg:text-5xl sm:text-4xl text-3xl font-[800] mb-4">Check Out My Work!</h1>
            <p className="w-11/12 mx-auto lg:text-4xl md:text-xl sm:text-lg text-center font-[400] mb-2">
            I'm a skilled web developer contributing to a diverse range of projects, showcasing proficiency in web development and modern technology stacks. Here's a snapshot of some of my notable projects:
            </p>
            <div className="w-11/12 mx-auto flex flex-wrap justify-center items-center gap-4">
            {Array.isArray(data)&&data.map((item, i) => (
              <>
              <div key={i} className="2xl:w-[24%] lg:w-[49%] md:w-[45%] w-full xl:min-h-[512px] lg:min-h-[528px] sm:min-h-[468px] min-h-[300px] bg-lightbeige text-darkgreen ring-1 ring-gray-900/5 rounded-lg p-4">
                <img
                   data-tooltip="tooltip-open-gallery"
                   src={item.cover_image}
                   alt={item.name}
                   className="w-full aspect-video cursor-pointer tooltip-on-hover"
                   onClick={()=>toggleGallery(i)}
                />
                <p data-tooltip-target="tooltip-open-gallery" role="tooltip" 
                className="absolute z-10 px-3 py-2 text-sm font-[800] opacity-0 transition-opacity duration-300 bg-green text-beige rounded-lg shadow-sm tooltip">
                    Open Gallery
                    <span class="tooltip-arrow" data-popper-arrow></span>
                </p>
                <div className="flex flex-col justify-between space-y-[8px] mt-4">
                   <h2 className="sm:text-2xl text-lg font-[800]">{item.name}</h2>
                   <p className="font-[400]">{item.brief}</p>
                   <ul className="min-h-[72px] list-style-none flex flex-wrap justify-center items-center">
                       {Array.isArray(item.stacks)&&item.stacks.map((stack, i) => (
                       <li key={i} className="min-w-[70px] bg-darkgreen text-lightbeige border brder-darkgreen font-[400] text-[12px] p-2 rounded-full">{stack}</li>
                       ))}
                   </ul>
                   <div className="flex flex-wrap justify-between items-end gap-4">
                    {item.link && <a href={item.link} target="_blank" aria-label={`View the published webdite of ${item.title}`} rel="noopener noreferrer" className="cursor-pointer sm:text-md font-[800] hover:brightness-200">View <span className="text-2xl">&rarr;</span></a>}
                    <a href={item.github.frontend} target="_blank" aria-label={`View my frontend repo for ${item.title}`} rel="noopener noreferrer" className="cursor-pointer sm:text-md font-[800] hover:brightness-200">Frontend Repo <span className="text-2xl">&rarr;</span></a>
                    {item.github.backend && <a href={item.github.backend} target="_blank"aria-label={`View my backend repo for ${item.title}`} rel="noopener noreferrer" className="cursor-pointer sm:text-md font-[800] hover:brightness-200">Backend Repo <span className="text-2xl">&rarr;</span></a>}
                   </div>
                </div>
              </div>    
              {showGallery===i && 
                <Gallery key={i} images={item.images} close={()=>setShowGallery(false)}/>
               }
               </>
            ))}
            </div>
        </section>
    );
}

export default Projects;