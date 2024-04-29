import Swal from "sweetalert2";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { RiPriceTag2Line } from "react-icons/ri";
import { MdOutlineAttachMoney, MdOutlineStarRate } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { FaRegCircleCheck } from "react-icons/fa6";
const MyArtCard = ({ craft, crafts, setCrafts }) => {
  const {
    item_name,
    image,
    customization,
    price,
    stockStatus,
    rating,
  } = craft;
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://artistry-world-server.vercel.app/crafts/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount) {
              setCrafts(crafts.filter((x) => craft._id !== x._id));
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
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
            to={`/update/${craft._id}`}
            className="btn  bg-transparent border-[#973E12]  hover:bg-[#973E12] hover:text-white  text-[#973E12] md:w-[150px]"
          >
            Update
          </Link>
          <button
            onClick={() => handleDelete(craft._id)}
            className="btn  bg-transparent border-[#973E12]  hover:bg-[#973E12] hover:text-white  text-[#973E12] md:w-[150px]"
          >
            Delete
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

MyArtCard.propTypes = {
  craft: PropTypes.object,
  crafts: PropTypes.array,
  setCrafts: PropTypes.func,
};

export default MyArtCard;
