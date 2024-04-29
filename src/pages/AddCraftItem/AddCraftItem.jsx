import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from 'sweetalert2'
import { Helmet } from "react-helmet";

const AddCraftItem = () => {
    const {user} = useContext(AuthContext);
    const handleAddCraft = e =>{
        e.preventDefault();
        const form = e.target;
        const item_name = form.item_name.value;
        const image = form.image.value;
        const subcategory_name = form.subcategory_name.value;
        const price = form.price.value;
        const processing_time = form.processing_time.value;
        const customization = form.customization.value;
        const stockStatus = form.stockStatus.value;
        const user_email = form.user_email.value;
        const user_name = form.user_name.value;
        const description = form.description.value;
        const rating = form.rating.value;

        const newCraft = {item_name, image,subcategory_name,customization, price,processing_time, stockStatus, user_email, user_name,description,rating}

        fetch("https://artistry-world-server.vercel.app/addCraft",{
            method: "POST",
            headers:{
                "Content-type" : "application/json"
            },
            body: JSON.stringify(newCraft),
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                form.reset()
                Swal.fire({
                    title: 'Success!',
                    text: 'Craft Added Successfully!',
                    icon: 'success',
                    confirmButtonText: 'OK'
                  })
            }
        })
        console.log(newCraft);
        
    }
  return (
    <div className="font-roboto mt-8">
      <Helmet>
        <title>Add Craft | Artistry World</title>
      </Helmet>
      <div className="border border-[#973E12]  shadow-2xl py-4 rounded-2xl p-2 md:p-8">
        <h1 className="text-center font-bold text-2xl mb-8">Add Your Craft Hare!</h1>
        <form action="" onSubmit={handleAddCraft}>
          {/* row1 */}
          <div className="flex justify-center gap-4 ">
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text font-bold">Item Name</span>
              </div>
              <input
                type="text"
                name="item_name"
                placeholder="Item Name"
                className="input input-bordered w-full "
              />
            </label>
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text font-bold">Image</span>
              </div>
              <input
                type="text"
                name="image"
                placeholder="Photo URL"
                className="input input-bordered w-full "
              />
            </label>
          </div>
          {/* row2 */}
          <div className="flex flex-col md:flex-row justify-center gap-4 mt-2">
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text font-bold">subcategory Name</span>
              </div>
              <select className="select select-bordered" name="subcategory_name">
                <option disabled selected>Subcategory</option>
                <option>Landscape Painting</option>
                <option>Portrait Drawing</option>
                <option>Watercolour Painting</option>
                <option>Oil Painting</option>
                <option>Charcoal Sketching</option>
                <option>Cartoon Drawing</option>
              </select>
            </label>
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text font-bold">Customization</span>
              </div>
              <select className="select select-bordered" name="customization">
                <option disabled selected>Customization</option>
                <option>Yes</option>
                <option>No</option>
              </select>
            </label>
          </div>
          {/* row3 */}
          <div className="flex justify-center gap-4 mt-2">
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text font-bold">Price</span>
              </div>
              <input
                type="text"
                name="price"
                placeholder="Price"
                className="input input-bordered w-full "
              />
            </label>
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text font-bold">Rating</span>
              </div>
              <input
                type="text"
                name="rating"
                placeholder="Rating"
                className="input input-bordered w-full "
              />
            </label>
          </div>
          {/* row4 */}
          <div className="flex justify-center gap-4 mt-2">
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text font-bold">Processing Time</span>
              </div>
              <input
                type="text"
                name="processing_time"
                placeholder="Processing Time"
                className="input input-bordered w-full "
              />
            </label>
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text font-bold">Stock Status</span>
              </div>
              <select className="select select-bordered" name="stockStatus">
                <option disabled selected>Stock Status</option>
                <option>In stock</option>
                <option>Made to Order</option>
              </select>
            </label>
          </div>
          {/* row5 */}
          <div className="flex justify-center gap-4 mt-2">
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text font-bold">Email</span>
              </div>
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                value={user.email || ' '}
                className="input input-bordered w-full "
              />
            </label>
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text font-bold">Name</span>
              </div>
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                value={user.displayName || ' '}
                className="input input-bordered w-full "
              />
            </label>
          </div>
          {/* row6 */}
          <div className="flex justify-center gap-4 mt-2">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text font-bold">Short Description</span>
              </div>
              <textarea
                className="textarea textarea-bordered w-full"
                placeholder="description"
                name="description"
              ></textarea>
            </label>
          </div>
          <button className="btn btn-block mt-4 bg-[#973E12] text-white">Add</button>
        </form>
      </div>
    </div>
  );
};

export default AddCraftItem;
