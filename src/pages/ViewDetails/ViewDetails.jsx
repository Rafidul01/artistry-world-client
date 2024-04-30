// import { useState } from "react";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { CgProfile } from "react-icons/cg";
import { FaEdit } from "react-icons/fa";
import { FaRegCircleCheck } from "react-icons/fa6";
import { MdAccessTime, MdCategory, MdOutlineAlternateEmail, MdOutlineAttachMoney, MdOutlineStarRate } from "react-icons/md";
import { RiPriceTag2Line } from "react-icons/ri";
import { useParams } from "react-router-dom";

const ViewDetails = () => {
  
  const [crafts, setCrafts] = useState([]);
  const [loading, setLoading] = useState(true);

  const params = useParams();
  const { id } = params;

  useEffect(() => {
    fetch(`https://artistry-world-server.vercel.app/crafts/${id}`)
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
  const {
    item_name,
    image,
    subcategory_name,
    customization,
    price,
    processing_time,
    stockStatus,
    user_email,
    user_name,
    description,
    rating,
  } = crafts;
  // const [craft, setCraft] = useState(loadedCraft);
  return (
    <div className="font-lato mt-8">
      <Helmet>
        <title>View Details | Artistry World</title>
      </Helmet>
      <div className="border-2 border-[#973e12] rounded-2xl flex flex-col md:flex-row justify-between  p-4 gap-2">
        <div className="md:w-1/3 md:border-r md:border-[#973e12] md:border-opacity-40 md:pr-4 ">
          <img src={image} alt="" className="w-full md:h-[400px] rounded-2xl" />
        </div>
        <div className="md:w-2/3 md:border-l md:border-[#973e12] md:border-opacity-40 ">
          <h1 className="text-center font-extrabold text-lg">{item_name}</h1>
          <hr className="mt-2 ml-4 border-[#973e12] border-opacity-40" />
          <div className="pl-4">
            <p className="md:text-xl gap-2 text-center mt-8 text-sm">
              <span className="text-[#973E12] font-normal md:font-medium flex items-center justify-center gap-1 ">
                Description :{" "}
              </span>
              {description}
            </p>
            <div className="flex flex-col lg:flex-row justify-between lg:my-8 ">
              <div>
                <p className="text-sm md:text-xl flex gap-2">
                  <span className="text-[#973E12] font-medium flex items-center justify-center gap-1">
                  <MdCategory />
                    Subcategory :{" "}
                  </span>
                  {subcategory_name}
                </p>
                <p className="text-sm md:text-xl flex gap-2">
                  <span className="text-[#973E12] font-medium flex items-center justify-center gap-1">
                    <MdOutlineStarRate />
                    Rating :{" "}
                  </span>
                  {rating}
                </p>
                <p className="text-sm md:text-xl flex gap-2 items-center">
                  <span className="text-[#973E12] font-medium flex items-center justify-center gap-1">
                    <RiPriceTag2Line />
                    Price :{" "}
                  </span>
                  {price} <MdOutlineAttachMoney />
                </p>
              </div>
              <div>
                <p className="text-sm md:text-xl flex gap-2">
                  <span className="text-[#973E12] font-medium flex items-center justify-center gap-1">
                  <FaEdit />
                    Customization :{" "}
                  </span>
                  {customization}
                </p>
                <p className="text-sm md:text-xl flex gap-2">
                  <span className="text-[#973E12] font-medium flex items-center justify-center gap-1">
                  <FaRegCircleCheck />
                    Stock Status :{" "}
                  </span>
                  {stockStatus}
                </p>
                <p className=" text-sm md:text-xl flex gap-2">
                  <span className="text-[#973E12] font-medium flex items-center justify-center gap-1">
                  <MdAccessTime />
                    Processing Time :{" "}
                  </span>
                  {processing_time}
                </p>
              </div>
            </div>
            <div className=" flex w-full mb-4 text-center justify-center items-center gap-1 mt-2">
              <hr className="w-full border-[#973e12] " />
              <h1 className="min-w-[90px] font-extrabold text-lg">Posted by</h1>
              <hr className="w-full border-[#973e12] " />
            </div>
            <div>
              <p className="text-sm md:text-xl flex gap-2">
                <span className="text-[#973E12] font-medium flex items-center justify-center gap-1">
                <CgProfile />
                  Name :{" "}
                </span>
                {user_name}
              </p>
              <p className=" text-sm md:text-xl flex gap-2">
                <span className="text-[#973E12] font-medium flex items-center justify-center gap-1">
                <MdOutlineAlternateEmail />
                  Email :{" "}
                </span>
                {user_email}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
