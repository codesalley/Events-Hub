import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies
import getUnicodeFlagIcon from 'country-flag-icons/unicode';

const CategoryCard = ({ props, onclick }) => {
  console.log(onclick);
  const { country, code } = props;

  return (
    <button type="button" onClick={() => onclick(code)} className=" cursor-pointer bg-blue-700 relative text-gray-200 flex-shrink-0 w-40 p-3 mx-2 flex items-center justify-center rounded-md text-xs text-center">
      <span className="absolute top-0 left-0">
        {' '}
        {getUnicodeFlagIcon(code)}
        {' '}
      </span>
      {country}
    </button>

  );
};

CategoryCard.propTypes = {
  props: PropTypes.shape({
    country: PropTypes.string,
    code: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
  country: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  onclick: PropTypes.func.isRequired,
};

export default CategoryCard;
