import { useState } from "react";
import FsLightbox from "fslightbox-react";

const Project = ({item}) => {
    const [isOpen, setIsOpen] = useState(0);
    
    const toggleLightbox = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <div key={item.id} className="relative py-6 bg-white rounded-lg px-7 ring-1 ring-lightgreen/5">
            <div className="absolute z-[-1] -inset-1 bg-gradient-to-r from-lightgreen to-green rounded-lg blur opacity-25"></div>
                <img
                    data-tooltip="tooltip-open-gallery"
                    src={item.cover_image}
                    alt={item.title}
                    onClick={toggleLightbox}
                    className="w-full mx-auto cursor-pointer aspect-video tooltip-on-hover"
                />
                <p data-tooltip-target="tooltip-open-gallery" role="tooltip" 
                className="absolute z-10 px-3 py-2 text-sm font-[800] opacity-0 transition-opacity duration-300 bg-green text-beige rounded-lg shadow-sm tooltip">
                    Open Gallery
                    <span class="tooltip-arrow" data-popper-arrow></span>
                </p>
                <div className="flex flex-col justify-between mt-4 space-y-2">
                    <h2 className="sm:text-2xl text-lg font-[800]">{item.title}</h2>
                    <p className="font-[400]">{item.brief}</p>
                    <ul className="flex flex-wrap items-center text-center list-style-none">
                        {Array.isArray(item.stacks)&&item.stacks.map((stack, i) => (
                        <li key={i} className="min-w-[70px] bg-darkgreen text-lightbeige border brder-darkgreen font-[400] text-[12px] p-2 rounded-full">{stack}</li>
                        ))}
                    </ul>
                    <div className="flex flex-wrap items-end justify-between gap-4">
                    {item.link && <a href={item.link} target="_blank" aria-label={`View the published webdite of ${item.title}`} rel="noopener noreferrer" className="cursor-pointer sm:text-md font-[800] hover:brightness-200">View <span className="text-2xl">&rarr;</span></a>}
                    <a href={item.github.frontend} target="_blank" aria-label={`View my frontend repo for ${item.title}`} rel="noopener noreferrer" className="cursor-pointer sm:text-md font-[800] hover:brightness-200">Frontend Repo <span className="text-2xl">&rarr;</span></a>
                    {item.github.backend && <a href={item.github.backend} target="_blank"aria-label={`View my backend repo for ${item.title}`} rel="noopener noreferrer" className="cursor-pointer sm:text-md font-[800] hover:brightness-200">Backend Repo <span className="text-2xl">&rarr;</span></a>}
                    </div>
                </div>
            </div>
            <FsLightbox
                toggler={isOpen}
				sources={item.images}
			/>
        </>
    );
}

export default Project;
