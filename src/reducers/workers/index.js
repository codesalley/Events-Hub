import { EVENTS_URL } from '../../utils/constants';

export const getEvents = async () => {
  try {
    const response = await fetch(EVENTS_URL(10));
    if (!response.ok) {
      return false;
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const getEventByCountry = () => ('');
