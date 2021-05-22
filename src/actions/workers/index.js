import { EVENTS_URL } from '../../utils/constants';

export const getEvents = async (num) => {
  try {
    const response = await fetch(EVENTS_URL(num), { mode: 'cors', method: 'GET' });
    if (!response.ok) {
      return false;
    }
    const data = await response.json();

    return data;
  } catch (error) {
    return false;
  }
};

export const getEventByCountry = () => ('');
