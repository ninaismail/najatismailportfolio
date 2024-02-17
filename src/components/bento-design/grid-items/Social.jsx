const Socials = ({item}) => {
    return (
        <div className="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg flex flex-col">
            <div className="absolute z-[-1] -inset-1 bg-gradient-to-r from-lightgreen to-green rounded-lg blur opacity-25"></div>
            <h1 className="sm:text-lg text-md font-[800]">{item.title}</h1>
            {Array.isArray(item.socials)&&item.socials.map((social, i) => (
            <div className="flex items-center gap-4 space-y-2">
                <a key={i} href={social?.link} title={`Open ${social.title}`} aria-label={`Click here to open ${social.title}`} rel="noopener noreferrer" className="h-[40px] hover:brightness-150" target="_blank">
                    {social?.icon}
                </a>                
                <p className="font-[400] text-slate-800">{social.brief}</p>
            </div>
            ))}
        </div>
    );
}

export default Socials;
