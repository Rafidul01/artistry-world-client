import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
const SubcategoryCard = ({category}) => {
    const {image, subcategory_name} = category;
  return (
    <Link to={`/categories/${subcategory_name}`} className="card  bg-base-100 shadow-xl rounded-none border border-[#973E12]">
      <figure className="px-4 pt-4">
        <img
          src={image}
          alt="Shoes"
          className="h-[300px] w-full"
        />
      </figure>
      <div className="card-body items-center text-center py-2 my-4 border-y mx-4 border-[#973E12] border-opacity-50">

        <h2 className="card-title ">{subcategory_name}</h2>
      </div>
    </Link>
  );
};

SubcategoryCard.propTypes={
    category: PropTypes.object,
}

export default SubcategoryCard;
