import { FaEdit } from "react-icons/fa";
import { FaRegCircleCheck } from "react-icons/fa6";
import { MdOutlineAttachMoney, MdOutlineStarRate } from "react-icons/md";
import { RiPriceTag2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ItemCard = ({craft}) => {
    const {
        item_name,
        image,
        customization,
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
        <hr className="border-[#973E12] opacity-80 mb-2" />
        <p className="text-base flex gap-2 items-center">
          <span className="text-[#973E12] font-medium flex items-center justify-center gap-1">
            <RiPriceTag2Line />
            Price :{" "}
          </span>
          {price} <MdOutlineAttachMoney />
        </p>
        <p className="text-base flex gap-2">
          <span className="text-[#973E12] font-medium flex items-center justify-center gap-1">
            <MdOutlineStarRate />
            Rating :{" "}
          </span>
          {rating}
        </p>
        <p className="text-base flex gap-2">
          <span className="text-[#973E12] font-medium flex items-center justify-center gap-1">
            <FaEdit />
            Customization :{" "}
          </span>
          {customization}
        </p>
        <p className="text-base flex gap-2">
          <span className="text-[#973E12] font-medium flex items-center justify-center gap-1">
          <FaRegCircleCheck />
            Stock Status :{" "}
          </span>
          {stockStatus}
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

ItemCard.propTypes = {
    craft: PropTypes.object,
    crafts: PropTypes.array,
    setCrafts: PropTypes.func,
  };
export default ItemCard;