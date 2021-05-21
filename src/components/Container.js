import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import EventCard from './EventCard';

const Container = ({ events }) => (
  <div className="flex flex-row flex-wrap gap-4 justify-center lg:gap-5 md:mt-10">
    {events.map((ele) => (
      <EventCard key={ele.id} event={ele} />

    ))}

  </div>
);

Container.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({ events: state.events });

export default connect(mapStateToProps)(Container);
