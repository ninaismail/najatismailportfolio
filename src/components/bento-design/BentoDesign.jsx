import GridItemsData from "../../config/grid-items-data";
import Profile from "./grid-items/Profile";
import Project from "./grid-items/Project";
import Social from "./grid-items/Social";

const BentoDesign = () => {
const gridItems = GridItemsData();
    return (
        <div className="sm:w-10/12 grid grid-cols-4 grid-flow-row mx-auto p-6 gap-6 xl:overflow-y-auto selection:bg-lightgreen">
        {Array.isArray(gridItems)&&gridItems.map((item, i) => (
            <div key={item.title + item.type + i} className={`col-span-full
            ${(item.type === "social" && item.title !== "Github") ? "md:col-span-1" : "md:col-span-2"}
            ${(item.type === "profile") ? "md:row-span-3" : (item.type === "social" && item.title=== "Github") ? "md:row-span-1" : "md:row-span-2"}
            `}>
            {item.type === "profile" ? (
                <Profile item={item} />
            ) : item.type === "social" ? (
                <Social item={item} />
            ) : item.type === "project" ? (
                <Project item={item} />
            ) : (
            <div>Need to create new component type.</div>
            )}
            </div>
         ))}
        </div>
    );
}

export default BentoDesign;
