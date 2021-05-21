/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NavBar from './NavBar';
import Category from './Category';
import { getAllEvents } from '../actions/index';
import Container from './Container';

function App({ getEvents }) {
  useEffect(() => {
    getEvents(5);
  }, []);

  return (
    <div className="main  px-2 flex flex-col gap-2 overflow-scroll">
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
