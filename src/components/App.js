import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NavBar from './NavBar';
import Category from './Category';
import { getAllEvents } from '../actions/index';
import Container from './Container';

function App({ getEvents }) {
  useEffect(() => {
    getEvents(50);
  }, []);

  return (
    <div className="main h-screen overflow-scroll px-4">
      <NavBar />
      <Category />
      <Container />
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
