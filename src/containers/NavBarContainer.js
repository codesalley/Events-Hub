import { connect } from 'react-redux';
import NavBar from '../components/NavBar';
import { getEventByCode } from '../actions';

const mapDispatchToProps = {
  filter: (code) => getEventByCode(code),
};

const NavBarContainer = connect(null, mapDispatchToProps)(NavBar);

export default NavBarContainer;
