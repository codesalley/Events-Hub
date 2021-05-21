import { EVENTS_URL } from '../../utils/constants';

export const getEvents = async () => {
  try {
    const response = await fetch(EVENTS_URL(50));
    if (!response.ok) {
      return false;
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    return false;
  }
};

export const getEventByCountry = () => ('');
