import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CategoryCard from './CategoryCard';
import countryCodes from '../utils/countriesCodes';
import MainCategoryDiv from '../style/CategoryStyle';
import { getEventByCode } from '../actions';

const Category = ({ filter }) => {
  const onclick = (code) => {
    filter(code);
  };

  return (

    <MainCategoryDiv className=" flex flex-row overflow-x-scroll overscroll-contain">
      {countryCodes.map((item) => (
        <CategoryCard key={item.id.toString()} props={item} onclick={onclick} />
      ))}
    </MainCategoryDiv>

  );
};

Category.propTypes = {
  filter: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  filter: (code) => getEventByCode(code),
};

export default connect(null, mapDispatchToProps)(Category);
