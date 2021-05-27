import PropTypes from 'prop-types';
import CategoryCard from './CategoryCard';
import countryCodes from '../utils/countriesCodes';
import MainCategoryDiv from '../style/CategoryStyle';

const Category = ({ filter }) => {
  const onclick = (code) => {
    filter(code);
  };

  return (

    <MainCategoryDiv className=" flex  flex-row overflow-x-scroll overscroll-contain">
      {countryCodes.map((item) => (
        <CategoryCard key={item.id.toString()} props={item} onclick={onclick} />
      ))}
    </MainCategoryDiv>

  );
};

Category.propTypes = {
  filter: PropTypes.func.isRequired,
};

export default Category;
