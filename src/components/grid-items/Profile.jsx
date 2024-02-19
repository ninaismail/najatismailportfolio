const Profile = ({item}) => {
    return (
       <div className="relative py-6 space-y-4 bg-white rounded-lg dark:bg-content px-7 ring-1 ring-accent1">
        <div className="absolute z-[-1] -inset-1 bg-gradient-to-r from-accent1 to-accent3 dark:from-darkaccent1 dark:to-darkaccent3 rounded-lg blur opacity-25"></div>
            <img 
                src={item?.image} 
                alt="Najat Ismail"
                fetchpriority="high"
                width="124"
                height="124"
                />
            <h1 className="sm:text-xl text-lg text-accent3 dark:text-darkaccent1 font-[400]">{item.title}</h1>
            <div className="space-y-2">
                <h2 className="sm:text-2xl text-xl font-[800] dark:text-bg">{item.name}</h2>
                <p className="font-[400] text-content dark:text-bg">{item.brief}</p>
            </div>
            <div className="flex flex-wrap gap-2">
                <p className="font-[400] dark:text-bg border-[2px] border-accent3 dark:border-darkaccent2 px-4 py-3 w-fit rounded-lg">{item.location}</p>
                <a href={item.resumelink} title="Download My Resume" aria-label="Click here to download my resume" download rel="noopener noreferrer" target="_blank"
                className="cursor-pointer hover:bg-slate-200 font-[400] dark:text-bg border-[2px] border-accent3 dark:border-darkaccent2 px-4 py-3 w-fit mt-0 rounded-lg">
                {item.resume}</a>                
                <a href={item.contactlink} title="Open Your Email" aria-label="Click here to open your email" rel="noopener noreferrer" target="_blank"
                className="cursor-pointer hover:bg-slate-200 font-[400] dark:text-bg border-[2px] border-accent3 dark:border-darkaccent2 px-4 py-3 w-fit mt-0 rounded-lg">
                {item.contact}</a>
            </div>
       </div>
    );
}

export default Profile;
