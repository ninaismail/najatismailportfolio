import GridItemsData from "../config/grid-items-data";
import Profile from "./grid-items/Profile";
import Project from "./grid-items/Project";
import Social from "./grid-items/Social";
import { motion } from "framer-motion"

const BentoDesign = () => {
const gridItems = GridItemsData();

const GridVariants = {
    hidden: {opacity: 0},
    show: {
        opacity: 1,
        transition:{
            staggerChildren: 0.25
        }
    }
}
const GridItemVariants = {
    hidden: {opacity: 0},
    show: {opacity: 1}
}
    return (
        <motion.section 
        variants={GridVariants}
        initial="hidden"
        animate="show"
        className="grid grid-flow-row grid-cols-4 gap-6 p-6 mx-auto sm:w-10/12 xl:overflow-y-auto selection:bg-[accent1]">
        {Array.isArray(gridItems)&&gridItems.map((item, i) => (
            <motion.div 
            key={item.title + item.type + i} 
            variants={GridItemVariants}
            className={`col-span-full
            ${(item.type === "social" && item.title !== "Github") ? "lg:col-span-1 md:col-span-2" : "lg:col-span-2 md:col-span-4"}
            ${(item.type === "profile") ? "lg:col-span-2 md:col-span-4" : '' }
            ${(item.type === "profile") ? "lg:row-span-3 md:row-span-2" : (item.type === "social" && item.title=== "Github") ? "md:row-span-1" : "lg:row-span-2 md:row-span-1"}`}>
            {item.type === "profile" ? (
                <Profile item={item} />
            ) : item.type === "social" ? (
                <Social item={item} />
            ) : item.type === "project" ? (
                <Project item={item} />
            ) : (
            <div>Need to create new component type.</div>
            )}
            </motion.div>
         ))}
        </motion.section>
    );
}

export default BentoDesign;
