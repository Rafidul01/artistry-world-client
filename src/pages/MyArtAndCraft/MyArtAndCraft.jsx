import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import MyArtCard from "./MyArtCard";

const MyArtAndCraft = () => {
  const loadedcraft = useLoaderData();
  const [crafts, setCrafts] = useState(loadedcraft);
  const params = useParams();
  const {email} = params;
//   console.log(email);
  const handleFilter = e =>{
    console.log(e.target.value);
    const option = e.target.value;
    if(option === "Any"){
        setCrafts(loadedcraft);
        return;
    }
    fetch(`http://localhost:5000/myCrafts/${email}/${option}`)
    .then(res => res.json())
    .then(data => {
        setCrafts(data);
    })
  }

  return (
    <div className="">
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
