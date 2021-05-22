import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

const EventCard = ({ event }) => {
  const { name, images } = event;
  const histroy = useHistory();

  return (
    <button type="button" onClick={() => histroy.push(`/${event.id}`)} className="h-40 border-0 transform hover:scale-105 transition duration-00 ease-in outline-none shadow max-w-sm w-full active:outline-none active:border-0 bg-indigo-600 rounded-xl relative flex flex-col">
      <img className="absolute shadow object-cover w-full h-full rounded-xl  " src={images[0].url} alt="event imgae" />
      <p className=" absolute bottom-0 bg-gray-500 bg-opacity-50 text-sm w-full text-gray-200 rounded-b-xl left-0 pl-2 pb-2">
        {name}
      </p>

    </button>
  );
};

EventCard.propTypes = {
  event: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default EventCard;
