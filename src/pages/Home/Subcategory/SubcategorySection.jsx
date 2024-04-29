import { useEffect, useState } from "react";
import SubcategoryCard from "./SubcategoryCard";

const SubcategorySection = () => {
    const [categories, setCategories] = useState([]); 
    useEffect(()=>{
        fetch("http://localhost:5000/categories")
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setCategories(data)
        })
    },[])
  return (
    <div className="container  font-lato my-8 mt-28">
        <h1 className="font-lato text-2xl text-center font-bold my-8 ">Categories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto">
        
        {
            categories.map(category => <SubcategoryCard key={category._id} category={category}></SubcategoryCard>)
        }
        
      </div>
    </div>
  );
};

export default SubcategorySection;
