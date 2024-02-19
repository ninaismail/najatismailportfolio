const Social = ({item}) => {
    return (
        <div className="relative h-full py-6 bg-white rounded-lg px-7 ring-1 ring-lightgreen/5">
            <div className="absolute z-[-1] -inset-1 bg-gradient-to-r from-lightgreen to-green rounded-lg blur opacity-25"></div>
            <div className="w-[40px]">{item.icon}</div>
            <div className="flex flex-wrap justify-between gap-4 space-y-2">
                <div>
                    <h1 className="sm:text-lg text-md font-[800]">{item.title}</h1>
                    <small className="font-[200] text-slate-600">{item.name}</small>
                </div>
                <a href={item.link} title={`Open ${item.title}`} aria-label={`Click here to open ${item.title}`} 
                rel="noopener noreferrer" 
                className="h-[28px] px-4 text-white font-[900] rounded-md hover:brightness-150"
                style={{ backgroundColor: item.brandingcolor }}
                target="_blank">
                {item.visit}
                </a>                
            </div>                    
            <p className="font-[400] text-slate-800">{item?.brief}</p>
        </div>
    );
}

export default Social;
