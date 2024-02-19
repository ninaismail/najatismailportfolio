const Social = ({item}) => {
    return (
        <div className="relative h-full py-6 rounded-lg bg-white dark:bg-content px-7 ring-1 ring-accent1">
         <div className="absolute z-[-1] -inset-1 bg-gradient-to-r from-accent1 to-accent3 dark:from-darkaccent1 dark:to-darkaccent3 rounded-lg blur opacity-25"></div>
            <div className="w-[48px]">{item.icon}</div>
            <div className="flex flex-wrap justify-between gap-4">
                <div>
                    <h1 className="sm:text-lg text-md font-[800] dark:text-bg">{item.title}</h1>
                    <small className="font-[200] text-content dark:text-bg">{item.name}</small>
                </div>
                <a href={item.link} title={`Open ${item.title}`} aria-label={`Click here to open ${item.title}`} 
                rel="noopener noreferrer" 
                className="h-[28px] px-4 text-bg font-[900] rounded-md hover:brightness-150"
                style={{ backgroundColor: item.brandingcolor }}
                target="_blank">
                {item.visit}
                </a>                
            </div>                    
            <p className="font-[400] text-content dark:text-bg">{item?.brief}</p>
        </div>
    );
}

export default Social;
