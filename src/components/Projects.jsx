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
        brief: "A brief description of the first project.",
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
        brief: "A brief description of the first project.",
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
        brief: "A brief description of the first project.",
        link: "",
        github: [
            {frontend:"https://github.com/ninaismail/icedcoffeespotreactapp"},
            {backend:"https://github.com/ninaismail/icedcoffeespotnodeapi"}
        ],
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
        brief: "A brief description of the first project.",
        link: "",
        github: [
            {frontend:"https://github.com/ninaismail/mylibrarynextapp"},
            {backend:"https://github.com/ninaismail/mylibrarylaravelapi"}
        ],
        stacks: ["Next.js","Laravel","MySQL"]
    }, 
];

const Projects = () => {
    const [showGallery, setShowGallery] = useState(false);

    const toggleGallery = (i) => {
      setShowGallery(i);
    };
    return (
        <section id="my_projects" className="relative w-full lg:h-screen h-full mx-auto bg-olive text-beige text-center flex flex-col justify-center gap-4">
            <h1 className="text-[8vh] font-[700]">Check out my work!</h1>
            <p className="w-11/12 mx-auto lg:text-4xl md:text-xl sm:text-lg text-center font-[300]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="w-11/12 mx-auto flex flex-wrap justify-center items-center gap-2">
            {Array.isArray(data)&&data.map((item, i) => (
              <>
              <div key={i} className="xl:w-[24%] lg:w-1/4 sm:w-1/2 w-full min-h-[294px] bg-lightbeige text-darkblue shadow-lg rounded-lg p-4 ease duration-300 hover:scale-105">
                <img
                   src={item.cover_image}
                   alt={item.name}
                   className="w-full aspect-video cursor-pointer"
                   onClick={()=>toggleGallery(i)}
                />
                <div className="mt-4 flex flex-col justify-between space-y-[4px]]">
                   <h2 className="sm:text-xl font-[500]">{item.name}</h2>
                   <p className="text-sm font-[300]">{item.brief}</p>
                   <ul className="list-style-none flex flex-wrap justify-center items-end">
                       {Array.isArray(item.stacks)&&item.stacks.map((stack, i) => (
                       <li key={i} className="bg-darkblue text-lightbeige border brder-darkblue font-[300] text-[12px] p-2 rounded-full">{stack}</li>
                       ))}
                   </ul>
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
