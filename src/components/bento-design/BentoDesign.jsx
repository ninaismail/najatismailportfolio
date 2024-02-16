import GridItemsData from "../../config/grid-items-data";
import Contact from "./grid-items/Contact";
import MyApproach from "./grid-items/MyApproach";
import Profile from "./grid-items/Profile";
import Project from "./grid-items/Project";
import Socials from "./grid-items/Socials";

const BentoDesign = () => {
const gridItems = GridItemsData();
    return (
        <div className="md:w-10/12 grid grid-cols-4 mx-auto p-6 gap-6">
        {Array.isArray(gridItems)&&gridItems.map((item, i) => (
            <div key={item.title + item.type + i} className={`col-span-full ${(i===0 || i===7) ? "md:col-span-4" : "md:col-span-2 "}`}>
            {item.type === "profile" ? (
            <Profile item={item} />
            ) : item.type === "myapproach" ? (
            <MyApproach item={item} />
            ) : item.type === "socials" ? (
            <Socials item={item} />
            ) : item.type === "contact" ? (
            <Contact item={item} />
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
