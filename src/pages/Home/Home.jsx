import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import ItemCard from "./ItemCard";
import ChooseSection from "./ChooseSection";
import NewsLetter from "./NewsLetter";
import SubcategorySection from "./Subcategory/SubcategorySection";
import { useState } from "react";
import { Bounce } from "react-awesome-reveal";
import { Helmet } from "react-helmet";

const Home = () => {
  const crafts = useLoaderData();
  const [toggle, setToggle] = useState(false);
  const handleView = () =>{
    setToggle(!toggle);
  }
  console.log(crafts);
  return (
    <div>
      <Helmet>
        <title>Home | Artistry World</title>
      </Helmet>
      <Banner />
      <h1 className="mb-2 mt-28 text-4xl text-center font-bold ">
      <Bounce>Craft Items</Bounce>
      </h1>
      <p className="text-center mb-8 max-w-2xl mx-auto text-xs md:text-base opacity-80 "> <Bounce> Explore our curated collection of captivating craft items, each piece a masterpiece waiting to inspire your creative journey. </Bounce></p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {crafts.slice(0,toggle ? crafts.length : 6).map((craft) => (
          <ItemCard key={craft._id} craft={craft}></ItemCard>
        ))}
      </div>
      <button onClick={handleView} className="btn w-full text-white mt-8 bg-[#973E12]">{toggle? "View Less": "View All"}</button>

      <SubcategorySection></SubcategorySection>
      <ChooseSection></ChooseSection>
      <NewsLetter></NewsLetter>
      
    </div>
  );
};

export default Home;
