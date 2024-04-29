import { useLoaderData, useParams } from "react-router-dom";
import CategoryCard from "./CategoryCard";
import { Slide } from "react-awesome-reveal";
import { Helmet } from "react-helmet";

const Category = () => {
  const crafts = useLoaderData();
  const param = useParams();
  const {subcategory_name} = param;

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
