import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import ItemCard from "./ItemCard";
import ChooseSection from "./ChooseSection";
import NewsLetter from "./NewsLetter";

const Home = () => {
  const crafts = useLoaderData();
  console.log(crafts);
  return (
    <div>
      <Banner />
      <h1 className="my-8 text-2xl text-center font-bold ">Craft Items</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {crafts.map((craft) => (
          <ItemCard key={craft._id} craft={craft}></ItemCard>
        ))}
      </div>
      <ChooseSection></ChooseSection>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Home;
