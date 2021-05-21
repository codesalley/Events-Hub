import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies
import getUnicodeFlagIcon from 'country-flag-icons/unicode';

const CategoryCard = ({ props }) => {
  console.log(props);
  const { country, code } = props;

  return (
    <div className=" bg-blue-700 relative text-gray-200 flex-shrink-0 w-20 p-3 mx-2 flex items-center justify-center rounded-md text-xs text-center">
      <span className="absolute top-0 left-0">
        {' '}
        {getUnicodeFlagIcon(code)}
        {' '}
      </span>
      {country}
    </div>

  );
};

CategoryCard.propTypes = {
  props: PropTypes.shape({
    country: PropTypes.string,
    code: PropTypes.string,
  }).isRequired,
  country: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
};

export default CategoryCard;
