import Swal from "sweetalert2";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
const MyArtCard = ({craft,crafts,setCrafts}) => {

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
            fetch(`http://localhost:5000/crafts/${_id}`,{
                method: "DELETE"
            })
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
                if (data.deletedCount) {
                    setCrafts(crafts.filter(x => craft._id !== x._id));
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
    <div className="card  bg-base-100 shadow-xl rounded-none border-2 border-[#973e12]">
      <figure className="px-0 pt-0">
        <img
          src={craft.image}
          alt="Shoes"
          className=" rounded-none"
        />
      </figure>
      <div className="card-body ">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions">
          <Link
          to={`/update/${craft._id}`}           
           className="btn rounded-full bg-[#973E12] text-white hover:bg-[#d18661cd]">Buy Now</Link>
          <button
            onClick={() => handleDelete(craft._id)}
            className="btn rounded-full bg-[#973E12] text-white hover:bg-[#d18661cd]"
          >
            DELETE
          </button>
        </div>
      </div>
    </div>
  );
};

MyArtCard.propTypes = {
    craft : PropTypes.object,
    crafts: PropTypes.array,
    setCrafts: PropTypes.func
}

export default MyArtCard;
