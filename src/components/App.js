import { useEffect } from 'react';
import { connect } from 'react-redux';
import NavBar from './NavBar';
import Category from './Category';
import { getAllEvents } from '../actions';

function App({ getEvents }) {
  console.log(getEvents);
  useEffect(() => {
    const res = getEvents(10);
    console.log(res);
  });
  return (
    <div className="main">
      <NavBar />
      <Category />
    </div>
  );
}

const mapPropsToState = () => ({
  getEvents: (size) => getAllEvents(size),
});

export default connect(null, mapPropsToState)(App);
