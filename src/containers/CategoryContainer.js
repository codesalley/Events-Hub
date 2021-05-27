import { connect } from 'react-redux';
import Category from '../components/Category';
import { getEventByCode } from '../actions';

const mapDispatchToProps = {
  filter: (code) => getEventByCode(code),
};

const CategoryContainer = connect(null, mapDispatchToProps)(Category);

export default CategoryContainer;
