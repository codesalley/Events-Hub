// import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NavBar from './NavBar';
import Category from './Category';
import { getAllEvents } from '../actions/index';

function App({ getEvents }) {
  const res = getEvents(10);
  console.log(res);

  return (
    <div className="main">
      <NavBar />
      <Category />
    </div>
  );
}

App.propTypes = {
  getEvents: PropTypes.func.isRequired,
};

const mapPropsToState = {
  getEvents: (size) => getAllEvents(size),
};

export default connect(null, mapPropsToState)(App);
