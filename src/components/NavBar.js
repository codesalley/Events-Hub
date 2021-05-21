import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getEventByCode } from '../actions';
import Header from '../style/HeaderText';

const NavBar = ({ filter }) => (
  <div className="flex flex-row justify-between py-2">
    <Header>Events Hub</Header>
    <button type="button" onClick={() => filter('ALL')}> Reset Filter</button>
  </div>
);

const mapDispatchToProps = {
  filter: (code) => getEventByCode(code),
};

NavBar.propTypes = {
  filter: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(NavBar);
