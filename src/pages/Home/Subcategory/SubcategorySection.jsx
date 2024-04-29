import { useEffect, useState } from "react";
import SubcategoryCard from "./SubcategoryCard";
import { Bounce } from "react-awesome-reveal";

const SubcategorySection = () => {
    const [categories, setCategories] = useState([]); 
    useEffect(()=>{
        fetch("https://artistry-world-server.vercel.app/categories")
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setCategories(data)
        })
    },[])
  return (
    <div className="container  font-lato my-8 mt-28">
        <h1 className="font-lato text-2xl text-center font-bold my-2 "><Bounce> Art & Craft Categories</Bounce></h1>
        <p className="text-center mb-8 max-w-2xl mx-auto text-xs md:text-base opacity-80"><Bounce>Explore landscape vistas, lifelike portraits, vibrant watercolors, textured oils, expressive charcoal sketches, and whimsical cartoons in our art & craft categories.</Bounce></p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto">
        
        {
            categories.map(category => <SubcategoryCard key={category._id} category={category}></SubcategoryCard>)
        }
        
      </div>
    </div>
  );
};

export default SubcategorySection;
