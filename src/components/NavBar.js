import PropTypes from 'prop-types';
import Header from '../style/HeaderText';

const NavBar = ({ filter }) => (
  <div className="flex flex-row justify-between py-2">
    <Header>Events Hub</Header>
    <button type="button" onClick={() => filter('ALL')}> Reset Filter</button>
  </div>
);

NavBar.propTypes = {
  filter: PropTypes.func.isRequired,
};

export default NavBar;
