const GridItems = () => {
const gridItems = new Array(7).fill(0)
    return (
        <div className="grid grid-cols-4 mx-auto p-6 gap-4">
        {Array.isArray(gridItems)&&gridItems.map((item, i) => (
        <div key={item.title + item.type + i}  className={`col-span-${item.cols} row-span-${item.rows} relative max-w-7xl mx-auto`}>
            <div className="absolute -inset-1 bg-gradient-to-r from-lightgreen to-green rounded-lg blur opacity-25"></div>
                <div className="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
                    Hiiiii
                </div>
            </div>
            ))}
        </div>
    );
}

export default GridItems;
