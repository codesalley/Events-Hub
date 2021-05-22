/* eslint-disable no-underscore-dangle */
import { useParams, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import SplashScreen from './SplashScreen';

const ShowPage = (props) => {
  const [event, setEvent] = useState();
  const [loading, setLoading] = useState(true);
  const { events } = props;
  const { param } = useParams();
  const history = useHistory();

  useEffect(() => {
    const showEvent = events.filter((ele) => (ele.id === param));
    setEvent(showEvent);
    setLoading(false);
    return () => event;
  }, []);

  return loading || !event ? <SplashScreen /> : (
    <div className="flex md:px-11 flex-col items-center gap-1 pb-2">

      <img className="w-full  " alt="event mg" src={event[0].images[9].url} />
      <div className="flex flex-col gap-2">
        <h2 className="text-center text-xl font-semibold text-gray-700"> Event Title </h2>
        <p className="text-center text-gray-600 text-sm">

          {event[0].name}
          {' '}
        </p>
        <small className="text-center text-xs leading-tight font-light">
          {' '}
          {event[0].dates.start.localDate}
          {' '}
        </small>
      </div>
      <div className="flex flex-col gap-1">
        <h2 className="text-center text-xl font-semibold text-gray-700">  Event Location </h2>
        <p className="text-center text-gray-600 text-sm flex flex-col">
          Country:

          <span>
            {' '}
            {event[0]._embedded.venues[0].country.name}
          </span>
          {' '}
        </p>
        <p className="text-center text-gray-600 text-sm flex flex-col">
          Venue:
          {' '}
          <span>{event[0]._embedded.venues[0].name}</span>
          {' '}
        </p>
        <p className="text-center text-gray-600 text-sm flex flex-col">
          PostalCode:
          {' '}
          <span>{event[0]._embedded.venues[0].postalCode}</span>
          {' '}
        </p>
        <p className="text-center text-gray-600 text-sm flex flex-col">
          Address:
          {' '}
          <span>{event[0]._embedded.venues[0].address.line1}</span>
          {' '}
        </p>
        <p className="text-center text-gray-600 text-sm flex flex-col">
          Promoter:
          {' '}
          <span>{event[0].promoter.name}</span>
          {' '}
        </p>

      </div>
      <button onClick={() => history.push('/')} className="bg-blue-500 text-gray-200 p-2 w-6/12 rounded" type="button"> Go Back </button>

    </div>
  );
};

ShowPage.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  events: state.events,
});

export default connect(mapStateToProps)(ShowPage);
