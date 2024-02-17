const Profile = ({item}) => {
    return (
        <div className="relative px-7 py-6 bg-white ring-1 ring-lightgreen/5 rounded-lg space-y-4">
            <div className="absolute z-[-1] -inset-1 bg-gradient-to-r from-lightgreen to-green rounded-lg blur opacity-25"></div>
            <img 
                src={item?.image} 
                alt="Najat Ismail"
                fetchpriority="high"
                width="124"
                height="124"
                />
            <h1 className="sm:text-xl text-lg text-green font-[400]">{item.title}</h1>
            <div className="space-y-2">
                <h2 className="sm:text-2xl text-xl font-[800]">{item.name}</h2>
                <p className="font-[400] text-slate-800">{item.brief}</p>
            </div>
            <div className="flex flex-wrap gap-2">
                <p className="font-[400] border-[2px] border-green px-4 py-3 w-fit rounded-lg">{item.location}</p>
                <a href={item.resumelink} title="Download My Resume" aria-label="Click here to download my resume" download rel="noopener noreferrer" target="_blank"
                className="cursor-pointer hover:bg-slate-200 font-[400] border-[2px] border-green px-4 py-3 w-fit mt-0 rounded-lg">
                {item.resume}</a>                
                <a href={item.link} title="Open Your Email" aria-label="Click here to open your email" rel="noopener noreferrer" target="_blank"
                className="cursor-pointer hover:bg-slate-200 font-[400] border-[2px] border-green px-4 py-3 w-fit mt-0 rounded-lg">
                {item.contact}</a>
            </div>
       </div>
    );
}

export default Profile;
