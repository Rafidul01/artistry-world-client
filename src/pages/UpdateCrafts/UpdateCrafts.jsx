import {  useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCrafts = () => {

    const loadedCraft = useLoaderData();
    const [craft, setCraft] = useState(loadedCraft || {});
    const {_id} = loadedCraft;
    console.log(craft);
    const handleUpdate = e =>{
        e.preventDefault();
        const form = e.target;
        const item_name = form.item_name.value;
        const image = form.image.value;
        const subcategory_name = form.subcategory_name.value;
        const price = form.price.value;
        const processing_time = form.processing_time.value;
        const customization = form.customization.value;
        const stockStatus = form.stockStatus.value;
        const description = form.description.value;
        const rating = form.rating.value;

        const newCraft = {item_name, image,subcategory_name,customization, price,processing_time, stockStatus, description,rating}

        fetch(`https://artistry-world-server.vercel.app/crafts/${_id}`,{
            method: "PUT",
            headers:{
                "Content-type" : "application/json"
            },
            body: JSON.stringify(newCraft),
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                // form.reset()
                setCraft(newCraft);
                Swal.fire({
                    title: 'Success!',
                    text: 'Craft Updated Successfully!',
                    icon: 'success',
                    confirmButtonText: 'OK'
                  })
                // alert("added");
                
            }
        })
        console.log(newCraft);
        
    }
    return (
        <div className="font-roboto mt-8">
      <div className="border border-[#973E12]  shadow-2xl py-4 rounded-2xl p-2 md:p-8">
        
        <div>
            <img src={craft.image} className="w-full h-[250px] md:h-[400px] lg:h-[500px] rounded-2xl mb-4 " alt="" />
        </div>
        <form action="" onSubmit={handleUpdate}>
          {/* row1 */}
          <div className="flex justify-center gap-4 ">
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text font-bold">Item Name</span>
              </div>
              <input
                type="text"
                name="item_name"
                defaultValue={craft?.item_name}
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
                defaultValue={craft.image}
                placeholder="Photo URL"
                className="input input-bordered w-full "
              />
            </label>
          </div>
          {/* row2 */}
          <div className="flex justify-center gap-4 mt-2">
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text font-bold">Subcategory Name</span>
              </div>
              <select className="select select-bordered" name="subcategory_name">
                <option disabled selected>{craft?.subcategory_name}</option>
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
                <option disabled selected>{craft?.customization}</option>
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
                defaultValue={craft?.price}
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
                defaultValue={craft.rating}
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
                defaultValue={craft.processing_time}
                placeholder="Processing Time"
                className="input input-bordered w-full "
              />
            </label>
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text font-bold">Stock Status</span>
              </div>
              <select className="select select-bordered" name="stockStatus">
                <option disabled selected>{craft.stockStatus}</option>
                <option>In stock</option>
                <option>Made to Order</option>
              </select>
            </label>
          </div>

          {/* row5 */}
          <div className="flex justify-center gap-4 mt-2">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text font-bold">Short Description</span>
              </div>
              <textarea
                className="textarea textarea-bordered w-full"
                placeholder="description"
                defaultValue={craft.description}
                name="description"
              ></textarea>
            </label>
          </div>
          <button className="btn btn-block mt-4 bg-[#973E12] text-white">Update</button>
        </form>
      </div>
    </div>
    );
};

export default UpdateCrafts;