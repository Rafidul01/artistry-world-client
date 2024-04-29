import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import ItemCard from "./ItemCard";
import ChooseSection from "./ChooseSection";
import NewsLetter from "./NewsLetter";
import SubcategorySection from "./Subcategory/SubcategorySection";
import { useState } from "react";
import { Typewriter } from 'react-simple-typewriter'
const Home = () => {
  const crafts = useLoaderData();
  const [toggle, setToggle] = useState(false);
  const handleView = () =>{
    setToggle(!toggle);
  }
  console.log(crafts);
  return (
    <div>
      <Banner />
      <h1 className="mb-8 mt-28 text-2xl text-center font-bold ">
      <Typewriter
            words={['Craft Items']}
            loop={2}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {crafts.slice(0,toggle ? crafts.length : 6).map((craft) => (
          <ItemCard key={craft._id} craft={craft}></ItemCard>
        ))}
      </div>
      <button onClick={handleView} className="btn w-full text-white mt-8 bg-[#973E12]">{toggle? "View Less": "View All"}</button>

      <ChooseSection></ChooseSection>
      <SubcategorySection></SubcategorySection>
      <NewsLetter></NewsLetter>
      
    </div>
  );
};

export default Home;
