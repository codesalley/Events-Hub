import { render, screen } from '@testing-library/react';
import EventCard from '../../components/EventCard';

const event = {
  name: 'Eagles',
  type: 'event',
  id: 'vvG1YZ4VLloAHj',
  test: false,
  url: 'https://www.ticketmaster.com/eagles-dallas-texas-09-21-2021/event/0C005747EB445F1C',
  locale: 'en-us',
  images: [
    {
      ratio: '16_9',
      url: 'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_EVENT_DETAIL_PAGE_16_9.jpg',
      width: 205,
      height: 115,
      fallback: false,
    },
    {
      ratio: '16_9',
      url: 'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_RETINA_LANDSCAPE_16_9.jpg',
      width: 1136,
      height: 639,
      fallback: false,
    },
    {
      ratio: '4_3',
      url: 'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_CUSTOM.jpg',
      width: 305,
      height: 225,
      fallback: false,
    },
    {
      ratio: '3_2',
      url: 'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_TABLET_LANDSCAPE_3_2.jpg',
      width: 1024,
      height: 683,
      fallback: false,
    },
    {
      ratio: '16_9',
      url: 'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_RECOMENDATION_16_9.jpg',
      width: 100,
      height: 56,
      fallback: false,
    },
    {
      ratio: '3_2',
      url: 'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_RETINA_PORTRAIT_3_2.jpg',
      width: 640,
      height: 427,
      fallback: false,
    },
    {
      ratio: '16_9',
      url: 'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_TABLET_LANDSCAPE_LARGE_16_9.jpg',
      width: 2048,
      height: 1152,
      fallback: false,
    },
    {
      ratio: '16_9',
      url: 'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_RETINA_PORTRAIT_16_9.jpg',
      width: 640,
      height: 360,
      fallback: false,
    },
    {
      ratio: '3_2',
      url: 'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_ARTIST_PAGE_3_2.jpg',
      width: 305,
      height: 203,
      fallback: false,
    },
    {
      ratio: '16_9',
      url: 'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_TABLET_LANDSCAPE_16_9.jpg',
      width: 1024,
      height: 576,
      fallback: false,
    },
  ],
  sales: {
    public: {
      startDateTime: '2019-10-18T15:00:00Z',
      startTBD: false,
      startTBA: false,
      endDateTime: '2021-09-22T03:00:00Z',
    },
  },
  dates: {
    start: {
      localDate: '2021-09-21',
      localTime: '20:00:00',
      dateTime: '2021-09-22T01:00:00Z',
      dateTBD: false,
      dateTBA: false,
      timeTBA: false,
      noSpecificTime: false,
    },
    initialStartDate: {
      localDate: '2020-10-21',
      localTime: '20:00:00',
      dateTime: '2020-10-22T01:00:00Z',
    },
    timezone: 'America/Chicago',
    status: {
      code: 'rescheduled',
    },
    spanMultipleDays: false,
  },
  classifications: [
    {
      primary: true,
      segment: {
        id: 'KZFzniwnSyZfZ7v7nJ',
        name: 'Music',
      },
      genre: {
        id: 'KnvZfZ7vAeA',
        name: 'Rock',
      },
      subGenre: {
        id: 'KZazBEonSMnZfZ7v6F1',
        name: 'Pop',
      },
      type: {
        id: 'KZAyXgnZfZ7v7nI',
        name: 'Undefined',
      },
      subType: {
        id: 'KZFzBErXgnZfZ7v7lJ',
        name: 'Undefined',
      },
      family: false,
    },
  ],
  promoter: {
    id: '653',
    name: 'LIVE NATION MUSIC',
    description: 'LIVE NATION MUSIC / NTL / USA',
  },
  promoters: [
    {
      id: '653',
      name: 'LIVE NATION MUSIC',
      description: 'LIVE NATION MUSIC / NTL / USA',
    },
  ],
  info: 'Show time has been updated from 7:30pm to 8pm. This is an evening with the Eagles. Please arrive early. To allow for more Card Members to enjoy the show, American Express has set a two-order limit for this offer. This limit applies across all Cards associated with all of your American Express accounts. Prepaid Cards are not eligible.',
  pleaseNote: 'This event has been Rescheduled from the original date of 3/17/20. New Date: Tue Sept 21 2021 8:00pm All original tickets will be honored on the new date. Please hold onto your tickets.',
  priceRanges: [
    {
      type: 'standard',
      currency: 'USD',
      min: 149.0,
      max: 770.0,
    },
  ],
  products: [
    {
      name: 'Hotel California Tour - LaneOne Upgrade Package (Ticket Not Included)',
      id: 'vvG1YZ4VRSFEYu',
      url: 'https://www.ticketmaster.com/hotel-california-tour-laneone-upgrade-package-dallas-texas-09-21-2021/event/0C00574BF3227C0D',
      type: 'VIP',
      classifications: [
        {
          primary: true,
          segment: {
            id: 'KZFzniwnSyZfZ7v7nJ',
            name: 'Music',
          },
          genre: {
            id: 'KnvZfZ7vAeA',
            name: 'Rock',
          },
          subGenre: {
            id: 'KZazBEonSMnZfZ7v6F1',
            name: 'Pop',
          },
          type: {
            id: 'KZAyXgnZfZ7v7nI',
            name: 'Undefined',
          },
          subType: {
            id: 'KZFzBErXgnZfZ7v7lJ',
            name: 'Undefined',
          },
          family: false,
        },
      ],
    },
    {
      name: 'PARKWHIZ AMERICAN AIRLINES CENTER',
      id: 'vvG1YZpxrkSOMH',
      url: 'https://www.ticketmaster.com/parkwhiz-american-airlines-center-dallas-texas-09-21-2021/event/0C005A2786CE0DFC',
      type: 'Upsell',
      classifications: [
        {
          primary: true,
          segment: {
            id: 'KZFzniwnSyZfZ7v7n1',
            name: 'Miscellaneous',
          },
          genre: {
            id: 'KnvZfZ7v7ll',
            name: 'Undefined',
          },
          subGenre: {
            id: 'KZazBEonSMnZfZ7vAv1',
            name: 'Undefined',
          },
          type: {
            id: 'KZAyXgnZfZ7vAva',
            name: 'Parking',
          },
          subType: {
            id: 'KZFzBErXgnZfZ7vAFe',
            name: 'Parking',
          },
          family: false,
        },
      ],
    },
  ],
  seatmap: {
    staticUrl: 'https://maps.ticketmaster.com/maps/geometry/3/event/0C005747EB445F1C/staticImage?type=png&systemId=HOST',
  },
  accessibility: {
    ticketLimit: 4,
  },
  ticketLimit: {
    info: 'There is an overall eight (8) ticket limit for this event.',
  },
  ageRestrictions: {
    legalAgeEnforced: false,
  },
  _links: {
    self: {
      href: '/discovery/v2/events/vvG1YZ4VLloAHj?locale=en-us',
    },
    attractions: [
      {
        href: '/discovery/v2/attractions/K8vZ9171ob7?locale=en-us',
      },
    ],
    venues: [
      {
        href: '/discovery/v2/venues/KovZpZAJ67eA?locale=en-us',
      },
    ],
  },
  _embedded: {
    venues: [
      {
        name: 'American Airlines Center',
        type: 'venue',
        id: 'KovZpZAJ67eA',
        test: false,
        url: 'https://www.ticketmaster.com/american-airlines-center-tickets-dallas/venue/98723',
        locale: 'en-us',
        images: [
          {
            url: 'https://s1.ticketm.net/dbimages/15515v.jpg',
            width: 250,
            height: 125,
            fallback: false,
          },
          {
            ratio: '3_1',
            url: 'https://s1.ticketm.net/dam/v/585/1a6b0731-6022-4e0a-a423-6c8662dbb585_380931_SOURCE.jpg',
            width: 1500,
            height: 500,
            fallback: false,
          },
        ],
        postalCode: '75201',
        timezone: 'America/Chicago',
        city: {
          name: 'Dallas',
        },
        state: {
          name: 'Texas',
          stateCode: 'TX',
        },
        country: {
          name: 'United States Of America',
          countryCode: 'US',
        },
        address: {
          line1: '2500 Victory Avenue',
        },
        location: {
          longitude: '-96.81081803',
          latitude: '32.79067196',
        },
        markets: [
          {
            name: 'Dallas - Fort Worth and More',
            id: '5',
          },
        ],
        dmas: [
          {
            id: 212,
          },
          {
            id: 218,
          },
          {
            id: 261,
          },
          {
            id: 326,
          },
          {
            id: 386,
          },
          {
            id: 405,
          },
          {
            id: 415,
          },
        ],
        boxOfficeInfo: {
          phoneNumberDetail: 'Box Office: 214-665-4797 Event Line: 214-665-4200 Parking Hotline: 214-665-4700 Dallas Mavericks: 214-747-6287 Dallas Stars: 214-467-8277',
          openHoursDetail: 'The Box Office is located on the North-East corner of the building (across from The Lexus Parking Garage). Due to the global coronavirus pandemic, the Box Office is operating under reduced hours. Please visit our website for the current hours of operation: www.americanairlinescenter.com. Concert tickets are not available for purchase at the American Airlines Center Box Office on the day of the public on-sale. Tickets for such non-team events may be purchased by the general public on the first day of ticket sales online at www.ticketmaster.com. Remaining available tickets for any concert/event following the first day of general public ticket sales will be available for purchase at the American Airlines Center Box Office on the next business day.',
          acceptedPaymentDetail: 'Visa, MasterCard, Amex, Discover, Cash **Cashless transactions are highly encouraged to minimize contact.**',
        },
        parkingDetail: 'Parking is located on site and the charges are: Blue Parking : $20-$30 Silver Garage: $25-$30 The Lexus Garage $25-$30 Gold Garage $65-$99(when available) Orange Lot $35-$50 (when available) D Surface Lot Parking : $25-$30 (when available) Parking passes may be purchased in advance at Ticketmaster.com, through ParkWhiz at ParkWhiz.com or at the American Airlines Center website: AmericanAirlinesCenter.com. Limited availability is sold at the venue box office. If guests have not pre-purchased parking, some lots may be available to purchase at arrival. All parking transactions are credit card & debit card only.',
        generalInfo: {
          generalRule: 'No professional cameras or video No selfie sticks No outside food or beverage No bottles or cans No weapons or firearms No illegal substances No laser pointers, beach balls, frisbees etc. Bags and purses will not be permitted. Wallet-size clutches no larger than 4.5in x 6.5in will be permitted. All persons ages 10 & older must wear a face covering except when actively eating and drinking in a ticketed seat. Smoking is not permitted on the premises. Re-Entry is not allowed at any event at the American Airlines Center. For certain situations, such as medical needs, re-entry can be approved by the Guest Services Supervisor at the door.',
          childRule: 'Yes. For most events (some family shows may be excluded) children 2 years and over are required to have a ticket.',
        },
        upcomingEvents: {
          _total: 24,
          ticketmaster: 24,
        },
        _links: {
          self: {
            href: '/discovery/v2/venues/KovZpZAJ67eA?locale=en-us',
          },
        },
      },
    ],
    attractions: [
      {
        name: 'Eagles',
        type: 'attraction',
        id: 'K8vZ9171ob7',
        test: false,
        url: 'https://www.ticketmaster.com/eagles-tickets/artist/734977',
        locale: 'en-us',
        externalLinks: {
          twitter: [
            {
              url: 'https://twitter.com/TheEaglesBand',
            },
          ],
          itunes: [
            {
              url: 'https://itunes.apple.com/artist/id1053549',
            },
          ],
          lastfm: [
            {
              url: 'https://www.last.fm/music/Eagles',
            },
          ],
          wiki: [
            {
              url: 'https://en.wikipedia.org/wiki/Eagles_(band)',
            },
          ],
          facebook: [
            {
              url: 'https://www.facebook.com/EaglesBand',
            },
          ],
          musicbrainz: [
            {
              id: 'f46bd570-5768-462e-b84c-c7c993bbf47e',
            },
          ],
          homepage: [
            {
              url: 'https://eagles.com/',
            },
          ],
        },
        images: [
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_EVENT_DETAIL_PAGE_16_9.jpg',
            width: 205,
            height: 115,
            fallback: false,
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_RETINA_LANDSCAPE_16_9.jpg',
            width: 1136,
            height: 639,
            fallback: false,
          },
          {
            ratio: '4_3',
            url: 'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_CUSTOM.jpg',
            width: 305,
            height: 225,
            fallback: false,
          },
          {
            ratio: '3_2',
            url: 'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_TABLET_LANDSCAPE_3_2.jpg',
            width: 1024,
            height: 683,
            fallback: false,
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_RECOMENDATION_16_9.jpg',
            width: 100,
            height: 56,
            fallback: false,
          },
          {
            ratio: '3_2',
            url: 'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_RETINA_PORTRAIT_3_2.jpg',
            width: 640,
            height: 427,
            fallback: false,
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_TABLET_LANDSCAPE_LARGE_16_9.jpg',
            width: 2048,
            height: 1152,
            fallback: false,
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_RETINA_PORTRAIT_16_9.jpg',
            width: 640,
            height: 360,
            fallback: false,
          },
          {
            ratio: '3_2',
            url: 'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_ARTIST_PAGE_3_2.jpg',
            width: 305,
            height: 203,
            fallback: false,
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_TABLET_LANDSCAPE_16_9.jpg',
            width: 1024,
            height: 576,
            fallback: false,
          },
        ],
        classifications: [
          {
            primary: true,
            segment: {
              id: 'KZFzniwnSyZfZ7v7nJ',
              name: 'Music',
            },
            genre: {
              id: 'KnvZfZ7vAeA',
              name: 'Rock',
            },
            subGenre: {
              id: 'KZazBEonSMnZfZ7v6F1',
              name: 'Pop',
            },
            type: {
              id: 'KZAyXgnZfZ7v7nI',
              name: 'Undefined',
            },
            subType: {
              id: 'KZFzBErXgnZfZ7v7lJ',
              name: 'Undefined',
            },
            family: false,
          },
        ],
        upcomingEvents: {
          _total: 14,
          ticketmaster: 14,
        },
        _links: {
          self: {
            href: '/discovery/v2/attractions/K8vZ9171ob7?locale=en-us',
          },
        },
      },
    ],
  },
};

test('render an events with event details ', () => {
  render(<EventCard event={event} />);
  screen.findAllByText(event.name);
});
