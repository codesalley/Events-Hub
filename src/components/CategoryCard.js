import PropTypes from 'prop-types';

const CategoryCard = ({ name }) => (

  <div className=" bg-blue-700 text-gray-200 flex-shrink-0 w-20 p-2 mx-2 flex items-center justify-center rounded-md text-xs text-center">
    {name}
  </div>

);

CategoryCard.propTypes = {
  name: PropTypes.string.isRequired,
};

export default CategoryCard;
