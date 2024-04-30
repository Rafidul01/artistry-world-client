import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const AllArtAndCraft = () => {

  const [crafts, setCrafts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://artistry-world-server.vercel.app/crafts")
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
    <div className="font-poppins border p-8 rounded-2xl border-[#973E12] shadow-md shadow-[#973E12]">

      <Helmet>
        <title>All Art And Craft | Artistry World</title>
      </Helmet>
      
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
              <th></th>

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
                <td className="text-center">
                  <Link to={`/craftDetails/${craft._id}`} className="btn rounded-full bg-[#973E12] text-white hover:bg-[#d18661cd]">
                  View Details
                  </Link>
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
