

const AddCraftItem = () => {

    const handleAddCraft = e =>{
        e.preventDefault();
        
    }
  return (
    <div className="font-roboto mt-8">
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
                name="itemName"
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
          <div className="flex justify-center gap-4 mt-2">
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text font-bold">subcategory Name</span>
              </div>
              <select className="select select-bordered" name="subcategory">
                <option disabled selected></option>
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
                <option disabled selected></option>
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
                <option disabled selected></option>
                <option>In stock</option>
                <option>Made to Order</option>
              </select>
            </label>
          </div>
          {/* row5 */}
          <div className="flex justify-center gap-4 mt-2">
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text font-bold">Name</span>
              </div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="input input-bordered w-full "
              />
            </label>
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text font-bold">Image</span>
              </div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
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
