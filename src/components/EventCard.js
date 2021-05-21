import PropTypes from 'prop-types';

const EventCard = ({ event }) => {
  const { name, images } = event;
  return (
    <div className="h-40 shadow max-w-xs w-full bg-indigo-600 rounded-xl relative flex flex-col">
      <img className="absolute shadow object-cover w-full h-full rounded-xl  " src={images[0].url} alt="event imgae" />
      <p className=" absolute bottom-0 left-2 pb-2">
        {name}
      </p>

    </div>
  );
};

EventCard.propTypes = {
  event: PropTypes.shape({
    name: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default EventCard;
