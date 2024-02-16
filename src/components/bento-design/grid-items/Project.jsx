import { useState } from "react";
import Gallery from "../../Gallery";

const Project = ({item}) => {
    const [showGallery, setShowGallery] = useState(null);

    const toggleGallery = (i) => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      setShowGallery(i);
    };
    return (
        <>
            <div key={item.id} className="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg flex flex-col">
            <div className="absolute z-[-1] -inset-1 bg-gradient-to-r from-lightgreen to-green rounded-lg blur opacity-25"></div>
                <img
                    data-tooltip="tooltip-open-gallery"
                    src={item.cover_image}
                    alt={item.title}
                    onClick={()=>toggleGallery(item.id)}
                    className="w-full mx-auto aspect-video cursor-pointer tooltip-on-hover"
                />
                <p data-tooltip-target="tooltip-open-gallery" role="tooltip" 
                className="absolute z-10 px-3 py-2 text-sm font-[700] opacity-0 transition-opacity duration-300 bg-green text-beige rounded-lg shadow-sm tooltip">
                    Open Gallery
                    <span class="tooltip-arrow" data-popper-arrow></span>
                </p>
                <div className="flex flex-col justify-between space-y-2 mt-4">
                    <h2 className="sm:text-2xl text-lg font-[700]">{item.title}</h2>
                    <p className="font-[400]">{item.brief}</p>
                    <ul className="list-style-none flex flex-wrap items-center text-center">
                        {Array.isArray(item.stacks)&&item.stacks.map((stack, i) => (
                        <li key={i} className="min-w-[70px] bg-darkgreen text-lightbeige border brder-darkgreen font-[400] text-[12px] p-2 rounded-full">{stack}</li>
                        ))}
                    </ul>
                    <div className="flex flex-wrap justify-between items-end gap-4">
                    {item.link && <a href={item.link} target="_blank" aria-label={`View the published webdite of ${item.title}`} rel="noopener noreferrer" className="cursor-pointer sm:text-md font-[700] hover:brightness-200">View <span className="text-2xl">&rarr;</span></a>}
                    <a href={item.github.frontend} target="_blank" aria-label={`View my frontend repo for ${item.title}`} rel="noopener noreferrer" className="cursor-pointer sm:text-md font-[700] hover:brightness-200">Frontend Repo <span className="text-2xl">&rarr;</span></a>
                    {item.github.backend && <a href={item.github.backend} target="_blank"aria-label={`View my backend repo for ${item.title}`} rel="noopener noreferrer" className="cursor-pointer sm:text-md font-[700] hover:brightness-200">Backend Repo <span className="text-2xl">&rarr;</span></a>}
                    </div>
                </div>        
            </div>
            <Gallery isOpen={showGallery} key={item.id} images={item.images} onClose={()=>toggleGallery(null)}/>
        </>
    );
}

export default Project;
