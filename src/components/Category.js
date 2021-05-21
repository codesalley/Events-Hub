import CategoryCard from './CategoryCard';
import countryCodes from '../utils/countriesCodes';
import MainCategoryDiv from '../style/CategoryStyle';

const Category = () => (

  <MainCategoryDiv className=" flex flex-row overflow-x-scroll overscroll-contain">
    {countryCodes.map((item) => (
      <CategoryCard key={item.id.toString()} props={item} />
    ))}
  </MainCategoryDiv>

);

export default Category;
