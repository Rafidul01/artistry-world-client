import {  useParams } from "react-router-dom";
import CategoryCard from "./CategoryCard";
import { Slide } from "react-awesome-reveal";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";

const Category = () => {
  // const crafts = useLoaderData();
  const param = useParams();
  const {subcategory_name} = param;

  const [crafts, setCrafts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://artistry-world-server.vercel.app/categories/${subcategory_name}`)
      .then((res) => res.json())
      .then((data) => {
        setCrafts(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[calc(100vh-390px)]">
        <div>
          <span className="loading loading-infinity w-32 bg-[#973E12]"></span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-390px)]">
      <Helmet>
        <title>{subcategory_name} | Artistry World</title>
      </Helmet>
      <Slide direction="up"><h1 className="font-lato text-2xl text-center font-bold my-8 ">{subcategory_name}</h1>
</Slide>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2" >
        {crafts.map((craft) => (
          <CategoryCard key={craft._id} craft={craft}></CategoryCard>
        ))}
      </div>
    </div>
  );
};

export default Category;
