import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import MyArtCard from "./MyArtCard";
import { Helmet } from "react-helmet";

const MyArtAndCraft = () => {
  // const loadedcraft = useLoaderData();
  // const [crafts, setCrafts] = useState(loadedcraft);
  const params = useParams();
  const {email} = params;
  const [crafts, setCrafts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://artistry-world-server.vercel.app/crafts/user/${email}`)
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
  
//   console.log(email);
  const handleFilter = e =>{
    console.log(e.target.value);
    const option = e.target.value;
    if(option === "Any"){
      fetch(`https://artistry-world-server.vercel.app/crafts/user/${email}`)
      .then((res) => res.json())
      .then((data) => {
        setCrafts(data);
      });
        return;
    }
    fetch(`https://artistry-world-server.vercel.app/myCrafts/${email}/${option}`)
    .then(res => res.json())
    .then(data => {
        setCrafts(data);
    })
  }

  return (
    <div className="min-h-[calc(100vh-390px)]">
      <Helmet>
        <title>My Art & Craft | Artistry World</title>
      </Helmet>
      <div className="flex justify-center items-center pt-4 pb-8">
        <select onChange={handleFilter} className="select select-primary w-full max-w-xs border-[#973e12] focus:border-[#973e12]  focus:outline-[#973e12] font-bold text-center text-[#973e12]">
          <option disabled selected>
          Customization
          </option>
          <option >Any</option>
          <option>Yes</option>
          <option>No</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {crafts.map((craft) => (
          <MyArtCard
            key={craft._id}
            craft={craft}
            setCrafts={setCrafts}
            crafts={crafts}
          ></MyArtCard>
        ))}
      </div>
    </div>
  );
};

export default MyArtAndCraft;
