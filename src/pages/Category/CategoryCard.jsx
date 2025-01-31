import { FaEdit } from "react-icons/fa";
import { MdOutlineAttachMoney, MdOutlineStarRate } from "react-icons/md";
import { RiPriceTag2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { IoTimeOutline } from "react-icons/io5";

const CategoryCard = ({craft}) => {
    console.log(craft);
    const {
        item_name,
        image,
        description,
        processing_time,
        subcategory_name,
        price,
        stockStatus,
        rating,
      } = craft;
    return (
        <div className="card font-roboto bg-base-100 shadow-xl  rounded-none border-2 border-[#973e12]">
      <div className="relative">
      <figure className="px-4 pt-4">
        <img
          src={image}
          alt="Shoes"
          className=" rounded-none h-[300px] w-full"
        />
        
      </figure>
      <div className=" p-1 pr-2 text-white rounded-r-2xl ml-4 mt-8 bg-[#973E12] absolute top-0">
        <p>{stockStatus}</p>
     </div>
      </div>
      <div className="card-body ">
        <h2 className=" text-xl font-bold text-center">{item_name}</h2>
        <p className="text-center opacity-80">{description}</p>
        <hr className="border-[#973E12] opacity-80 mb-2" />
        <p className="text-sm md:text-base flex gap-2 items-center">
          <span className="text-[#973E12] font-medium flex items-center justify-center gap-1">
            <RiPriceTag2Line />
            Price :{" "}
          </span>
          {price} <MdOutlineAttachMoney />
        </p>
        <p className="text-sm md:text-base flex gap-2">
          <span className="text-[#973E12] font-medium flex items-center justify-center gap-1">
            <MdOutlineStarRate />
            Rating :{" "}
          </span>
          {rating}
        </p>
        <p className="text-sm md:text-base flex gap-2">
          <span className="text-[#973E12] font-medium flex items-center justify-center gap-1">
            <FaEdit />
            Subcategory :{" "}
          </span>
          {subcategory_name}
        </p>
        <p className="text-sm md:text-base flex gap-2">
          <span className="text-[#973E12] font-medium flex items-center justify-center gap-1">
          <IoTimeOutline />
          Processing Time :{" "}
          </span>
          {processing_time}
        </p>
        <hr className="border-[#973E12] opacity-80 mt-2" />

        <div className="card-actions mt-4">
          <div className="flex justify-between w-full gap-2">
          <Link
            to={`/craftDetails/${craft._id}`}
            className="btn  bg-transparent border-[#973E12]  hover:bg-[#973E12] hover:text-white  text-[#973E12] w-full"
          >
            View Details 
          </Link>

          </div>
        </div>
      </div>
    </div>
    );
};

CategoryCard.propTypes = {
    craft: PropTypes.object,
    crafts: PropTypes.array,
    setCrafts: PropTypes.func,
};
export default CategoryCard;