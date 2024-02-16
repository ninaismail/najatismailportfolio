const MyApproach = ({item}) => {
    return (
        <div className="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg flex items-center">
            <div className="absolute z-[-1] -inset-1 bg-gradient-to-r from-lightgreen to-green rounded-lg blur opacity-25"></div>
            {item?.icon}
            <div className="space-y-2">
                <h1 className="sm:text-lg text-md font-[700]">{item.title}</h1>
                <p className="font-[400] text-slate-800">{item.brief}</p>
            </div>        
       </div>
    );
}

export default MyApproach;
