import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import ItemCard from "./ItemCard";

const Home = () => {
  const crafts = useLoaderData();
  console.log(crafts);
  return (
    <div>
      <Banner />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {crafts.map((craft) => (
          <ItemCard key={craft._id} craft={craft}></ItemCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
