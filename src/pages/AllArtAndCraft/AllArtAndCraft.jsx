import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const AllArtAndCraft = () => {
  const crafts = useLoaderData();
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
    <div className="font-poppins border p-8 rounded-2xl border-[#973E12] shadow-md shadow-[#973E12]">
      <p>all art and craft section {crafts.length}</p>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Subcategory</th>
              <th>Price</th>
              <th>Rating</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {crafts.map((craft, idx) => (
              <tr key={craft._id} className="hover">
                <th>{idx + 1}</th>
                <td>{craft.item_name}</td>
                <td>{craft.subcategory_name}</td>
                <td>{craft.price}</td>
                <td>{craft.rating}</td>
                <td>
                  <button className="btn rounded-full bg-[#973E12] text-white hover:bg-[#d18661cd]">
                    Update
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(craft._id)}
                    className="btn rounded-full bg-[#973E12] text-white hover:bg-[#d18661cd]"
                  >
                    X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllArtAndCraft;
