/* eslint-disable max-len */
import PropTypes from 'prop-types';
import EventCard from './EventCard';

const Container = ({ events, filter }) => (
  <div className="flex flex-row flex-wrap gap-4 justify-center lg:gap-5 md:mt-10">

    {filter === 'ALL' ? events.map((ele) => (
      <EventCard key={ele.id} event={ele} />

    ))
      // eslint-disable-next-line no-underscore-dangle
      : events.filter((event) => event._embedded.venues[0].state.stateCode === filter).map((ele) => (
        <EventCard key={ele.id} event={ele} />
      )) }

  </div>
);

Container.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object).isRequired,
  filter: PropTypes.func.isRequired,
};

export default Container;
