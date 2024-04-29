import { Bounce } from "react-awesome-reveal";

const NewsLetter = () => {
  return (
    <div className="font-lato p-4 border border-[#973e12]  shadow-xl mt-28 mb-24 pb-16">
      <Bounce><div className="flex flex-col justify-center items-center mb-4">
        <h1 className="font-lato text-2xl text-center font-bold mt-8 mb-4 ">
          Get In Touch With Us
        </h1>
        <p className="text-center text-xs md:text-base max-w-[500px] opacity-80 font-roboto">
        For further details on our products and services, do not hesitate to reach out via email. Our dedicated staff is here to assist you!
        </p>
      </div>
      </Bounce> 

      <div className="md:px-16 space-y-1">
        <div className="flex justify-center gap-8 w-full">
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text font-bold">Name</span>
            </div>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered w-full  rounded-3xl"
            />
          </label>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text font-bold">Email</span>
            </div>
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full  rounded-3xl"
            />
          </label>
        </div>
        <div className="flex justify-center flex-col">
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text font-bold">Subject</span>
            </div>
            <input
              type="email"
              placeholder="Subject"
              className="input input-bordered w-full  rounded-3xl"
            />
          </label>
          <label className="form-control">
            <div className="label">
              <span className="label-text font-bold">Message</span>
            </div>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="Message"
            ></textarea>
          </label>
          <button className="btn  bg-[#973e12]  text-white mt-10">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
