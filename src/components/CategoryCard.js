import PropTypes from 'prop-types';

const CategoryCard = ({ props, onclick }) => {
  const { country, code } = props;

  return (
    <button type="button" onClick={() => onclick(code)} className=" cursor-pointer bg-blue-700 relative text-gray-200 flex-shrink-0 w-40 p-3 mx-2 flex items-center justify-center rounded-md text-xs text-center">

      {country}
    </button>

  );
};

CategoryCard.propTypes = {
  props: PropTypes.shape({
    code: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
  country: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  onclick: PropTypes.func.isRequired,
};

export default CategoryCard;
